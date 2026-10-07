// Verified clinic facts only. Anything not confirmed by the clinic stays out of here.
export const siteConfig = {
  name: "Sorèr Dental Clinic",
  shortName: "Sorèr",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sorer-dental.vercel.app",
  phone: "+355 68 476 7455",
  phoneHref: "tel:+355684767455",
  nipt: "M52109034H",
  address: {
    building: "Garden Building",
    street: "Rruga e Kavajës",
    city: "Tiranë",
    postalCode: "1001",
    country: "Shqipëri",
    countryCode: "AL",
  },
  geo: { lat: 41.3268457, lng: 19.8063863 },
  social: {
    instagram: "https://www.instagram.com/sorer_dental_clinic/",
    instagramHandle: "@sorer_dental_clinic",
  },
} as const;

export const fullAddress = `${siteConfig.address.building}, ${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.postalCode}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.lat},${siteConfig.geo.lng}`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.lat},${siteConfig.geo.lng}`;
export const mapsEmbedUrl = (lang: string) =>
  `https://maps.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}&z=17&hl=${lang}&output=embed`;
