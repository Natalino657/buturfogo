"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const { navigation } = siteConfig;

type NavbarProps = {
  lang: Locale;
  dict: {
    navigation: Dictionary["navigation"];
    languageSwitcher: Dictionary["languageSwitcher"];
    bookingCta: string;
  };
  /** Built on the server with the locale's pre-filled message. */
  whatsappUrl: string;
};

export function Navbar({ lang, dict, whatsappUrl }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const pendingSection = useRef<string | null>(null);

  function handleMobileNavigate(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    pendingSection.current = href;
    setOpen(false);
  }

  // Scroll to the picked section while the panel slides out, instead of after.
  // Base UI releases its scroll lock (restoring the old position) in a 0ms
  // timeout scheduled when the Sheet closes; our timeout is queued after it.
  useEffect(() => {
    const href = pendingSection.current;
    if (open || !href) return;

    pendingSection.current = null;
    const timeout = window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView();
      window.history.pushState(null, "", href);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-volcanic/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-6 lg:px-10">
        <Link href="#inicio" aria-label={siteConfig.name}>
          {/* Compact size below sm (same as in the mobile menu) to leave room for the
              language pill + menu button. Below 390px the mark is dropped so the full
              logo text still fits on one line. */}
          <Logo
            markClassName="h-8 max-[389px]:hidden sm:h-10"
            wordmarkClassName="text-xl sm:text-2xl"
            serviceLabelClassName="whitespace-nowrap"
          />
        </Link>

        {/* Each link reserves the same min width (wider than the longest PT/EN label),
            so the group keeps the same size and position in both languages. */}
        <div className="hidden items-center gap-4 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-w-20 whitespace-nowrap text-center text-sm font-medium text-cream/80 transition-colors hover:text-lava"
            >
              {dict.navigation[item.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher lang={lang} labels={dict.languageSwitcher} />

          {/* min-w fits the longer label ("Reservar agora"), so the button keeps its width in EN. */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 min-w-36 items-center justify-center whitespace-nowrap rounded-md bg-lava px-4 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
          >
            {dict.bookingCta}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageSwitcher
            lang={lang}
            labels={dict.languageSwitcher}
            size="sm"
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="relative inline-flex size-10 items-center justify-center rounded-md text-cream transition-colors after:absolute after:-inset-0.5 hover:bg-white/10 hover:text-white"
              aria-label={dict.navigation.openMenu}
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              closeLabel={dict.navigation.closeMenu}
              className="gap-0 border-white/10 bg-volcanic p-0 text-cream"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5 pr-14">
                <SheetTitle className="text-left text-cream">
                  <Logo
                    markClassName="h-9"
                    wordmarkClassName="text-xl"
                    serviceLabelClassName="mt-1.5 text-[10px] tracking-[0.28em] text-cream/55"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col px-6 pt-4">
                <ul className="flex flex-col">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={(event) =>
                          handleMobileNavigate(event, item.href)
                        }
                        className="flex min-h-12 items-center border-b border-white/10 text-[17px] font-medium tracking-wide text-cream/90 transition-colors hover:text-lava"
                      >
                        {dict.navigation[item.key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <SheetFooter className="border-t border-white/10 px-6 py-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-lava px-4 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
                >
                  {dict.bookingCta}
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
