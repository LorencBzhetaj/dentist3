import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/dictionaries";
import LegalPage from "@/components/sections/LegalPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale).legal.privacy;
  return pageMetadata({ locale, path: "/privacy-policy", title: t.title, description: t.sections[0].text });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return <LegalPage dict={getDictionary(locale)} doc="privacy" />;
}
