import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import { serviceSlugs, serviceMeta } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon, ServiceGlyph } from "@/components/ui/Icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({ locale, path: "/services", title: dict.services.page.title, description: dict.services.page.subtitle });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.services.page;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-12 lg:py-20 bg-white">
        <Container>
          <ul className="divide-y divide-sand-200 border-y border-sand-200">
            {serviceSlugs.map((slug, i) => {
              const s = dict.services.items[slug];
              return (
                <li key={slug}>
                  <Link
                    href={href(locale, `/services/${slug}`)}
                    className="group grid grid-cols-[auto_1fr] lg:grid-cols-[4rem_auto_1fr_1.4fr_auto] items-start lg:items-center gap-x-5 lg:gap-x-8 gap-y-2 py-8 lg:py-10"
                  >
                    <span className="hidden lg:block text-sm text-sand-500 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="row-span-2 lg:row-span-1 w-14 h-14 rounded-full bg-sand-100 text-sand-700 flex items-center justify-center group-hover:bg-ink group-hover:text-sand-200 transition-colors">
                      <ServiceGlyph icon={serviceMeta[slug].icon} />
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl text-ink group-hover:text-sand-700 transition-colors">{s.title}</h2>
                    <p className="text-muted leading-relaxed">{s.short}</p>
                    <span className="hidden lg:flex w-11 h-11 rounded-full border border-sand-300 items-center justify-center text-ink group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-colors">
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
