import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        type="service"
        data={{ title: service.title, description: service.description }}
      />

      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-end bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <Container className="relative pb-14 pt-24">
          <Link href="/services" className="inline-flex items-center text-teal-400 text-sm mb-6 hover:text-teal-300 transition-colors">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Dental Service</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">{service.title}</h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">{service.shortDescription}</p>
          <div className="flex gap-6 mt-8">
            <div>
              <p className="text-white font-semibold">{service.duration}</p>
              <p className="text-slate-400 text-xs mt-0.5">Duration</p>
            </div>
            <div className="border-l border-slate-700 pl-6">
              <p className="text-white font-semibold">{service.price}</p>
              <p className="text-slate-400 text-xs mt-0.5">Starting price</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-14">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-[#0d1b2a] mb-4">About This Treatment</h2>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-semibold text-[#0d1b2a] mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 bg-teal-50 rounded-xl px-4 py-3">
                      <svg className="w-5 h-5 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[#0d1b2a] font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-semibold text-[#0d1b2a] mb-8">The Treatment Process</h2>
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100" />
                  <div className="space-y-8">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-semibold shrink-0 z-10">
                          {step.step}
                        </div>
                        <div className="pt-1.5">
                          <h3 className="font-semibold text-[#0d1b2a] mb-1">{step.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-semibold text-[#0d1b2a] mb-6">Frequently Asked Questions</h2>
                <Accordion items={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[#f8fafb] rounded-3xl p-7 border border-slate-100">
                <h3 className="font-semibold text-[#0d1b2a] mb-2">Ready to get started?</h3>
                <p className="text-sm text-slate-500 mb-6">Book a free consultation and let us create your personalized treatment plan.</p>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="flex items-center justify-center w-full bg-teal-600 text-white font-medium py-3.5 rounded-full hover:bg-teal-700 transition-colors text-sm"
                >
                  Book Consultation
                </Link>
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-medium text-[#0d1b2a]">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Starting from</span>
                    <span className="font-medium text-[#0d1b2a]">{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title={`Ready for ${service.title}?`} subtitle="Contact us today to schedule your consultation." />
    </>
  );
}
