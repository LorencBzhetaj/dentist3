import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import { clinicPhotos } from "@/data/cases";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/sections/PageHeader";
import VisitUs from "@/components/sections/VisitUs";
import CTASection from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale).about;
  return pageMetadata({ locale, path: "/about", title: t.eyebrow, description: t.intro[0] });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.about;

  // The team section is intentionally hidden until the clinic provides real doctor profiles.
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <Image
                src={clinicPhotos.reception.src}
                alt={t.receptionAlt}
                width={clinicPhotos.reception.width}
                height={clinicPhotos.reception.height}
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="w-full h-auto rounded-[2rem]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading title={t.introTitle} align="left" />
              <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
                {t.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-sand-50">
        <Container>
          <SectionHeading title={t.valuesTitle} />
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="bg-white rounded-3xl p-8 border border-sand-200">
                <span className="font-serif text-sand-500 text-xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl text-ink mt-4 mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading title={t.galleryTitle} />
          <div className="mt-12 grid sm:grid-cols-[1.3fr_1fr] gap-6 items-start">
            {t.gallery.map((g) => {
              const photo = clinicPhotos[g.key as keyof typeof clinicPhotos];
              return (
                <Reveal key={g.key}>
                  <Image
                    src={photo.src}
                    alt={g.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="w-full h-auto rounded-3xl"
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <VisitUs locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
