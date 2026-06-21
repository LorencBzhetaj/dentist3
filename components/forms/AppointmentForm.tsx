"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function AppointmentForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: defaultService || "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#0d1b2a] mb-2">Message Sent!</h3>
        <p className="text-slate-500 text-sm">We'll be in touch within 24 hours to confirm your appointment.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-teal-600 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot – hidden from real users */}
      <input type="text" className="hidden" tabIndex={-1} aria-hidden="true" {...register("honeypot")} />

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          id="name"
          type="text"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          label="Phone Number"
          id="phone"
          type="tel"
          placeholder="+383 44 000 000"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <FormField
        label="Email Address"
        id="email"
        type="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormField
        as="select"
        label="Preferred Service"
        id="service"
        error={errors.service?.message}
        {...register("service")}
      >
        <option value="">Select a service</option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>{s.title}</option>
        ))}
      </FormField>

      <FormField
        label="Preferred Date (optional)"
        id="preferredDate"
        type="date"
        error={errors.preferredDate?.message}
        {...register("preferredDate")}
      />

      <FormField
        as="textarea"
        label="Message (optional)"
        id="message"
        placeholder="Tell us about your dental concern..."
        error={errors.message?.message}
        {...register("message")}
      />

      {status === "error" && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" loading={status === "loading"} className="w-full justify-center" size="lg">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
