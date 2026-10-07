import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { cases, clinicPhotos } from "@/data/cases";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";
import CaseCard from "./CaseCard";

const textLink =
  "inline-flex items-center gap-2 text-sm text-ink border-b border-sand-400 pb-1 hover:border-ink transition-colors";

export function ClinicIntro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.clinic;
  return (
    <section className="py-20 lg:py-28 bg-sand-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative max-w-md mx-auto lg:max-w-none w-full">
            <Image
              src={clinicPhotos.treatmentRoom.src}
              alt={dict.home.hero.roomAlt}
              width={clinicPhotos.treatmentRoom.width}
              height={clinicPhotos.treatmentRoom.height}
              sizes="(min-width: 1024px) 560px, (min-width: 448px) 448px, 100vw"
              className="w-full h-auto rounded-[2rem] lg:hidden"
            />
            {/* Desktop shows the reception here; the treatment room is already in the desktop hero */}
            <Image
              src={clinicPhotos.reception.src}
              alt={dict.home.hero.imageAlt}
              width={clinicPhotos.reception.width}
              height={clinicPhotos.reception.height}
              sizes="560px"
              className="hidden lg:block w-full h-auto rounded-[2rem]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} align="left" />
            <p className="mt-6 text-muted leading-relaxed text-lg">{t.text}</p>
            <Link href={href(locale, "/about")} className={`${textLink} mt-8`}>
              {t.link}
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function CasesPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.cases;
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} align="left" />
          <Link href={href(locale, "/before-after")} className={`${textLink} self-start sm:self-auto shrink-0`}>
            {t.link}
            <ArrowIcon />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-4xl">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <CaseCard item={item} dict={dict} sizes="(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TourismBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.tourism;
  return (
    <section className="bg-sand-100">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-sand-600 mb-3">{t.eyebrow}</p>
            <h2 className="font-serif text-4xl text-ink mb-4">{t.title}</h2>
            <p className="text-muted leading-relaxed">{t.text}</p>
          </div>
          <Link href={href(locale, "/services/dental-tourism")} className={`${textLink} self-start lg:self-auto shrink-0`}>
            {t.link}
            <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
