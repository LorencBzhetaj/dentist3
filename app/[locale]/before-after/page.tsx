import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import { cases } from "@/data/cases";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/sections/PageHeader";
import CaseCard from "@/components/sections/CaseCard";
import CTASection from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale).cases;
  return pageMetadata({ locale, path: "/before-after", title: t.eyebrow, description: t.subtitle });
}

export default async function BeforeAfterPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.cases;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {cases.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <CaseCard item={item} dict={dict} sizes="(min-width: 1024px) 490px, (min-width: 640px) 50vw, 100vw" />
              </Reveal>
            ))}
          </div>
          <p className="max-w-5xl mx-auto mt-12 text-sm text-muted italic">{t.note}</p>
        </Container>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
