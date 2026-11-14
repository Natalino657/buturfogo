export type SectionKey = "home" | "transfers" | "tours" | "about";

export type NavigationItem = {
  key: SectionKey;
  href: `#${string}`;
};

export const siteConfig = {
  name: "BUTURFOGO",
  /** Public site URL, used for canonical/hreflang/Open Graph links. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  wordmark: { primary: "BUTUR", accent: "FOGO" },
  serviceLabel: "TRANSFERS & TOURS",

  whatsapp: {
    phone: "2385993884",
  },

  /** Section anchors are shared by every language, so /pt#transfers maps to /en#transfers. */
  navigation: [
    { key: "home", href: "#inicio" },
    { key: "transfers", href: "#transfers" },
    { key: "tours", href: "#passeios" },
    { key: "about", href: "#sobre" },
  ] satisfies readonly NavigationItem[],
} as const;
