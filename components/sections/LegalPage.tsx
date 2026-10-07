import type { Dictionary } from "@/dictionaries";
import Container from "@/components/ui/Container";
import PageHeader from "./PageHeader";

export default function LegalPage({ dict, doc }: { dict: Dictionary; doc: "privacy" | "terms" }) {
  const t = dict.legal[doc];
  return (
    <>
      <PageHeader eyebrow={dict.legal.updated} title={t.title} />
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm bg-sand-100 border border-sand-300 rounded-2xl px-4 py-3 mb-10">{dict.legal.draft}</p>
            {t.sections.map((s, i) => (
              <div key={s.title} className="mb-9">
                <h2 className="font-serif text-2xl text-ink mb-3">
                  {i + 1}. {s.title}
                </h2>
                <p className="text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
