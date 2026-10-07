import Link from "next/link";
import Image from "next/image";
import { siteConfig, fullAddress, mapsDirectionsUrl } from "@/lib/site-config";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { mainNav, legalNav } from "@/data/navigation";
import { serviceSlugs } from "@/data/services";
import Container from "@/components/ui/Container";
import { InstagramIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const linkClass = "text-sm hover:text-white transition-colors";

  return (
    <footer className="bg-ink text-sand-200/70 pt-16 pb-24 lg:pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] gap-10 mb-14">
          <div>
            <Image src="/images/brand/logo-light.png" alt={siteConfig.name} width={1272} height={959} className="w-36 h-auto mb-5" />
            <p className="text-sm leading-relaxed">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-5">{dict.footer.explore}</h3>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link href={href(locale, item.path)} className={linkClass}>
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-5">{dict.footer.services}</h3>
            <ul className="space-y-2.5">
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link href={href(locale, `/services/${slug}`)} className={linkClass}>
                    {dict.services.items[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-5">{dict.footer.contact}</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 items-start hover:text-white transition-colors">
                  <PinIcon className="w-4 h-4 mt-0.5 text-sand-400 shrink-0" />
                  <span>{fullAddress}, {siteConfig.address.country}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex gap-2.5 items-center hover:text-white transition-colors">
                  <PhoneIcon className="w-4 h-4 text-sand-400 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 items-center hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4 text-sand-400 shrink-0" />
                  {siteConfig.social.instagramHandle}
                </a>
              </li>
              <li className="pt-3 border-t border-white/10 text-xs leading-relaxed">
                <span className="text-sand-200">{dict.common.hours}:</span> {dict.common.hoursPending}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights} · {dict.common.nipt}: {siteConfig.nipt}
          </p>
          <div className="flex gap-4">
            {legalNav.map((item) => (
              <Link key={item.path} href={href(locale, item.path)} className="hover:text-white transition-colors">
                {dict.footer[item.key]}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
