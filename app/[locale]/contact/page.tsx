import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import { isServiceSlug, serviceSlugs } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/sections/PageHeader";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { ContactDetails, MapEmbed } from "@/components/sections/VisitUs";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale).contact;
  return pageMetadata({ locale, path: "/contact", title: t.title, description: t.subtitle });
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const { service } = await searchParams;
  const dict = getDictionary(locale);
  const t = dict.contact;
  const preselected = typeof service === "string" && isServiceSlug(service) ? service : undefined;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div className="space-y-12">
              <ContactDetails dict={dict} />
              <MapEmbed locale={locale} dict={dict} />
            </div>

            <div id="request" className="scroll-mt-24 bg-sand-50 rounded-[2rem] p-6 sm:p-9 border border-sand-200">
              <h2 className="font-serif text-4xl text-ink mb-3">{t.formTitle}</h2>
              <p className="text-sm text-muted leading-relaxed mb-8">{t.formSubtitle}</p>
              <AppointmentForm
                key={preselected ?? "none"}
                locale={locale}
                t={dict.form}
                services={serviceSlugs.map((slug) => ({ slug, title: dict.services.items[slug].title }))}
                defaultService={preselected}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
