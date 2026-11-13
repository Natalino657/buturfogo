"use client";

import { useState } from "react";
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

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Transfer", href: "#transfers" },
  { label: "Passeios", href: "#passeios" },
  { label: "Sobre nós", href: "#sobre" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171717]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link href="#inicio" className="flex flex-col">
          <span className="font-heading text-2xl font-extrabold tracking-tight">
            BUTUR<span className="text-lava">FOGO</span>
          </span>
          <span className="text-[9px] font-medium tracking-[0.3em] text-cream/70">
            TRANSFERS & TOURS
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-lava"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/en"
            className="text-xs font-semibold text-cream/70 transition-colors hover:text-white"
            aria-label="Switch to English"
          >
            PT / EN
          </Link>

          <a
            href="https://wa.me/2385993884"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-lava px-4 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
          >
            Reservar agora
          </a>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] gap-0 border-white/10 bg-volcanic p-0 text-cream"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5 pr-14">
                <SheetTitle className="text-left font-heading text-xl font-extrabold tracking-tight text-cream">
                  BUTUR<span className="text-lava">FOGO</span>
                </SheetTitle>
                <p className="mt-1 text-left text-[10px] font-medium tracking-[0.28em] text-cream/55">
                  TRANSFERS & TOURS
                </p>
              </SheetHeader>

              <nav className="flex flex-1 flex-col px-6 pt-4">
                <ul className="flex flex-col">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center border-b border-white/10 text-[17px] font-medium tracking-wide text-cream/90 transition-colors hover:text-lava"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/en"
                  onClick={() => setOpen(false)}
                  className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cream/55 transition-colors hover:text-cream"
                >
                  PT / EN
                </Link>
              </nav>

              <SheetFooter className="border-t border-white/10 px-6 py-5">
                <a
                  href="https://wa.me/2385993884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-lava px-4 text-sm font-semibold text-white transition-colors hover:bg-lava/90"
                >
                  Reservar agora
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
