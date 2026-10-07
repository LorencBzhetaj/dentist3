import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost-light";
  className?: string;
  external?: boolean;
}

const variants = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-sand-100",
  "ghost-light": "border border-white/60 text-white hover:bg-white hover:text-ink",
};

export default function LinkButton({ href, children, variant = "primary", className, external }: LinkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    className
  );
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
