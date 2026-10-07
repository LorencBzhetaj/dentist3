import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, href, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/dictionaries";
import { isServiceSlug, serviceMeta, serviceSlugs } from "@/data/services";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import LinkButton from "@/components/ui/LinkButton";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon, PhoneIcon, ServiceGlyph } from "@/components/ui/Icons";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale) || !isServiceSlug(slug)) return {};
  const s = getDictionary(locale).services.items[slug];
  return pageMetadata({ locale, path: `/services/${slug}`, title: s.title, description: s.short });
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale) || !isServiceSlug(slug)) notFound();
  const dict = getDictionary(locale);
  const t = dict.services.detail;
  const s = dict.services.items[slug];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader eyebrow={t.eyebrow} title={s.title} subtitle={s.short}>
        <Link href={href(locale, "/services")} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink mb-8 transition-colors">
          <ArrowIcon direction="left" />
          {t.back}
        </Link>
      </PageHeader>

      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_22rem] gap-14 lg:gap-20">
            <div className="space-y-16 min-w-0">
              <div>
                <h2 className="font-serif text-3xl text-ink mb-5">{t.about}</h2>
                <p className="text-lg text-muted leading-relaxed">{s.description}</p>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-ink mb-6">{t.benefits}</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 bg-sand-50 border border-sand-200 rounded-2xl px-5 py-4">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sand-500 shrink-0" aria-hidden="true" />
                      <span className="text-ink/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-ink mb-8">{t.process}</h2>
                <ol className="relative space-y-8">
                  <span className="absolute left-5 top-2 bottom-2 w-px bg-sand-200" aria-hidden="true" />
                  {s.process.map((step, i) => (
                    <li key={step.title} className="relative flex gap-5">
                      <span className="w-10 h-10 rounded-full bg-ink text-sand-200 flex items-center justify-center text-sm shrink-0 font-serif">
                        {i + 1}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="font-medium text-ink mb-1">{step.title}</h3>
                        <p className="text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-3xl text-ink mb-4">{t.faq}</h2>
                <Accordion items={s.faqs} />
              </div>

              <p className="text-sm text-muted italic">{t.disclaimer}</p>
            </div>

            <aside className="lg:sticky lg:top-28 self-start space-y-6">
              <div className="bg-sand-50 rounded-3xl p-7 border border-sand-200">
                <span className="w-14 h-14 rounded-full bg-white text-sand-700 flex items-center justify-center mb-5 border border-sand-200">
                  <ServiceGlyph icon={serviceMeta[slug].icon} />
                </span>
                <h2 className="font-serif text-2xl text-ink mb-2">{t.sidebarTitle}</h2>
                <p className="text-sm text-muted leading-relaxed mb-6">{t.sidebarText}</p>
                <div className="flex flex-col gap-3">
                  <LinkButton href={href(locale, `/contact?service=${slug}#request`)}>{dict.common.requestConsult}</LinkButton>
                  <LinkButton href={siteConfig.phoneHref} variant="outline">
                    <PhoneIcon className="w-4 h-4" />
                    {siteConfig.phone}
                  </LinkButton>
                </div>
              </div>

              <div className="px-1">
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted mb-3">{t.related}</h2>
                <ul className="space-y-2">
                  {serviceMeta[slug].related.map((r) => (
                    <li key={r}>
                      <Link href={href(locale, `/services/${r}`)} className="group flex items-center justify-between py-2 border-b border-sand-200 text-ink hover:text-sand-700 transition-colors">
                        <span className="font-serif text-xl">{dict.services.items[r].title}</span>
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
