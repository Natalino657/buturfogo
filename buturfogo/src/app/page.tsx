import { Hero } from "@/components/hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <section
        id="transfers"
        className="scroll-mt-20 bg-volcanic px-6 py-24 text-center"
      >
        <p className="text-sm uppercase tracking-widest text-lava">BUTURFOGO</p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-cream">
          Transfers
        </h2>
        <p className="mt-3 text-cream/60">
          Em breve, descubra os nossos serviços de transporte.
        </p>
      </section>

      <section
        id="passeios"
        className="scroll-mt-20 bg-[#202020] px-6 py-24 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-cream">
          Passeios e experiências
        </h2>
        <p className="mt-3 text-cream/60">
          Explore os destinos mais especiais da Ilha do Fogo.
        </p>
      </section>

      <section
        id="sobre"
        className="scroll-mt-20 bg-volcanic px-6 py-24 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-cream">
          Sobre o BUTURFOGO
        </h2>
      </section>
    </main>
  );
}
