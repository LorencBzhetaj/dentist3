"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function DoctorsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafb]">
      <Container>
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Specialists"
            subtitle="Experienced, compassionate, dedicated to you."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/doctors/${doctor.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-teal-200"
              >
                <div className="relative h-56 bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#0d1b2a] group-hover:text-teal-600 transition-colors">{doctor.name}</h3>
                  <p className="text-sm text-teal-600 mt-0.5">{doctor.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{doctor.experience}</p>
                  <div className="flex gap-2.5 mt-4">
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 border border-slate-200 text-sm font-medium text-[#0d1b2a] px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
          >
            View All Doctors
          </Link>
        </div>
      </Container>
    </section>
  );
}
