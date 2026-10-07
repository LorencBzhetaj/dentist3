import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { hasLocale, href, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import { mainNav } from "@/data/navigation";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jost",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.meta.title, template: `%s | ${siteConfig.name}` },
    robots: { index: true, follow: true },
    ...pageMetadata({ locale, description: dict.meta.description }),
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-full focus:shadow">
          {dict.common.skip}
        </a>
        <JsonLd locale={locale} description={dict.meta.description} />
        <Navbar
          locale={locale}
          items={mainNav.map((item) => ({ label: dict.nav[item.key], href: href(locale, item.path) }))}
          labels={{
            book: dict.common.book,
            call: dict.common.call,
            menu: dict.common.menu,
            close: dict.common.close,
            language: dict.common.language,
            home: dict.nav.home,
          }}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
