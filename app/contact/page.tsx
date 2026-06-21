import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a consultation or get in touch with DentaCare. We're here to help with all your dental needs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#f8fafb]">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0d1b2a] tracking-tight mb-4">
            Let's Talk About<br />Your Smile
          </h1>
          <p className="text-lg text-slate-500 max-w-xl">We're here to help you achieve the smile you've always wanted.</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact details */}
            <div className="space-y-8">
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Address",
                    value: siteConfig.address.street,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: siteConfig.phone,
                    href: `tel:${siteConfig.phone}`,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#0d1b2a] font-medium hover:text-teal-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-[#0d1b2a] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-[#f8fafb] rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-[#0d1b2a] mb-4">Working Hours</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Monday – Friday</span>
                    <span className="font-medium text-[#0d1b2a]">09:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-medium text-[#0d1b2a]">09:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-medium text-slate-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-red-700 mb-1">Dental Emergency?</p>
                <p className="text-sm text-red-600 mb-3">Call us immediately — we offer same-day emergency appointments.</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-52 bg-slate-100 flex items-center justify-center border border-slate-100">
                <div className="text-center">
                  <svg className="w-8 h-8 text-teal-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-slate-400">DentaCare Clinic</p>
                  <p className="text-xs text-slate-300">{siteConfig.address.street}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#f8fafb] rounded-3xl p-8 border border-slate-100">
              <h2 className="text-xl font-semibold text-[#0d1b2a] mb-2">Book an Appointment</h2>
              <p className="text-sm text-slate-500 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
              <AppointmentForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
