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

/**
 * Returns "#id" of the section the user is reading (the one crossing a line at
 * 40% of the viewport height), or "" when that is the first section (the Hero).
 * Based on the scroll position, not on location.hash, which goes stale as soon
 * as the user scrolls after clicking a menu link.
 */
function getVisibleSectionHash(): string {
  const readingLine = window.innerHeight * 0.4;
  const sections = [...document.querySelectorAll<HTMLElement>("main > section[id]")];
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= readingLine)
    .pop();

  return current && current !== sections[0] ? `#${current.id}` : "";
}

/** The "PT / EN" switcher. Keeps the section currently in view when changing language. */
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
    router.push(`/${locale}${getVisibleSectionHash()}`);
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
              // The ::after pseudo-element extends the touch area to 44px tall without changing the look.
              "relative inline-flex h-full items-center justify-center rounded-full font-semibold uppercase tracking-[0.12em] transition-colors duration-200 outline-none after:absolute after:inset-x-0 focus-visible:ring-2 focus-visible:ring-lava/70",
              size === "sm"
                ? "w-9 text-[10px] after:-inset-y-[9px]"
                : "w-11 text-[11px] after:-inset-y-2",
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
