"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { transformations } from "@/data/beforeAfter";

export default function SmileTransformations() {
  const preview = transformations.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafb]">
      <Container>
        <div className="mb-12 text-center">
          <SectionHeading
            eyebrow="Real Results"
            title="Smile Transformations"
            subtitle="Real results, real confidence. See the difference our care makes."
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden h-44 sm:h-56">
                <div className="relative bg-slate-100">
                  <Image src={item.beforeImage} alt={`Before - ${item.label}`} fill className="object-cover" sizes="25vw" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-semibold bg-black/60 text-white px-2 py-0.5 rounded-full">Before</span>
                </div>
                <div className="relative bg-slate-100">
                  <Image src={item.afterImage} alt={`After - ${item.label}`} fill className="object-cover" sizes="25vw" />
                  <span className="absolute bottom-2 right-2 text-[10px] font-semibold bg-teal-600 text-white px-2 py-0.5 rounded-full">After</span>
                </div>
              </div>
              <p className="text-xs text-center text-slate-500 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/before-after"
            className="inline-flex items-center gap-2 border border-slate-200 text-sm font-medium text-[#0d1b2a] px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
          >
            View All Transformations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
