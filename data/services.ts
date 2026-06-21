export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  heroImage: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  duration: string;
  price: string;
}

export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent solutions for missing teeth that look, feel, and function like natural teeth.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed in the jawbone, providing a stable foundation for a crown that matches your natural teeth perfectly.",
    image: "/images/services/implants.jpg",
    heroImage: "/images/services/implants-hero.jpg",
    duration: "3–6 months",
    price: "From €800",
    benefits: [
      "Natural look and feel",
      "Long-lasting solution (20+ years)",
      "Improved oral function",
      "Bone health preservation",
      "No need to alter adjacent teeth",
      "Easy maintenance",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We evaluate your oral health and create a customized treatment plan." },
      { step: 2, title: "Planning", description: "Advanced imaging and 3D planning to map the exact implant position." },
      { step: 3, title: "Implant Placement", description: "The titanium post is carefully placed in the jawbone." },
      { step: 4, title: "Healing", description: "The implant fuses with the bone over 3–6 months." },
      { step: 5, title: "Final Result", description: "A custom crown is placed for a natural, beautiful smile." },
    ],
    faqs: [
      { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The crown on top typically lasts 15–20 years before needing replacement." },
      { question: "Is the procedure painful?", answer: "The procedure is performed under local anesthesia. Most patients report minimal discomfort, similar to a tooth extraction." },
      { question: "Am I a candidate for implants?", answer: "Most adults with good general health are candidates. We assess bone density, gum health, and overall oral condition during your consultation." },
      { question: "How do I care for my implant?", answer: "Treat it like a natural tooth — brush twice daily, floss, and attend regular dental check-ups." },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Safe and effective whitening for a brighter, more confident smile in just one visit.",
    description:
      "Our professional teeth whitening treatments are significantly more effective than over-the-counter products. We use clinically proven whitening agents to safely brighten your smile by several shades.",
    image: "/images/services/whitening.jpg",
    heroImage: "/images/services/whitening-hero.jpg",
    duration: "1–2 hours",
    price: "From €200",
    benefits: [
      "Whiten up to 8 shades",
      "Safe for enamel",
      "Long-lasting results",
      "Immediate visible results",
      "Custom-fitted trays available",
      "Professional-grade formulas",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We evaluate your tooth shade and discuss your whitening goals." },
      { step: 2, title: "Preparation", description: "Gums are protected before the whitening agent is applied." },
      { step: 3, title: "Whitening", description: "The whitening gel is activated and applied in 15-minute sessions." },
      { step: 4, title: "Result", description: "Immediate results — a visibly brighter, more confident smile." },
    ],
    faqs: [
      { question: "How long do results last?", answer: "Results typically last 1–3 years with proper care and occasional touch-ups." },
      { question: "Is teeth whitening safe?", answer: "Yes. Our professional-grade whitening is clinically tested and safe for enamel when performed under dental supervision." },
      { question: "Will it work on crowns or veneers?", answer: "Whitening only affects natural tooth enamel. We'll discuss options if you have restorations." },
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    shortDescription: "Custom-made porcelain veneers to enhance the shape, color, and overall appearance of your smile.",
    description:
      "Porcelain veneers are ultra-thin shells bonded to the front of your teeth to correct chips, discoloration, gaps, and minor misalignment. They provide a dramatic smile transformation with natural-looking results.",
    image: "/images/services/veneers.jpg",
    heroImage: "/images/services/veneers-hero.jpg",
    duration: "2–3 weeks",
    price: "From €400/tooth",
    benefits: [
      "Dramatic smile transformation",
      "Natural-looking porcelain",
      "Stain-resistant material",
      "Minimally invasive procedure",
      "Long-lasting (10–15 years)",
      "Corrects multiple aesthetic issues",
    ],
    process: [
      { step: 1, title: "Smile Design", description: "Digital smile design consultation to preview your new smile." },
      { step: 2, title: "Preparation", description: "Minimal enamel removal to make room for the veneer." },
      { step: 3, title: "Impression", description: "Precise impressions sent to our master ceramist." },
      { step: 4, title: "Temporaries", description: "Temporary veneers are placed while your permanent ones are crafted." },
      { step: 5, title: "Bonding", description: "Permanent veneers are precisely bonded for a perfect fit." },
    ],
    faqs: [
      { question: "Are veneers permanent?", answer: "Yes — the preparation is irreversible since a thin layer of enamel is removed. Veneers last 10–15 years with proper care." },
      { question: "Do veneers look natural?", answer: "Our porcelain veneers are crafted by expert ceramists to match your natural teeth's shade, translucency, and texture perfectly." },
      { question: "How many teeth need veneers?", answer: "It depends on your smile goals. Many patients veneer 6–10 front teeth, but we customize the plan to your needs." },
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortDescription: "Modern braces and clear aligner treatments to straighten your teeth and improve your bite.",
    description:
      "Our orthodontic treatments go beyond aesthetics — properly aligned teeth are easier to clean, reducing risk of decay and gum disease. We offer traditional braces and discreet clear aligner options.",
    image: "/images/services/orthodontics.jpg",
    heroImage: "/images/services/orthodontics-hero.jpg",
    duration: "12–24 months",
    price: "From €1,200",
    benefits: [
      "Straighter, more attractive smile",
      "Improved bite and jaw function",
      "Easier oral hygiene",
      "Clear aligner options available",
      "Reduced risk of tooth wear",
      "Boosts confidence",
    ],
    process: [
      { step: 1, title: "Evaluation", description: "Comprehensive assessment of teeth, bite, and jaw alignment." },
      { step: 2, title: "Treatment Plan", description: "Digital planning showing your predicted tooth movement." },
      { step: 3, title: "Fitting", description: "Braces or aligners are carefully fitted and adjusted." },
      { step: 4, title: "Monitoring", description: "Regular check-ups every 6–8 weeks to track progress." },
      { step: 5, title: "Retention", description: "Retainers ensure your new smile stays perfectly aligned." },
    ],
    faqs: [
      { question: "What's the difference between braces and aligners?", answer: "Traditional braces use metal brackets and wires. Clear aligners (like Invisalign) are removable, nearly invisible trays. Both are effective — we recommend based on your specific case." },
      { question: "Does orthodontic treatment hurt?", answer: "There may be mild discomfort for a few days after adjustments, but it's manageable with over-the-counter pain relief." },
      { question: "Am I too old for orthodontics?", answer: "Absolutely not. We successfully treat patients of all ages, and adult orthodontics is increasingly popular." },
    ],
  },
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Comprehensive preventive care and treatments to keep your smile healthy for life.",
    description:
      "Regular dental care is the foundation of lifelong oral health. Our general dentistry services include routine check-ups, professional cleanings, fillings, and early detection of potential issues.",
    image: "/images/services/general.jpg",
    heroImage: "/images/services/general-hero.jpg",
    duration: "30–90 min",
    price: "From €40",
    benefits: [
      "Early detection of dental issues",
      "Professional deep cleaning",
      "Preventive treatments",
      "Composite tooth-colored fillings",
      "Gum disease screening",
      "Oral cancer screening",
    ],
    process: [
      { step: 1, title: "Check-up", description: "Thorough examination of teeth, gums, and oral tissues." },
      { step: 2, title: "X-rays", description: "Digital X-rays to detect hidden issues between teeth and below the gumline." },
      { step: 3, title: "Cleaning", description: "Professional removal of plaque and tartar buildup." },
      { step: 4, title: "Treatment", description: "Any necessary fillings, sealants, or other treatments are performed." },
      { step: 5, title: "Prevention Plan", description: "Personalized home care guidance and scheduling your next visit." },
    ],
    faqs: [
      { question: "How often should I visit the dentist?", answer: "Every 6 months for most patients. Those with gum disease or higher risk factors may need more frequent visits." },
      { question: "Do you use digital X-rays?", answer: "Yes. Our digital X-rays emit up to 90% less radiation than traditional film X-rays and provide instant, high-resolution images." },
    ],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    shortDescription: "Same-day emergency appointments for dental pain, broken teeth, and urgent oral health issues.",
    description:
      "Dental emergencies don't follow a schedule. We offer same-day emergency appointments for severe pain, knocked-out teeth, broken restorations, and other urgent dental problems.",
    image: "/images/services/emergency.jpg",
    heroImage: "/images/services/emergency-hero.jpg",
    duration: "Same day",
    price: "From €60",
    benefits: [
      "Same-day appointments available",
      "Pain relief within hours",
      "24/7 emergency line",
      "Comprehensive emergency care",
      "No additional emergency fees",
      "Compassionate, fast service",
    ],
    process: [
      { step: 1, title: "Call Us", description: "Call our emergency line — we'll assess your situation immediately." },
      { step: 2, title: "Same-Day Visit", description: "We make room for you the same day, regardless of schedule." },
      { step: 3, title: "Diagnosis", description: "Quick assessment with X-rays to identify the problem." },
      { step: 4, title: "Pain Relief", description: "Immediate treatment to relieve pain and stabilize the tooth." },
      { step: 5, title: "Follow-up Plan", description: "We schedule any needed follow-up treatment for full restoration." },
    ],
    faqs: [
      { question: "What counts as a dental emergency?", answer: "Severe toothache, knocked-out or broken tooth, lost filling or crown, dental abscess, swollen jaw, or significant bleeding all qualify as emergencies." },
      { question: "What should I do with a knocked-out tooth?", answer: "Handle it by the crown (not the root), rinse gently, and try to reinsert it. If that's not possible, keep it in milk or between your cheek and gum and call us immediately." },
    ],
  },
];
