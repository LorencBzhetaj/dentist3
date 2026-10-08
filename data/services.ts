// Services listed on the clinic's Instagram profile. Text lives in the dictionaries (dictionaries/*.ts).
export const serviceSlugs = [
  "dental-implants",
  "prosthodontics",
  "orthodontics",
  "invisalign",
  "cosmetic-dentistry",
  "bone-grafting",
  "dental-tourism",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceIcon = "implant" | "crown" | "braces" | "aligner" | "sparkle" | "graft" | "travel";

// image: path in /public/images/services/ once the clinic supplies a photo for the service.
// Until then the card shows a branded panel with the service icon instead of a broken image.
export const serviceMeta: Record<ServiceSlug, { icon: ServiceIcon; related: ServiceSlug[]; image?: string }> = {
  "dental-implants": { icon: "implant", related: ["bone-grafting", "prosthodontics"] },
  prosthodontics: { icon: "crown", related: ["dental-implants", "cosmetic-dentistry"] },
  orthodontics: { icon: "braces", related: ["invisalign", "cosmetic-dentistry"] },
  invisalign: { icon: "aligner", related: ["orthodontics", "cosmetic-dentistry"] },
  "cosmetic-dentistry": { icon: "sparkle", related: ["prosthodontics", "invisalign"] },
  "bone-grafting": { icon: "graft", related: ["dental-implants", "prosthodontics"] },
  "dental-tourism": { icon: "travel", related: ["dental-implants", "prosthodontics"] },
};

export const isServiceSlug = (value: string): value is ServiceSlug =>
  (serviceSlugs as readonly string[]).includes(value);

/**
 * Template services NOT confirmed for Sorèr during research. Kept here as a reminder only —
 * they are not rendered, linked, listed in the form or the sitemap until the clinic confirms them.
 */
export const pendingServices = ["teeth-whitening", "veneers", "general-dentistry", "emergency-dental-care"] as const;
