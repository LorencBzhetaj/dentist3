"use client";

import { useState } from "react";
import Image from "next/image";
import { transformations, type TransformationCategory } from "@/data/beforeAfter";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";

const categories: { value: TransformationCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "whitening", label: "Whitening" },
  { value: "veneers", label: "Veneers" },
  { value: "implants", label: "Implants" },
  { value: "orthodontics", label: "Orthodontics" },
];

export default function BeforeAfterPage() {
  const [active, setActive] = useState<TransformationCategory>("all");
  const [visible, setVisible] = useState(6);

  const filtered = transformations.filter((t) => active === "all" || t.category === active);

  return (
    <>
      <section className="pt-32 pb-12 bg-[#f8fafb]">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">Real Results</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0d1b2a] tracking-tight mb-4">Smile Transformations</h1>
          <p className="text-lg text-slate-500 max-w-xl">Real results from real patients. See the difference our care makes.</p>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => { setActive(c.value); setVisible(6); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c.value
                    ? "bg-teal-600 text-white"
                    : "bg-[#f8fafb] text-slate-600 hover:bg-slate-100"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visible).map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden border border-slate-100 bg-[#f8fafb]">
                <div className="grid grid-cols-2 gap-1 h-52">
                  <div className="relative bg-slate-100">
                    <Image src={item.beforeImage} alt={`Before - ${item.label}`} fill className="object-cover" sizes="33vw" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold bg-black/60 text-white px-2 py-0.5 rounded-full">Before</span>
                  </div>
                  <div className="relative bg-slate-100">
                    <Image src={item.afterImage} alt={`After - ${item.label}`} fill className="object-cover" sizes="33vw" />
                    <span className="absolute bottom-2 right-2 text-[10px] font-semibold bg-teal-600 text-white px-2 py-0.5 rounded-full">After</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm text-[#0d1b2a]">{item.label}</p>
                  {item.description && <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>}
                  <span className="inline-block mt-2 text-xs text-teal-600 capitalize bg-teal-50 px-2.5 py-0.5 rounded-full font-medium">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {visible < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisible((v) => v + 6)}
                className="border border-slate-200 text-[#0d1b2a] text-sm font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTASection title="Ready for Your Transformation?" subtitle="Book a free consultation and start your smile journey today." />
    </>
  );
}
