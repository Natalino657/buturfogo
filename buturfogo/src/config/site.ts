export type SectionKey = "home" | "tours" | "transfers" | "about" | "contact";

export type NavigationItem = {
  key: SectionKey;
  href: `#${string}`;
};

/**
 * NEXT_PUBLIC_SITE_URL when set; otherwise, on Vercel, the project's production
 * domain (set by Vercel on every deployment); otherwise the local dev server.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "BUTURFOGO",
  /** Public site URL, used for canonical/hreflang/Open Graph links. */
  url: siteUrl,

  wordmark: { primary: "BUTUR", accent: "FOGO" },
  serviceLabel: "TRANSFERS & TOURS",

  whatsapp: {
    phone: "2385993884",
  },

  /** Public contact email, confirmed by the owner. */
  email: "djonnythenmont@gmail.com",

  /** Section anchors are shared by every language, so /pt#transfers maps to /en#transfers. */
  navigation: [
    { key: "home", href: "#inicio" },
    { key: "transfers", href: "#transfers" },
    { key: "tours", href: "#passeios" },
    { key: "about", href: "#sobre" },
    { key: "contact", href: "#contactos" },
  ] satisfies readonly NavigationItem[],
} as const;
