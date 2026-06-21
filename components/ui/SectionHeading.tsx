import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, className, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
