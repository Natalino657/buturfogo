import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactSectionProps = {
  dict: Dictionary["contact"];
  /** WhatsApp link with the general pre-filled message (built on the server). */
  whatsappUrl: string;
};

/** "+238 599 38 84" from "2385993884" (country code + 7-digit Cabo Verde number). */
function formatPhone(phone: string): string {
  const local = phone.slice(3);
  return `+${phone.slice(0, 3)} ${local.slice(0, 3)} ${local.slice(3, 5)} ${local.slice(5)}`;
}

/**
 * Closing call to action. WhatsApp is the only contact listed because it is
 * the only one confirmed in siteConfig (no public phone line or email yet).
 */
export function ContactSection({ dict, whatsappUrl }: ContactSectionProps) {
  return (
    <section
      id="contactos"
      aria-labelledby="contact-title"
      className="scroll-mt-20 border-t border-white/[0.06] bg-volcanic-raised py-20 sm:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <h2
            id="contact-title"
            className="font-heading text-[clamp(1.875rem,1.35rem+1.5vw,2.5rem)] leading-[1.15] font-extrabold tracking-tight text-balance text-cream"
          >
            {dict.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-cream/65 lg:text-[17px]">
            {dict.text}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="flex flex-col gap-5 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div className="flex items-center gap-3">
              <MessageCircle
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-5 shrink-0 text-lava"
              />
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-cream/50 uppercase">
                  {dict.whatsappLabel}
                </p>
                <p className="mt-0.5 font-heading text-lg font-bold tracking-tight text-cream">
                  {formatPhone(siteConfig.whatsapp.phone)}
                </p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-lava px-6 text-base font-semibold text-white transition-colors outline-none hover:bg-lava/90 focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic sm:w-fit"
            >
              {dict.whatsappCta}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
