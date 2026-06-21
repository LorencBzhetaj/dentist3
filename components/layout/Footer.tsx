import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerNav } from "@/data/navigation";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-slate-400 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-semibold text-white text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">{siteConfig.description}</p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center hover:border-teal-500 hover:text-teal-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {platform === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                    {platform === "instagram" && <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4-9a1 1 0 110-2 1 1 0 010 2z" />}
                    {platform === "linkedin" && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerNav.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Services</h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {siteConfig.address.street}
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-teal-400 transition-colors">{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-400 transition-colors">{siteConfig.email}</a>
              </li>
              <li className="pt-2 text-xs leading-relaxed border-t border-slate-700">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
                <p>{siteConfig.hours.sunday}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
