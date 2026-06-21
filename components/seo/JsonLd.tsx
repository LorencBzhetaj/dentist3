import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  type?: "dental" | "faq" | "review" | "service";
  data?: Record<string, unknown>;
}

export default function JsonLd({ type = "dental", data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === "dental") {
    schema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressCountry: "XK",
      },
      openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-15:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
      },
    };
  } else if (type === "faq" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs,
    };
  } else if (type === "service" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: data.title,
      description: data.description,
      provider: {
        "@type": "Dentist",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
