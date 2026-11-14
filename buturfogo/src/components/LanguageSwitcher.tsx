"use client";

import { Fragment, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type LanguageSwitcherProps = {
  lang: Locale;
  labels: Dictionary["languageSwitcher"];
  className?: string;
  /** Called before navigating to the other language (e.g. to close the mobile menu). */
  onNavigate?: () => void;
};

/** The "PT / EN" switcher. Keeps the current section (#hash) when changing language. */
export function LanguageSwitcher({
  lang,
  labels,
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
    <div role="group" aria-label={labels.label} className={cn("flex items-center gap-1", className)}>
      {locales.map((locale, index) => {
        const isActive = locale === lang;

        return (
          <Fragment key={locale}>
            {index > 0 && <span aria-hidden="true">/</span>}
            <Link
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              aria-label={labels[locale]}
              aria-current={isActive ? "true" : undefined}
              onClick={(event) => handleClick(event, locale)}
              className={cn(
                "uppercase transition-colors",
                isActive ? "text-cream" : "hover:text-white"
              )}
            >
              {locale}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}
