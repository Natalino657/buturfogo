import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { FOGO_HERO_SRC } from "@/data/hero";
import { photos } from "@/data/photos";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * /sitemap.xml: one entry per language, each listing the other as its
 * alternate and the photos shown on the page (for image search).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.url}/${locale}`])
  );
  const images = [
    FOGO_HERO_SRC,
    ...Object.values(photos).map((photo) => photo.src),
  ].map((src) => `${siteConfig.url}${src}`);

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
    images,
  }));
}
