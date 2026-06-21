import type { Metadata } from "next";
import { reviews, ratingDistribution, overallRating, totalReviews } from "@/data/reviews";
import Container from "@/components/ui/Container";
import RatingStars from "@/components/ui/RatingStars";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: `DentaCare is rated ${overallRating}/5 by over ${totalReviews}+ patients. Read genuine reviews from our patients.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#f8fafb]">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">Patient Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0d1b2a] tracking-tight mb-4">What Our Patients Say</h1>
          <p className="text-lg text-slate-500 max-w-xl">We're proud to have served the trust of our patients.</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Rating summary */}
            <div className="bg-[#f8fafb] rounded-3xl p-8 border border-slate-100">
              <div className="text-center mb-6">
                <p className="text-6xl font-semibold text-[#0d1b2a]">{overallRating}</p>
                <RatingStars rating={Math.round(overallRating)} className="justify-center mt-2" />
                <p className="text-sm text-slate-500 mt-2">Based on {totalReviews}+ reviews</p>
              </div>
              <div className="space-y-2">
                {ratingDistribution.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-4">{r.stars}</span>
                    <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: `${r.percentage}%` }} />
                    </div>
                    <span className="text-xs text-slate-400 w-8 text-right">{r.percentage}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-teal-600 text-white font-medium py-3 rounded-full hover:bg-teal-700 transition-colors text-sm"
                >
                  Write a Review
                </Link>
              </div>
            </div>

            {/* Reviews */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-5">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-[#f8fafb] border border-slate-100 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-[#0d1b2a] text-sm">{review.name}</p>
                        {review.service && <p className="text-xs text-teal-600 mt-0.5">{review.service}</p>}
                      </div>
                      {/* Google G */}
                      <svg className="w-5 h-5 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                    <RatingStars rating={review.rating} size="sm" className="mb-3" />
                    <p className="text-sm text-slate-500 leading-relaxed">{review.text}</p>
                    <p className="text-xs text-slate-300 mt-3">{new Date(review.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Join 8,000+ Satisfied Patients" subtitle="Book your consultation and experience the DentaCare difference." />
    </>
  );
}
