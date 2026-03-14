import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YAKU | Escalá tu app al infinito",
  description: "YAKU es la plataforma de infraestructura SaaS para desarrolladores y startups del NOA. Desplegá, gestioná y escalá al infinito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-body bg-bg text-text-main`}>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}
