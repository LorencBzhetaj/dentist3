export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Before & After", href: "/before-after" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/doctors" },
    { label: "Before & After", href: "/before-after" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Dental Implants", href: "/services/dental-implants" },
    { label: "Teeth Whitening", href: "/services/teeth-whitening" },
    { label: "Veneers", href: "/services/veneers" },
    { label: "Orthodontics", href: "/services/orthodontics" },
    { label: "General Dentistry", href: "/services/general-dentistry" },
    { label: "Emergency Dental", href: "/services/emergency-dental-care" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
