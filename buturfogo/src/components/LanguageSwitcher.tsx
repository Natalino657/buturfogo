"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type LanguageSwitcherProps = {
  lang: Locale;
  labels: Dictionary["languageSwitcher"];
  /** "sm" is the compact pill used in the mobile header. */
  size?: "default" | "sm";
  className?: string;
  /** Called before navigating to the other language (e.g. to close the mobile menu). */
  onNavigate?: () => void;
};

/** The "PT / EN" switcher. Keeps the current section (#hash) when changing language. */
export function LanguageSwitcher({
  lang,
  labels,
  size = "default",
  className,
  onNavigate,
}: LanguageSwitcherProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>, locale: Locale) {
    event.preventDefault();
    if (locale === lang) return;

    onNavigate?.();
    router.push(`/${locale}${window.location.hash}`);
  }

  return (
    // Fixed-size pill: identical in every language. The default size matches the
    // h-9 booking button on desktop; "sm" fits the mobile header.
    <div
      role="group"
      aria-label={labels.label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-white/15 bg-white/5",
        size === "sm" ? "h-8 p-0.5" : "h-9 p-0.75",
        className
      )}
    >
      {locales.map((locale) => {
        const isActive = locale === lang;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-label={labels[locale]}
            aria-current={isActive ? "true" : undefined}
            onClick={(event) => handleClick(event, locale)}
            className={cn(
              "inline-flex h-full items-center justify-center rounded-full font-semibold uppercase tracking-[0.12em] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-lava/70",
              size === "sm" ? "w-9 text-[10px]" : "w-11 text-[11px]",
              isActive
                ? "bg-cream text-volcanic"
                : "text-cream/60 hover:bg-white/10 hover:text-cream"
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
