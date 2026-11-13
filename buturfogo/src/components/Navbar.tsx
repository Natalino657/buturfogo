"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Transfer", href: "#transfer" },
  { label: "Passeios", href: "#passeios" },
  { label: "Sobre nós", href: "#sobre" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171717/80] backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/*logo*/}
        <Link href="#inicio" className="flex flex-col">
          <span className="font-heading text-2xl font-extrabold tracking-tight">
            BUTUR<samp className="text-lava">FOGO</samp>
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
          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-volcanic text-cream"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-extrabold text-cream">
                  BUTUR<span className="text-lava">FOGO</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-10 flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-lava"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/en"
                  className="text-sm font-semibold text-cream/70"
                >
                  Português / English
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
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
