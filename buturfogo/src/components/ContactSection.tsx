import { Mail } from "lucide-react";

import { Container } from "@/components/Container";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactSectionProps = {
  dict: Dictionary["contact"];
  /** Screen-reader note on the WhatsApp button, e.g. "(abre o WhatsApp)". */
  opensWhatsapp: string;
  /** WhatsApp link with the general pre-filled message (built on the server). */
  whatsappUrl: string;
};

/** "+238 599 38 84" from "2385993884" (country code + 7-digit Cabo Verde number). */
function formatPhone(phone: string): string {
  const local = phone.slice(3);
  return `+${phone.slice(0, 3)} ${local.slice(0, 3)} ${local.slice(3, 5)} ${local.slice(5)}`;
}

/**
 * Closing call to action: WhatsApp (main contact, with the button) and email.
 * Only contacts confirmed in siteConfig are listed; there is no public phone
 * line for calls.
 */
export function ContactSection({
  dict,
  opensWhatsapp,
  whatsappUrl,
}: ContactSectionProps) {
  const rowLabel = "text-xs font-semibold tracking-[0.2em] text-cream/50 uppercase";

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
          <div className="flex flex-col gap-6 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="size-5 shrink-0 text-lava" />
                <div className="min-w-0">
                  <p className={rowLabel}>{dict.whatsappLabel}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block font-heading text-lg font-bold tracking-tight text-cream underline decoration-white/20 underline-offset-4 transition-colors outline-none hover:decoration-lava focus-visible:ring-2 focus-visible:ring-lava/70"
                  >
                    {formatPhone(siteConfig.whatsapp.phone)}
                    <span className="sr-only"> {opensWhatsapp}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-5 shrink-0 text-lava"
                />
                <div className="min-w-0">
                  <p className={rowLabel}>{dict.emailLabel}</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-0.5 block font-heading text-lg font-bold tracking-tight break-all text-cream underline decoration-white/20 underline-offset-4 transition-colors outline-none hover:decoration-lava focus-visible:ring-2 focus-visible:ring-lava/70"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-lava px-6 text-base font-semibold text-white transition-colors outline-none hover:bg-lava/90 focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic sm:w-fit"
            >
              <WhatsAppIcon className="size-5" />
              {dict.whatsappCta}
              <span className="sr-only"> {opensWhatsapp}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
