import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import Container from "@/components/ui/Container";
import LinkButton from "@/components/ui/LinkButton";
import { PhoneIcon } from "@/components/ui/Icons";

interface CTASectionProps {
  locale: Locale;
  dict: Dictionary;
  title?: string;
  subtitle?: string;
}

export default function CTASection({ locale, dict, title = dict.cta.title, subtitle = dict.cta.subtitle }: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-ink overflow-hidden">
      <Image
        src="/images/brand/logo-light.png"
        alt=""
        width={1272}
        height={959}
        className="absolute -right-24 -bottom-16 w-[520px] h-auto opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-4">{title}</h2>
          <p className="text-sand-200/80 text-lg mb-9">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <LinkButton href={href(locale, "/contact#request")} variant="light">
              {dict.common.requestConsult}
            </LinkButton>
            <LinkButton href={siteConfig.phoneHref} variant="ghost-light">
              <PhoneIcon className="w-4 h-4" />
              {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
