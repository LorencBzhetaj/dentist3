import { siteConfig, fullAddress, mapsDirectionsUrl, mapsEmbedUrl, mapsPlaceUrl } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export function ContactDetails({ dict }: { dict: Dictionary }) {
  const rows = [
    { icon: <PinIcon />, label: dict.common.address, value: `${fullAddress}, ${siteConfig.address.country}`, href: mapsPlaceUrl },
    { icon: <PhoneIcon />, label: dict.common.phone, value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: <InstagramIcon />, label: dict.common.instagram, value: siteConfig.social.instagramHandle, href: siteConfig.social.instagram },
    { icon: <ClockIcon />, label: dict.common.hours, value: dict.common.hoursPending },
  ];

  return (
    <ul className="space-y-6">
      {rows.map((row) => (
        <li key={row.label} className="flex gap-4">
          <span className="w-11 h-11 rounded-full border border-sand-300 text-sand-700 flex items-center justify-center shrink-0">{row.icon}</span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-1">{row.label}</p>
            {row.href ? (
              <a
                href={row.href}
                {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-ink hover:text-sand-700 transition-colors break-words"
              >
                {row.value}
              </a>
            ) : (
              <p className="text-ink/80 text-sm leading-relaxed">{row.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function MapEmbed({ locale, dict, className }: { locale: Locale; dict: Dictionary; className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-sand-100 border border-sand-200">
        <iframe
          title={dict.common.mapTitle}
          src={mapsEmbedUrl(locale)}
          className="absolute inset-0 w-full h-full border-0 grayscale-[35%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <LinkButton href={mapsDirectionsUrl} variant="primary">
          <PinIcon className="w-4 h-4" />
          {dict.common.directions}
        </LinkButton>
        <LinkButton href={mapsPlaceUrl} variant="outline">
          {dict.common.openMaps}
        </LinkButton>
      </div>
    </div>
  );
}

export default function VisitUs({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading eyebrow={dict.home.visit.eyebrow} title={dict.home.visit.title} align="left" />
            <div className="mt-10">
              <ContactDetails dict={dict} />
            </div>
          </div>
          <MapEmbed locale={locale} dict={dict} />
        </div>
      </Container>
    </section>
  );
}
