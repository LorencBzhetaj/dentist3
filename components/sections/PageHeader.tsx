import Container from "@/components/ui/Container";

export default function PageHeader({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="pt-32 lg:pt-40 pb-14 lg:pb-20 bg-sand-50 border-b border-sand-200">
      <Container>
        {children}
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-sand-600 mb-4">{eyebrow}</p>
        <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-[1.02] max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{subtitle}</p>}
      </Container>
    </section>
  );
}
