"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

type FloatingWhatsAppProps = {
  /** Accessible name, e.g. "Reservar agora (abre o WhatsApp)". */
  label: string;
  /** WhatsApp link with the general pre-filled message (built on the server). */
  href: string;
  /** Sections that already show a WhatsApp button; the floating one hides over them. */
  hideOver: readonly string[];
};

/**
 * Round WhatsApp button for phones and tablets, where the navbar has no
 * booking button. Hidden while the Hero or the contact section is on screen,
 * since both have their own WhatsApp button.
 */
export function FloatingWhatsApp({ label, href, hideOver }: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });

    for (const id of hideOver) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [hideOver]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={visible ? undefined : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-lava text-white shadow-lg shadow-black/40 transition duration-300 outline-none hover:bg-lava/90 focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic lg:hidden",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <WhatsAppIcon className="size-5" />
    </a>
  );
}
