import type { ServiceIcon } from "@/data/services";

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke}>
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.67.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
    </svg>
  );
}

export function PinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke}>
      <path d="M17.66 16.66L13.41 20.9a2 2 0 01-2.83 0l-4.24-4.24a8 8 0 1111.32 0z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ArrowIcon({ className = "w-4 h-4", direction = "right" }: IconProps & { direction?: "right" | "left" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} strokeWidth={1.75}>
      {direction === "right" ? <path d="M5 12h14M13 6l6 6-6 6" /> : <path d="M19 12H5M11 6l-6 6 6 6" />}
    </svg>
  );
}

export function ServiceGlyph({ icon, className = "w-7 h-7" }: IconProps & { icon: ServiceIcon }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth={1.4}>
      {icon === "implant" && (
        <>
          <path d="M10 5c2-1 4 0 6 0s4-1 6 0 3 4 2 6-2 2-2 3H10c0-1-1-1-2-3s0-5 2-6z" />
          <path d="M12 14h8M13 17h6M13.5 20h5M14 23h4M15 26l1 2 1-2" />
        </>
      )}
      {icon === "crown" && (
        <>
          <path d="M8 12c0-5 3-7 8-7s8 2 8 7c0 3-1 4-1.5 7-.4 2.6-1 7-2.5 7s-2-5-4-5-2.5 5-4 5-2.1-4.4-2.5-7C9 16 8 15 8 12z" />
          <path d="M9 12.5c4 1.5 10 1.5 14 0" />
        </>
      )}
      {icon === "braces" && (
        <>
          <rect x="5" y="11" width="6" height="10" rx="2" />
          <rect x="13" y="11" width="6" height="10" rx="2" />
          <rect x="21" y="11" width="6" height="10" rx="2" />
          <path d="M3 16h26" />
          <path d="M7 16h2M15 16h2M23 16h2" strokeWidth={2.4} />
        </>
      )}
      {icon === "aligner" && (
        <>
          <path d="M4 14c0-4 5-6 12-6s12 2 12 6v3c0 4-5 6-12 6S4 21 4 17v-3z" />
          <path d="M8 13.5c2 1.3 5 2 8 2s6-.7 8-2" strokeDasharray="1.5 2.5" />
        </>
      )}
      {icon === "sparkle" && (
        <>
          <path d="M14 4l1.8 6.2L22 12l-6.2 1.8L14 20l-1.8-6.2L6 12l6.2-1.8L14 4z" />
          <path d="M24 19l.9 2.6 2.6.9-2.6.9L24 26l-.9-2.6-2.6-.9 2.6-.9L24 19z" />
        </>
      )}
      {icon === "graft" && (
        <>
          <path d="M5 21c3-2 6-2 11-2s8 0 11 2v5H5v-5z" />
          <circle cx="11" cy="14" r="1.6" />
          <circle cx="16.5" cy="11" r="1.6" />
          <circle cx="21" cy="14.5" r="1.6" />
          <path d="M16 4v3M14.5 5.5h3" />
        </>
      )}
      {icon === "travel" && (
        <>
          <path d="M4 18l24-9-6 15-5-6-6 2 2-4-9 2z" />
          <path d="M17 18l11-9" />
        </>
      )}
    </svg>
  );
}
