import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { serviceSlugs } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";
import ServiceImage from "./ServiceImage";

export default function ServicesPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow={dict.home.services.eyebrow}
            title={dict.home.services.title}
            subtitle={dict.home.services.subtitle}
            align="left"
          />
          <Link
            href={href(locale, "/services")}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-sand-700 hover:text-ink transition-colors shrink-0"
          >
            {dict.common.allServices}
            <ArrowIcon />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceSlugs.map((slug, i) => {
            const s = dict.services.items[slug];
            return (
              <Reveal key={slug} delay={i * 0.05}>
                <Link
                  href={href(locale, `/services/${slug}`)}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-sand-200 bg-white hover:border-sand-300 hover:shadow-lg transition-all duration-300"
                >
                  <ServiceImage slug={slug} alt={s.title} className="h-44" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-sand-700 transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">{s.short}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-sand-700 mt-4">
                      {dict.common.learnMore}
                      <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
          {/* 8th cell: completes the 2- and 4-column grids */}
          <Reveal delay={0.35} className="hidden sm:block">
            <div className="flex flex-col justify-between gap-6 h-full rounded-2xl bg-ink text-white p-7">
              <p className="font-serif text-3xl leading-snug">{dict.cta.title}</p>
              <div>
                <p className="text-sm text-sand-200/75 mb-5">{dict.cta.subtitle}</p>
                <Link
                  href={href(locale, "/contact#request")}
                  className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium px-5 py-2.5 rounded-full hover:bg-sand-100 transition-colors"
                >
                  {dict.common.requestConsult}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href={href(locale, "/services")} className="inline-flex items-center gap-1.5 text-sm font-medium text-sand-700">
            {dict.common.allServices}
            <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
