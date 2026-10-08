import { cn } from "@/lib/utils";

// CSS-only reveal (see .reveal in globals.css). Content is always rendered visible, so it never
// depends on JavaScript; browsers without scroll-driven animations simply skip the effect.
export default function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={cn("reveal", className)} style={delay ? ({ "--reveal-shift": `${18 + delay * 40}px` } as React.CSSProperties) : undefined}>
      {children}
    </div>
  );
}
