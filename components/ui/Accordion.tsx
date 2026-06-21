"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-slate-200", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between py-5 text-left text-navy-900 font-medium hover:text-teal-600 transition-colors focus:outline-none focus-visible:text-teal-600"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="pr-4">{item.question}</span>
            <span className={cn("text-teal-600 text-xl transition-transform duration-200 shrink-0", open === i && "rotate-45")}>+</span>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === i ? "max-h-96 pb-5" : "max-h-0"
            )}
          >
            <p className="text-slate-500 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
