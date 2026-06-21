"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = "Ready for a Better Smile?",
  subtitle = "Book your consultation today and take the first step.",
  primaryLabel = "Book a Visit",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">{title}</h2>
          <p className="text-teal-100 text-lg mb-8">{subtitle}</p>
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center bg-white text-teal-700 font-semibold px-9 py-4 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg"
          >
            {primaryLabel}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
