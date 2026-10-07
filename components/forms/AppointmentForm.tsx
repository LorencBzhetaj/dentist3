"use client";

import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData, type ContactErrorKey } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import type { ServiceSlug } from "@/data/services";
import { FormField } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { InstagramIcon, PhoneIcon } from "@/components/ui/Icons";

const noopSubscribe = () => () => {};

type Status = "idle" | "loading" | "success" | "error" | "not_configured" | "rate_limited";

interface AppointmentFormProps {
  locale: Locale;
  t: Dictionary["form"];
  services: { slug: ServiceSlug; title: string }[];
  defaultService?: ServiceSlug;
}

export default function AppointmentForm({ locale, t, services, defaultService }: AppointmentFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  // Submit stays disabled until hydrated, so a native (non-JS) submit can never put personal data in the URL.
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: defaultService, locale, email: "" },
  });

  const err = (key?: string) => (key ? t.errors[key as ContactErrorKey] ?? t.error : undefined);

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      // Only show success when the server confirms the request reached the configured destination.
      if (res.ok) {
        setStatus("success");
        reset({ service: defaultService, locale, email: "" });
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { code?: string };
      if (body.code === "not_configured") setStatus("not_configured");
      else if (res.status === 429) setStatus("rate_limited");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10" role="status">
        <div className="w-14 h-14 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-5 text-sand-700">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-ink mb-3">{t.successTitle}</h3>
        <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto">{t.successText}</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-sand-700 underline underline-offset-4">
          {t.again}
        </button>
      </div>
    );
  }

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot – hidden from real users */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("honeypot")} />

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label={t.name} id="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} error={err(errors.name?.message)} {...register("name")} />
        <FormField label={t.phone} id="phone" type="tel" autoComplete="tel" placeholder={t.phonePlaceholder} error={err(errors.phone?.message)} {...register("phone")} />
      </div>

      <FormField label={t.email} id="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} error={err(errors.email?.message)} {...register("email")} />

      <FormField as="select" label={t.service} id="service" error={err(errors.service?.message)} defaultValue={defaultService ?? ""} {...register("service")}>
        <option value="" disabled>
          {t.servicePlaceholder}
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.title}
          </option>
        ))}
        <option value="other">{t.serviceOther}</option>
      </FormField>

      <div>
        <FormField label={t.date} id="preferredDate" type="date" aria-describedby="date-hint" {...register("preferredDate")} />
        <p id="date-hint" className="text-xs text-muted mt-1.5">{t.dateHint}</p>
      </div>

      <FormField as="textarea" label={t.message} id="message" placeholder={t.messagePlaceholder} error={err(errors.message?.message)} {...register("message")} />

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/80 leading-relaxed cursor-pointer">
          <input type="checkbox" className="mt-1 w-4 h-4 accent-ink shrink-0" {...register("consent")} />
          <span>{t.consent}</span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{err(errors.consent.message)}</p>}
      </div>

      {(status === "error" || status === "not_configured" || status === "rate_limited") && (
        <div className="text-sm bg-sand-100 border border-sand-300 text-ink rounded-2xl px-4 py-4" role="alert">
          <p className="mb-3">{status === "not_configured" ? t.notConfigured : status === "rate_limited" ? t.rateLimited : t.error}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
              <PhoneIcon className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
              <InstagramIcon className="w-4 h-4" />
              {siteConfig.social.instagramHandle}
            </a>
          </div>
        </div>
      )}

      <Button type="submit" loading={status === "loading"} disabled={!ready} className="w-full">
        {status === "loading" ? t.sending : t.submit}
      </Button>
    </form>
  );
}
