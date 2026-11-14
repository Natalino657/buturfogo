import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { pt, type Dictionary } from "./pt";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
