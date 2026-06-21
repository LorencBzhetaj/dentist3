export type TransformationCategory = "all" | "whitening" | "veneers" | "implants" | "orthodontics";

export interface Transformation {
  id: string;
  category: Exclude<TransformationCategory, "all">;
  beforeImage: string;
  afterImage: string;
  label: string;
  description?: string;
}

export const transformations: Transformation[] = [
  { id: "1", category: "veneers", beforeImage: "/images/transformations/v1-before.jpg", afterImage: "/images/transformations/v1-after.jpg", label: "Full Smile Veneers", description: "8 upper veneers – 2 week treatment" },
  { id: "2", category: "whitening", beforeImage: "/images/transformations/w1-before.jpg", afterImage: "/images/transformations/w1-after.jpg", label: "Professional Whitening", description: "Single session – 8 shades brighter" },
  { id: "3", category: "implants", beforeImage: "/images/transformations/i1-before.jpg", afterImage: "/images/transformations/i1-after.jpg", label: "Single Implant Restoration", description: "Complete restoration in 4 months" },
  { id: "4", category: "orthodontics", beforeImage: "/images/transformations/o1-before.jpg", afterImage: "/images/transformations/o1-after.jpg", label: "Clear Aligner Treatment", description: "18 months of Invisalign" },
  { id: "5", category: "veneers", beforeImage: "/images/transformations/v2-before.jpg", afterImage: "/images/transformations/v2-after.jpg", label: "Smile Makeover", description: "Combined veneers + whitening" },
  { id: "6", category: "whitening", beforeImage: "/images/transformations/w2-before.jpg", afterImage: "/images/transformations/w2-after.jpg", label: "Deep Whitening", description: "Take-home tray + in-office session" },
  { id: "7", category: "implants", beforeImage: "/images/transformations/i2-before.jpg", afterImage: "/images/transformations/i2-after.jpg", label: "Multiple Implants", description: "Full arch restoration" },
  { id: "8", category: "orthodontics", beforeImage: "/images/transformations/o2-before.jpg", afterImage: "/images/transformations/o2-after.jpg", label: "Traditional Braces", description: "24-month comprehensive treatment" },
];
