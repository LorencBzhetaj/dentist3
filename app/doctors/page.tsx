import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: "Meet DentaCare's team of internationally trained dental specialists dedicated to your oral health.",
};

export default function DoctorsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#f8fafb]">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0d1b2a] tracking-tight mb-4">Our Specialists</h1>
          <p className="text-lg text-slate-500 max-w-xl">Experienced. Compassionate. Dedicated to you.</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="group block"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h2 className="font-semibold text-[#0d1b2a] group-hover:text-teal-600 transition-colors">{doctor.name}</h2>
                <p className="text-sm text-teal-600 mt-0.5">{doctor.title}</p>
                <p className="text-xs text-slate-400 mt-1">{doctor.experience}</p>
                <div className="flex gap-2 mt-3">
                  {Object.entries(doctor.social).map(([platform]) => (
                    <span
                      key={platform}
                      className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-teal-400 hover:text-teal-500 transition-colors"

                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        {platform === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                        {platform === "instagram" && <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4-9a1 1 0 110-2 1 1 0 010 2z" />}
                        {platform === "linkedin" && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z" />}
                      </svg>
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Ready to Meet Your Doctor?" subtitle="Book a consultation and find the right specialist for your needs." />
    </>
  );
}
