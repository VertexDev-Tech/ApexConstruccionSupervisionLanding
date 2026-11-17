import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#474A51] selection:bg-[#DB881E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
