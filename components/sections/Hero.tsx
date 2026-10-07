import Image from "next/image";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { clinicPhotos } from "@/data/cases";
import LinkButton from "@/components/ui/LinkButton";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.hero;

  return (
    <>
      {/* Mobile: full-bleed clinic photo, minimal text, two actions */}
      <section className="relative lg:hidden h-[100svh] min-h-[560px] max-h-[900px] overflow-hidden bg-ink">
        <Image
          src={clinicPhotos.reception.src}
          alt={t.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[92%_center]"
        />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/55 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-ink via-ink/70 to-transparent" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-sand-300 mb-3">{t.eyebrow}</p>
          <h1 className="font-serif text-[2.75rem] leading-[0.95] text-white mb-3">
            Sorèr
            <span className="block text-2xl tracking-[0.18em] uppercase font-sans font-light mt-2">Dental Clinic</span>
          </h1>
          <p className="text-sm text-white/75 mb-7">{t.mobileSubtitle}</p>
          <div className="grid grid-cols-2 gap-3">
            <LinkButton href={href(locale, "/contact#request")} variant="light" className="px-4">
              {dict.common.book}
            </LinkButton>
            <LinkButton href={href(locale, "/contact")} variant="ghost-light" className="px-4">
              {dict.common.contact}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Desktop: text + treatment room photo */}
      <section className="relative hidden lg:flex items-center min-h-[92vh] bg-sand-50 overflow-hidden pt-20">
        <div className="mx-auto max-w-7xl px-8 w-full py-16">
          <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-sand-600 mb-6">{t.eyebrow}</p>
              <h1 className="font-serif text-7xl xl:text-8xl leading-[0.95] text-ink mb-8">
                Sorèr
                <span className="block font-sans font-light text-3xl xl:text-4xl tracking-[0.2em] uppercase mt-4 text-ink-soft">
                  Dental Clinic
                </span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-10 max-w-lg">{t.subtitle}</p>
              <div className="flex gap-3">
                <LinkButton href={href(locale, "/contact#request")}>{dict.common.requestConsult}</LinkButton>
                <LinkButton href={href(locale, "/services")} variant="outline">
                  {dict.common.viewServices}
                  <ArrowIcon />
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-sand-300/70" aria-hidden="true" />
              <Image
                src={clinicPhotos.treatmentRoom.src}
                alt={t.roomAlt}
                width={clinicPhotos.treatmentRoom.width}
                height={clinicPhotos.treatmentRoom.height}
                priority
                sizes="(min-width: 1280px) 520px, 42vw"
                className="relative w-full max-h-[78vh] object-cover rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(23,20,17,0.35)]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
