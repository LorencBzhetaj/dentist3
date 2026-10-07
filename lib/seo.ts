import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { locales, localeLabels, type Locale } from "./i18n";

interface PageMetaInput {
  locale: Locale;
  /** Path without locale prefix, e.g. "/services" or "/" */
  path?: string;
  title?: string;
  description: string;
}

export function pageMetadata({ locale, path = "/", title, description }: PageMetaInput): Metadata {
  const suffix = path === "/" ? "" : path;
  const url = `${siteConfig.url}/${locale}${suffix}`;
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${suffix}`]));

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": `${siteConfig.url}/sq${suffix}` },
    },
    openGraph: {
      ...(title ? { title: `${title} | ${siteConfig.name}` } : {}),
      description,
      url,
      siteName: siteConfig.name,
      locale: localeLabels[locale].og,
      type: "website",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
  };
}
