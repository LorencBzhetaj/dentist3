import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import { CasesPreview, ClinicIntro, TourismBand } from "@/components/sections/HomeSections";
import VisitUs from "@/components/sections/VisitUs";
import CTASection from "@/components/sections/CTASection";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ServicesPreview locale={locale} dict={dict} />
      <ClinicIntro locale={locale} dict={dict} />
      <CasesPreview locale={locale} dict={dict} />
      <TourismBand locale={locale} dict={dict} />
      <VisitUs locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
