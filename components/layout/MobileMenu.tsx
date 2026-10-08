"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { InstagramIcon, PhoneIcon } from "@/components/ui/Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import type { NavbarProps } from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  items: NavbarProps["items"];
  labels: NavbarProps["labels"];
}

export default function MobileMenu({ isOpen, onClose, locale, items, labels }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-ink/40 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[88vw] bg-sand-50 z-50 shadow-2xl transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full invisible"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={siteConfig.name}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b border-sand-200">
          <Image src="/images/brand/logo.png" alt={siteConfig.name} width={1272} height={959} className="h-12 w-auto" />
          <button onClick={onClose} className="p-2 -mr-2 rounded-lg hover:bg-sand-100 transition-colors" aria-label={labels.close}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-3 py-4 flex flex-col">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-serif text-2xl text-ink py-2.5 px-3 rounded-xl hover:bg-sand-100 hover:text-sand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6">
          <LanguageSwitcher locale={locale} label={labels.language} className="text-sm" />
        </div>
        <div className="mt-auto p-5 border-t border-sand-200 space-y-3">
          <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm text-ink">
            <PhoneIcon className="w-4 h-4 text-sand-600" />
            {siteConfig.phone}
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink">
            <InstagramIcon className="w-4 h-4 text-sand-600" />
            {siteConfig.social.instagramHandle}
          </a>
          <Link
            href={`/${locale}/contact#request`}
            onClick={onClose}
            className="flex items-center justify-center w-full bg-ink text-white font-medium py-3 rounded-full text-sm"
          >
            {labels.book}
          </Link>
        </div>
      </div>
    </>
  );
}
