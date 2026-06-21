import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    { url: base, priority: 1 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/doctors`, priority: 0.8 },
    { url: `${base}/before-after`, priority: 0.7 },
    { url: `${base}/reviews`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.9 },
    { url: `${base}/privacy-policy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
  ].map((r) => ({ ...r, lastModified: new Date(), changeFrequency: "monthly" as const }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${base}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes];
}
