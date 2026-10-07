import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { cases } from "@/data/cases";

// Shows a combined before/after photo whole (no cropping or stretching). Labels sit in the
// corners so they stay correct even though the split line is not exactly at 50%.
export default function CaseCard({ item, dict, sizes }: { item: (typeof cases)[number]; dict: Dictionary; sizes: string }) {
  const title = `${dict.cases.caseTitle} ${item.id}`;
  return (
    <figure className="group">
      <div className="relative overflow-hidden rounded-3xl bg-sand-100">
        <Image
          src={item.image}
          alt={`${title} – ${dict.cases.alt}`}
          width={item.width}
          height={item.height}
          sizes={sizes}
          className="w-full h-auto"
        />
        <span className="absolute top-4 left-4 text-[11px] tracking-[0.2em] uppercase bg-ink/75 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          {dict.common.before}
        </span>
        <span className="absolute bottom-4 left-4 text-[11px] tracking-[0.2em] uppercase bg-white/90 text-ink px-3 py-1 rounded-full backdrop-blur-sm">
          {dict.common.after}
        </span>
      </div>
      <figcaption className="mt-4 font-serif text-xl text-ink">{title}</figcaption>
    </figure>
  );
}
