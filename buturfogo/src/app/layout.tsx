import type { Metadata } from "next";
import { Montserrat, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BUTURFOGO | Transfers & Tours",
  description:
    "Descubra a ilha. Viva a experiência. Explore a Ilha do Fogo com BUTURFOGO Transfers & Tours.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="Pt" className={cn("font-sans", geist.variable)}>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
