export const locales = ["sq", "en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sq";

export const localeLabels: Record<Locale, { short: string; name: string; og: string }> = {
  sq: { short: "SQ", name: "Shqip", og: "sq_AL" },
  en: { short: "EN", name: "English", og: "en_US" },
  it: { short: "IT", name: "Italiano", og: "it_IT" },
};

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Prefix an internal path with the locale: href("en", "/services") -> "/en/services" */
export const href = (locale: Locale, path = "/") => (path === "/" ? `/${locale}` : `/${locale}${path}`);
