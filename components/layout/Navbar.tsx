"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "@/components/ui/Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export interface NavbarProps {
  locale: Locale;
  items: { label: string; href: string }[];
  labels: { book: string; call: string; menu: string; close: string; language: string; home: string };
}

export default function Navbar({ locale, items, labels }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page the mobile hero is a full-bleed photo: keep the bar transparent with a light logo.
  const overPhoto = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(23,20,17,0.06)]" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href={`/${locale}`} className="relative block h-9 w-[110px] lg:h-11 lg:w-[134px]" aria-label={`${siteConfig.name} – ${labels.home}`}>
              <Image
                src="/images/brand/wordmark.png"
                alt=""
                fill
                priority
                sizes="134px"
                className={cn("object-contain object-left", overPhoto && "max-lg:opacity-0")}
              />
              <Image
                src="/images/brand/wordmark-light.png"
                alt=""
                fill
                priority
                sizes="110px"
                className={cn("object-contain object-left lg:hidden transition-opacity", overPhoto ? "opacity-100" : "opacity-0")}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main">
              {items.map((item) => {
                const active = item.href === `/${locale}` ? pathname === item.href : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "px-3 xl:px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                      active ? "text-sand-700 bg-sand-100" : "text-muted hover:text-ink hover:bg-sand-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              <LanguageSwitcher locale={locale} label={labels.language} />
              <a href={siteConfig.phoneHref} className="hidden xl:inline text-sm text-muted whitespace-nowrap hover:text-ink transition-colors">
                {siteConfig.phone}
              </a>
              <Link
                href={`/${locale}/contact#request`}
                className="bg-ink text-white text-sm font-medium tracking-wide whitespace-nowrap px-5 xl:px-6 py-2.5 rounded-full hover:bg-ink-soft transition-colors"
              >
                {labels.book}
              </Link>
            </div>

            <button
              className={cn("lg:hidden -mr-2 p-2 rounded-lg transition-colors", overPhoto ? "text-white" : "text-ink")}
              onClick={() => setMenuOpen(true)}
              aria-label={labels.menu}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} locale={locale} items={items} labels={labels} />

      {/* Mobile sticky actions. On the home page they appear once the hero (which has its own buttons) is scrolled past. */}
      <div
        className={cn(
          "lg:hidden fixed bottom-0 left-0 right-0 z-20 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-sand-200 transition-transform duration-300",
          isHome && !pastHero ? "translate-y-full" : "translate-y-0"
        )}
      >
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 border border-ink/20 text-ink text-sm font-medium px-5 py-3 rounded-full"
          >
            <PhoneIcon className="w-4 h-4" />
            {labels.call}
          </a>
          <Link
            href={`/${locale}/contact#request`}
            className="flex items-center justify-center bg-ink text-white text-sm font-medium py-3 rounded-full"
          >
            {labels.book}
          </Link>
        </div>
      </div>
    </>
  );
}
