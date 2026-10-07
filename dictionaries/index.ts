import type { Locale } from "@/lib/i18n";
import sq from "./sq";
import en from "./en";
import it from "./it";

// Albanian is the source of truth for the dictionary shape; en/it must match it.
export type Dictionary = typeof sq;

const dictionaries: Record<Locale, Dictionary> = { sq, en, it };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
