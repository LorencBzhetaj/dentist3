export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
  specializations: string[];
  treatments: string[];
  social: { facebook?: string; instagram?: string; linkedin?: string };
}

export const doctors: Doctor[] = [
  {
    slug: "arben-hoxha",
    name: "Dr. Arben Hoxha",
    title: "Implant Specialist",
    specialty: "Dental Implantology",
    experience: "20+ Years Experience",
    bio: "Dr. Arben Hoxha is the founder and lead implantologist at DentaCare. Trained at the University of Vienna and the International Team for Implantology (ITI), he has placed over 3,000 implants and is renowned for his precision and patient-centered approach. His mission is to restore not just teeth, but confidence.",
    image: "/images/doctors/arben-hoxha.jpg",
    certifications: [
      "Doctor of Dental Medicine, University of Vienna",
      "ITI Fellow – International Team for Implantology",
      "Board-Certified Implantologist",
      "Advanced Bone Grafting Certification",
    ],
    specializations: ["Dental Implants", "Bone Grafting", "Full-Arch Restoration", "Guided Implant Surgery"],
    treatments: ["Single Implants", "Full Arch (All-on-4)", "Sinus Lifts", "Ridge Augmentation"],
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    slug: "elira-zogaj",
    name: "Dr. Elira Zogaj",
    title: "Orthodontist",
    specialty: "Orthodontics",
    experience: "15+ Years Experience",
    bio: "Dr. Elira Zogaj specializes in creating perfectly aligned smiles for patients of all ages. She trained in orthodontics at the University of Ljubljana and is certified in both traditional braces and clear aligner therapy. Her gentle approach makes even complex cases feel manageable.",
    image: "/images/doctors/elira-zogaj.jpg",
    certifications: [
      "Specialist in Orthodontics, University of Ljubljana",
      "Invisalign Certified Provider",
      "Damon System Certified",
      "European Board of Orthodontics",
    ],
    specializations: ["Clear Aligners", "Traditional Braces", "Interceptive Orthodontics", "Adult Orthodontics"],
    treatments: ["Invisalign", "Damon Braces", "Lingual Braces", "Retainers"],
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    slug: "gentian-kola",
    name: "Dr. Gentian Kola",
    title: "General Dentist",
    specialty: "General Dentistry",
    experience: "12+ Years Experience",
    bio: "Dr. Gentian Kola is the heart of DentaCare's preventive and restorative practice. He believes that excellent dental health starts with education and prevention. Known for his calm demeanor and ability to put anxious patients at ease, he makes every visit a comfortable experience.",
    image: "/images/doctors/gentian-kola.jpg",
    certifications: [
      "Doctor of Dental Medicine, University of Pristina",
      "Certified in Restorative Dentistry",
      "CEREC Same-Day Crown Specialist",
      "Advanced Endodontics Training",
    ],
    specializations: ["Preventive Care", "Restorative Dentistry", "Root Canal Therapy", "Digital Dentistry"],
    treatments: ["Fillings", "Crowns", "Root Canals", "Professional Cleaning", "Sealants"],
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    slug: "valbona-daci",
    name: "Dr. Valbona Daci",
    title: "Cosmetic Dentist",
    specialty: "Cosmetic Dentistry",
    experience: "10+ Years Experience",
    bio: "Dr. Valbona Daci is an artist as much as a dentist. Specializing in aesthetic dentistry, she has transformed thousands of smiles using veneers, whitening, and smile design. She studied at the New York University College of Dentistry and has a deep understanding of facial aesthetics and beauty.",
    image: "/images/doctors/valbona-daci.jpg",
    certifications: [
      "Postgraduate in Aesthetic Dentistry, NYU",
      "Certified Digital Smile Designer",
      "AACD Member – American Academy of Cosmetic Dentistry",
      "Advanced Veneer Certification",
    ],
    specializations: ["Smile Design", "Porcelain Veneers", "Composite Bonding", "Teeth Whitening"],
    treatments: ["Veneers", "Whitening", "Composite Bonding", "Gum Contouring", "Smile Makeovers"],
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];
