import { Inter, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Font CSS variables to put on <html>. */
export const fontVariables = `${montserrat.variable} ${inter.variable}`;
