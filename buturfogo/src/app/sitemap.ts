import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale, locales } from "@/i18n/config";

/** /sitemap.xml: one entry per language, each listing the other as its alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.url}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
