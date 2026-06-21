import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DentaCare privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 not-prose">Legal</p>
          <h1 className="text-4xl font-semibold text-[#0d1b2a] mt-3 mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2024</p>

          {[
            {
              title: "1. Information We Collect",
              content: `We collect information you provide directly to us, such as when you book an appointment, fill out a contact form, or communicate with us. This includes your name, phone number, email address, and any health information relevant to your dental care.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use the information we collect to schedule and confirm appointments, provide dental care services, communicate with you about treatments, send appointment reminders, and improve our services. We do not sell your personal information to third parties.`,
            },
            {
              title: "3. Information Security",
              content: `We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. All health information is handled in compliance with applicable healthcare privacy regulations.`,
            },
            {
              title: "4. Data Retention",
              content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Dental records are retained as required by applicable healthcare regulations.`,
            },
            {
              title: "5. Your Rights",
              content: `You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at ${siteConfig.email}.`,
            },
            {
              title: "6. Contact Us",
              content: `If you have questions about this Privacy Policy, please contact us at:\n\n${siteConfig.name}\n${siteConfig.address.street}\nEmail: ${siteConfig.email}\nPhone: ${siteConfig.phone}`,
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-[#0d1b2a] mb-3">{section.title}</h2>
              <p className="text-slate-500 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
