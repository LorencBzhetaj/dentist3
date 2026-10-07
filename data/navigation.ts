import type { Dictionary } from "@/dictionaries";

export const mainNav: { key: keyof Dictionary["nav"]; path: string }[] = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "cases", path: "/before-after" },
  { key: "contact", path: "/contact" },
];

export const legalNav: { key: "privacy" | "terms"; path: string }[] = [
  { key: "privacy", path: "/privacy-policy" },
  { key: "terms", path: "/terms" },
];
