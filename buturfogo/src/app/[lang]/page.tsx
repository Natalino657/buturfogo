import { notFound } from "next/navigation";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const whatsappUrl = getWhatsAppUrl({ locale: lang });

  return (
    <main className="">
      <Navbar
        lang={lang}
        dict={{
          navigation: dict.navigation,
          languageSwitcher: dict.languageSwitcher,
          bookingCta: dict.booking.cta,
        }}
        whatsappUrl={whatsappUrl}
      />
      <Hero dict={dict.hero} whatsappUrl={whatsappUrl} />
      <section
        id="transfers"
        className="scroll-mt-20 bg-volcanic px-6 py-24 text-center"
      >
        <p className="text-sm uppercase tracking-widest text-lava">
          {siteConfig.name}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-cream">
          {dict.transfers.title}
        </h2>
        <p className="mt-3 text-cream/60">{dict.transfers.description}</p>
      </section>

      <section
        id="passeios"
        className="scroll-mt-20 bg-[#202020] px-6 py-24 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-cream">
          {dict.tours.title}
        </h2>
        <p className="mt-3 text-cream/60">{dict.tours.description}</p>
      </section>

      <section
        id="sobre"
        className="scroll-mt-20 bg-volcanic px-6 py-24 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-cream">
          {dict.about.title}
        </h2>
      </section>
    </main>
  );
}
