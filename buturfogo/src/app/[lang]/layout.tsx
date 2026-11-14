import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "../globals.css";
import { siteConfig } from "@/config/site";
import { defaultLocale, hasLocale, locales, ogLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fontVariables } from "@/lib/fonts";

/** Only /pt and /en exist; any other first segment returns 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const { title, description } = getDictionary(lang).metadata;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: siteConfig.name,
      title,
      description,
      locale: ogLocales[lang],
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => ogLocales[locale]),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={fontVariables}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
