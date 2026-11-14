import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `404 | ${siteConfig.name}`,
};

/** Shown for any URL that matches no route (e.g. /fr or /pt/unknown). Bilingual, since the language is unknown here. */
export default function GlobalNotFound() {
  return (
    <html lang="pt" className={fontVariables}>
      <body className="antialiased">
        <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
          <p className="font-heading text-6xl font-extrabold text-lava">404</p>
          <h1 className="mt-4 text-2xl font-bold text-cream">
            Página não encontrada
          </h1>
          <p lang="en" className="mt-1 text-cream/60">
            Page not found
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/pt"
              className="inline-flex h-11 items-center justify-center rounded-md bg-lava px-6 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
            >
              Voltar ao início
            </Link>
            <Link
              href="/en"
              lang="en"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 text-sm text-cream transition-colors hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
