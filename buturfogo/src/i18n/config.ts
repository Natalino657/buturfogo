export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** Open Graph locale codes (language_TERRITORY). */
export const ogLocales: Record<Locale, string> = {
  pt: "pt_CV",
  en: "en_US",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
