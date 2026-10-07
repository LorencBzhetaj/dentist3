import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { serviceSlugs, serviceMeta } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, ServiceGlyph } from "@/components/ui/Icons";

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
            className="inline-flex items-center gap-2 text-sm text-ink border-b border-sand-400 pb-1 hover:border-ink transition-colors self-start sm:self-auto shrink-0"
          >
            {dict.common.allServices}
            <ArrowIcon />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-200 border border-sand-200 rounded-3xl overflow-hidden">
          {serviceSlugs.map((slug, i) => {
            const s = dict.services.items[slug];
            return (
              <Reveal key={slug} delay={i * 0.04} className="bg-white">
                <Link href={href(locale, `/services/${slug}`)} className="group flex flex-col h-full p-6 sm:p-7 hover:bg-sand-50 transition-colors">
                  <div className="flex items-start justify-between mb-4 sm:mb-8">
                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sand-100 text-sand-700 flex items-center justify-center group-hover:bg-ink group-hover:text-sand-200 transition-colors">
                      <ServiceGlyph icon={serviceMeta[slug].icon} />
                    </span>
                    <span className="text-xs text-sand-500 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{s.short}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase text-sand-700 mt-4 sm:mt-6">
                    {dict.common.learnMore}
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
          {/* Fills the 8th cell of the 2- and 4-column grids with a contact prompt */}
          <div className="hidden sm:flex flex-col justify-between gap-6 bg-ink text-white p-7">
            <p className="font-serif text-2xl leading-snug">{dict.cta.title}</p>
            <Link href={href(locale, "/contact#request")} className="inline-flex items-center gap-2 text-sm text-sand-300 hover:text-white transition-colors">
              {dict.common.requestConsult}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
