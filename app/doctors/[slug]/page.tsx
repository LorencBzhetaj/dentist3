import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/data/doctors";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: `${doctor.name} – ${doctor.specialty} at DentaCare. ${doctor.experience}.`,
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-[#f8fafb]">
        <Container>
          <Link href="/doctors" className="inline-flex items-center text-teal-600 text-sm mb-8 hover:text-teal-700 transition-colors">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Our Doctors
          </Link>
          <div className="grid lg:grid-cols-3 gap-10 pb-0">
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden bg-slate-100">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center pb-8">
              <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-2">{doctor.specialty}</p>
              <h1 className="text-4xl font-semibold text-[#0d1b2a] mb-2">{doctor.name}</h1>
              <p className="text-slate-500 mb-1">{doctor.title}</p>
              <p className="text-slate-400 text-sm">{doctor.experience}</p>
              <p className="text-slate-500 leading-relaxed mt-6 text-base">{doctor.bio}</p>
              <div className="flex gap-3 mt-6">
                <Link
                  href={`/contact?doctor=${doctor.slug}`}
                  className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-7 py-3.5 rounded-full hover:bg-teal-700 transition-colors text-sm"
                >
                  Book with {doctor.name.split(" ")[1]}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-10 lg:col-span-2">
              {/* Specializations */}
              <div>
                <h2 className="text-xl font-semibold text-[#0d1b2a] mb-5">Specializations</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((s) => (
                    <span key={s} className="bg-teal-50 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xl font-semibold text-[#0d1b2a] mb-5">Education & Certifications</h2>
                <ul className="space-y-3">
                  {doctor.certifications.map((c) => (
                    <li key={c} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-600 text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-xl font-semibold text-[#0d1b2a] mb-5">Treatments Offered</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {doctor.treatments.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-slate-600 bg-[#f8fafb] rounded-xl px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-[#f8fafb] rounded-3xl p-7 border border-slate-100">
                <h3 className="font-semibold text-[#0d1b2a] mb-2">Book an appointment</h3>
                <p className="text-sm text-slate-500 mb-6">Schedule a consultation with {doctor.name}.</p>
                <Link
                  href={`/contact?doctor=${doctor.slug}`}
                  className="flex items-center justify-center w-full bg-teal-600 text-white font-medium py-3.5 rounded-full hover:bg-teal-700 transition-colors text-sm"
                >
                  Book Consultation
                </Link>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-400 mb-3">Connect with {doctor.name.split(" ")[1]}</p>
                  <div className="flex gap-3">
                    {Object.entries(doctor.social).map(([platform, href]) => (
                      <a
                        key={platform}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform}
                        className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:border-teal-500 hover:text-teal-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          {platform === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                          {platform === "instagram" && <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4-9a1 1 0 110-2 1 1 0 010 2z" />}
                          {platform === "linkedin" && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z" />}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
