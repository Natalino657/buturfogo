"use client";

import { useRef, useState, type MouseEvent } from "react";
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

  function handleOpenChangeComplete(isOpen: boolean) {
    const href = pendingSection.current;
    if (isOpen || !href) return;

    pendingSection.current = null;
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView();
      window.history.pushState(null, "", href);
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-volcanic/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link href="#inicio" aria-label={siteConfig.name}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-lava"
            >
              {dict.navigation[item.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher
            lang={lang}
            labels={dict.languageSwitcher}
            className="text-xs font-semibold text-cream/70"
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-lava px-4 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
          >
            {dict.bookingCta}
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet
            open={open}
            onOpenChange={setOpen}
            onOpenChangeComplete={handleOpenChangeComplete}
          >
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10 hover:text-white"
              aria-label={dict.navigation.openMenu}
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              closeLabel={dict.navigation.closeMenu}
              className="w-[min(100%,20rem)] gap-0 border-white/10 bg-volcanic p-0 text-cream"
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

                <LanguageSwitcher
                  lang={lang}
                  labels={dict.languageSwitcher}
                  onNavigate={() => setOpen(false)}
                  className="mt-6 text-xs font-semibold tracking-[0.22em] text-cream/55"
                />
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
