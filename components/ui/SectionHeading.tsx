import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeading({ eyebrow, title, subtitle, className, align = "center", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-sand-600 mb-4">{eyebrow}</p>
      )}
      <Tag
        className={cn(
          "font-serif font-medium text-ink tracking-tight leading-[1.05]",
          Tag === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </Tag>
      {subtitle && <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}
