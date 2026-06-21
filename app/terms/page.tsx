import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "DentaCare terms of service — the terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600">Legal</p>
          <h1 className="text-4xl font-semibold text-[#0d1b2a] mt-3 mb-2">Terms of Service</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2024</p>

          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing or using the DentaCare website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
            },
            {
              title: "2. Services",
              content: `DentaCare provides dental care services and information through our website. The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with a qualified dental professional for personalized advice.`,
            },
            {
              title: "3. Appointments",
              content: `Booking a consultation through our website does not guarantee a specific appointment time. We will contact you to confirm your appointment. Please provide at least 24 hours notice for cancellations.`,
            },
            {
              title: "4. Intellectual Property",
              content: `All content on this website, including text, images, and graphics, is the property of ${siteConfig.name} and is protected by copyright laws. You may not reproduce, distribute, or use our content without prior written permission.`,
            },
            {
              title: "5. Limitation of Liability",
              content: `DentaCare shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our liability is limited to the maximum extent permitted by applicable law.`,
            },
            {
              title: "6. Contact",
              content: `For questions about these Terms, contact us at ${siteConfig.email}.`,
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-[#0d1b2a] mb-3">{section.title}</h2>
              <p className="text-slate-500 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
