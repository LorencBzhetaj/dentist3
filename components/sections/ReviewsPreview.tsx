"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { reviews, overallRating } from "@/data/reviews";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import RatingStars from "@/components/ui/RatingStars";

export default function ReviewsPreview() {
  const preview = reviews.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What Our Patients Say"
            subtitle={`We're proud to have earned the trust of our patients. Rated ${overallRating}/5 on Google.`}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-[#0d1b2a]">{review.name}</p>
                  {review.service && <p className="text-xs text-teal-600 mt-0.5">{review.service}</p>}
                </div>
                <svg className="w-8 h-8 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <RatingStars rating={review.rating} size="sm" className="mb-3" />
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-4">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 border border-slate-200 text-sm font-medium text-[#0d1b2a] px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
