import type { Locale } from "@/i18n/config";
import { currency } from "@/data/services";

const intlLocales: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en-GB",
};

/** Formats a whole-euro price for the locale: "45 €" (pt) / "€45" (en). */
export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocales[locale], {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Joins names as a natural-language list: "A, B e C" (pt) / "A, B and C" (en). */
export function formatList(items: readonly string[], locale: Locale): string {
  return new Intl.ListFormat(intlLocales[locale], {
    style: "long",
    type: "conjunction",
  }).format(items);
}

/** Replaces {key} placeholders in a dictionary template. */
export function interpolate(
  template: string,
  values: Record<string, string>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? values[key] : match
  );
}
