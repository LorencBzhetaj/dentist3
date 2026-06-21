import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DentaCare's story, mission, and commitment to advanced dental care in Prishtina.",
};

const technology = [
  { name: "Digital X-rays", description: "90% less radiation, instant high-resolution imaging" },
  { name: "3D Cone Beam CT", description: "Full 3D jaw imaging for precise implant planning" },
  { name: "CEREC Same-Day Crowns", description: "Computer-milled ceramic crowns in a single visit" },
  { name: "Digital Smile Design", description: "Preview your new smile before any treatment begins" },
  { name: "Laser Dentistry", description: "Minimally invasive treatments with faster healing" },
  { name: "Intraoral Cameras", description: "Live video to show you exactly what we see" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0d1b2a] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/clinic/about-hero.jpg" alt="DentaCare clinic" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <Container className="relative">
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-400 mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6 max-w-2xl">
            Passion for smiles.<br />Commitment to care.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            DentaCare was founded with a simple mission: to provide high-quality dental care in a comfortable and welcoming environment.
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading eyebrow="Our Journey" title="How DentaCare Began" align="left" />
              <div className="mt-6 space-y-4 text-slate-500 leading-relaxed">
                <p>
                  DentaCare was established in 2009 by Dr. Arben Hoxha with a vision to bring world-class dental care to Kosovo. Starting as a small practice with a single chair, the clinic has grown into a multi-specialist center trusted by over 8,000 patients.
                </p>
                <p>
                  Over the years, we have assembled a team of internationally trained specialists who share the same commitment to clinical excellence and patient well-being. Every member of our team — from the front desk to the operating room — embodies our core values.
                </p>
                <p>
                  Today, DentaCare is proud to offer the most advanced dental treatments available in the region, delivered with the same warmth and personal care that defined us from day one.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image src="/images/clinic/story.jpg" alt="DentaCare clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#f8fafb]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading eyebrow="Our Mission" title="Why We Do What We Do" />
            <p className="mt-6 text-slate-500 leading-relaxed text-lg">
              We believe that exceptional dental care should be accessible, comfortable, and truly personalized. Our mission is to help every patient achieve optimal oral health and a smile they're proud of — for life.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {[
              { title: "Patient First", text: "Every decision we make is guided by what's best for the patient, not what's easiest or most profitable." },
              { title: "Clinical Excellence", text: "We invest constantly in training and technology to offer treatments that meet the highest international standards." },
              { title: "Lifelong Partnership", text: "We aim to be your dental home for life — guiding your oral health through every stage of life." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-100">
                <h3 className="font-semibold text-[#0d1b2a] mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-semibold text-teal-600">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Clinic gallery */}
      <section className="py-20 bg-[#f8fafb]">
        <Container>
          <SectionHeading eyebrow="Our Clinic" title="A Space Designed for Comfort" subtitle="Modern, clean, and calming — our clinic is designed to put you at ease from the moment you walk in." />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={`/images/clinic/gallery-${i}.jpg`}
                  alt={`DentaCare clinic - photo ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading eyebrow="Advanced Technology" title="Tools That Deliver Better Results" subtitle="We invest in the latest technology to provide precise diagnoses and comfortable treatments." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technology.map((tech) => (
              <div key={tech.name} className="border border-slate-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0d1b2a] mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
