"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-sand-200 border-y border-sand-200", className)}>
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            className="flex w-full items-center justify-between py-5 text-left text-ink font-medium hover:text-sand-700 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-${i}`}
          >
            <span className="pr-4">{item.question}</span>
            <span className={cn("text-sand-600 text-2xl font-light leading-none transition-transform duration-200 shrink-0", open === i && "rotate-45")} aria-hidden="true">
              +
            </span>
          </button>
          <div id={`faq-${i}`} className={cn("grid transition-all duration-300", open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}>
            <p className="overflow-hidden text-muted leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
