export type Locale = "pt" | "en";

type LocalizedText = Record<Locale, string>;

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "BUTURFOGO",

  wordmark: { primary: "BUTUR", accent: "FOGO" },
  serviceLabel: "TRANSFERS & TOURS",

  slogan: {
    pt: ["Descubra a ilha.", "Viva a experiência."],
    en: ["Discover the island.", "Experience its magic."],
  } satisfies Record<Locale, readonly [string, string]>,

  whatsapp: {
    phone: "2385993884",
    defaultMessage: {
      pt: "Olá BUTURFOGO! Gostaria de mais informações sobre os vossos serviços.",
      en: "Hello BUTURFOGO! I would like more information about your services.",
    } satisfies LocalizedText,
  },

  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Transfer", href: "#transfers" },
    { label: "Passeios", href: "#passeios" },
    { label: "Sobre nós", href: "#sobre" },
  ] satisfies readonly NavigationItem[],
} as const;
