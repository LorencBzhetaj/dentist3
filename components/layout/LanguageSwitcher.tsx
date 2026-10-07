"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale, label, className }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1 text-xs tracking-widest", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-sand-300" aria-hidden="true">/</span>}
          <Link
            href={`/${l}${rest}`}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            title={localeLabels[l].name}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={cn("px-1 py-1 transition-colors", l === locale ? "text-ink font-semibold" : "text-muted hover:text-ink")}
          >
            {localeLabels[l].short}
          </Link>
        </span>
      ))}
    </nav>
  );
}
