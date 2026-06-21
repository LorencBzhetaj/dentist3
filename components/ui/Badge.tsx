import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "teal" | "navy" | "neutral";
}

export default function Badge({ children, className, variant = "teal" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold px-3 py-1 rounded-full",
        variant === "teal" && "bg-teal-50 text-teal-700",
        variant === "navy" && "bg-navy-50 text-navy-700",
        variant === "neutral" && "bg-slate-100 text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
