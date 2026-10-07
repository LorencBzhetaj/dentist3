"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, hasLocale } from "@/lib/i18n";
import sq from "@/dictionaries/sq";
import en from "@/dictionaries/en";
import it from "@/dictionaries/it";

const texts = { sq: sq.notFound, en: en.notFound, it: it.notFound };

export default function NotFound() {
  const segment = usePathname()?.split("/")[1] ?? "";
  const locale = hasLocale(segment) ? segment : defaultLocale;
  const t = texts[locale];

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-sand-50 px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl text-sand-400 mb-4">404</p>
        <h1 className="font-serif text-4xl text-ink mb-3">{t.title}</h1>
        <p className="text-muted mb-8">{t.text}</p>
        <Link href={`/${locale}`} className="inline-flex items-center justify-center bg-ink text-white font-medium px-7 py-3.5 rounded-full hover:bg-ink-soft transition-colors text-sm">
          {t.home}
        </Link>
      </div>
    </div>
  );
}
