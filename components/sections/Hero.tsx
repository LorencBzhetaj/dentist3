"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#f8fafb] overflow-hidden pt-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-teal-50/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4">Premium Dental Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0d1b2a] leading-[1.1] tracking-tight mb-6">
              Advanced Dental Care<br />
              <span className="text-teal-600">Designed Around You</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Modern dentistry. Personal care. Beautiful smiles that last a lifetime.
              Trusted by over 8,000 patients in Prishtina.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-600 text-white font-medium px-8 py-4 rounded-full hover:bg-teal-700 transition-colors text-sm"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-slate-200 text-navy-900 font-medium px-8 py-4 rounded-full hover:bg-slate-50 transition-colors text-sm"
              >
                Our Services
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-200">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-[#0d1b2a]">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/clinic/hero.jpg"
              alt="Modern DentaCare clinic interior"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-xs text-teal-700 font-medium">
                      {["A", "B", "C"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0d1b2a]">8,000+ Happy Patients</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-slate-500 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
