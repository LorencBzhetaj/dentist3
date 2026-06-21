"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="Comprehensive dental care with attention to detail and a gentle touch."
            align="left"
          />
          <Link href="/services" className="hidden sm:inline-flex items-center text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors">
            View All Services
            <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block rounded-2xl overflow-hidden border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-teal-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#0d1b2a] mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{service.shortDescription}</p>
                  <span className="inline-flex items-center text-xs text-teal-600 font-medium mt-4">
                    Learn More
                    <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/services" className="inline-flex items-center text-sm text-teal-600 font-medium">
            View All Services
            <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
