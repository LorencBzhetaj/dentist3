export const siteConfig = {
  name: "DentaCare",
  tagline: "Advanced Dental Care Designed Around You",
  description:
    "Premium dental clinic offering implants, veneers, whitening, orthodontics, and general dentistry. Trusted by 8,000+ patients.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dentacare.com",
  phone: "+383 44 123 456",
  email: "info@dentacare.com",
  address: {
    street: "Dr. Ditan Hoxha, Prishtina 10000",
    city: "Prishtina",
    country: "Kosovo",
  },
  hours: {
    weekdays: "Mon – Fri: 09:00 – 19:00",
    saturday: "Saturday: 09:00 – 15:00",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com/dentacare",
    instagram: "https://instagram.com/dentacare",
    linkedin: "https://linkedin.com/company/dentacare",
  },
  stats: [
    { value: "15+", label: "Years of Experience" },
    { value: "8K+", label: "Happy Patients" },
    { value: "4.9/5", label: "Google Rating" },
    { value: "98%", label: "Patient Satisfaction" },
  ],
} as const;
