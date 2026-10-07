import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/lib/i18n";
import { serviceSlugs } from "@/data/services";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, priority: 0.8 })),
  { path: "/about", priority: 0.7 },
  { path: "/before-after", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])) },
    }))
  );
}
