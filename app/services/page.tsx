import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive dental services including implants, whitening, veneers, orthodontics, and more. Premium care in Prishtina.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#f8fafb]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#0d1b2a] tracking-tight leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Comprehensive dental care with attention to detail and a gentle touch. Every treatment is tailored to your specific needs and goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-10">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`relative h-72 rounded-3xl overflow-hidden bg-slate-100 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3">{service.duration}</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0d1b2a] mb-4">{service.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.benefits.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-slate-200 text-[#0d1b2a] text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-50 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
