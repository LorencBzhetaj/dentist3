import Image from "next/image";
import { cn } from "@/lib/utils";
import { serviceMeta, type ServiceSlug } from "@/data/services";
import { ServiceGlyph } from "@/components/ui/Icons";

/** Photo area of a service card: the real photo when available, otherwise a branded panel. */
export default function ServiceImage({ slug, alt, sizes, className }: { slug: ServiceSlug; alt: string; sizes: string; className?: string }) {
  const { image, icon } = serviceMeta[slug];
  return (
    <div className={cn("relative overflow-hidden bg-sand-100", className)}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sand-100 via-sand-50 to-sand-200 group-hover:scale-105 transition-transform duration-500"
          role="img"
          aria-label={alt}
        >
          <span className="absolute -right-6 -bottom-8 font-serif text-[9rem] leading-none text-sand-200/80 select-none" aria-hidden="true">
            S
          </span>
          <span className="relative w-20 h-20 rounded-full bg-white/70 border border-sand-300/70 text-sand-600 flex items-center justify-center shadow-sm">
            <ServiceGlyph icon={icon} className="w-10 h-10" />
          </span>
        </div>
      )}
    </div>
  );
}
