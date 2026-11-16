import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX | Construcción y Supervisión — Rigor Técnico y Compromiso",
  description:
    "Construimos con precisión y supervisamos con compromiso. Soluciones integrales de construcción y supervisión orientadas a calidad, cumplimiento y seguridad en Cajamarca y todo el Perú.",
  keywords: [
    "APEX Construcción y Supervisión",
    "construcción civil Cajamarca",
    "supervisión de obras Perú",
    "gerencia de proyectos",
    "expedientes técnicos",
    "ingeniería estructural",
    "control de calidad en obra",
  ],
  icons: {
    icon: "/brand/isotipo-color.png",
    shortcut: "/brand/isotipo-color.png",
    apple: "/brand/isotipo-color.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-[#474A51] selection:bg-[#DB881E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
