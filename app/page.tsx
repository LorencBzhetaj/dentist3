import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SmileTransformations from "@/components/sections/SmileTransformations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DoctorsPreview from "@/components/sections/DoctorsPreview";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SmileTransformations />
      <WhyChooseUs />
      <DoctorsPreview />
      <ReviewsPreview />
      <CTASection />
    </>
  );
}
