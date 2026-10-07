import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";

// Only verified facts: no rating, opening hours or email until the clinic confirms them.
export default function JsonLd({ locale, description }: { locale: Locale; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/images/og-image.jpg`,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    telephone: siteConfig.phone,
    taxID: siteConfig.nipt,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.building}, ${siteConfig.address.street}`,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
    sameAs: [siteConfig.social.instagram],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
