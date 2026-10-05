import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import CommandPalette from "@/components/CommandPalette";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-juanjose-ospina.vercel.app"),
  title: "Juan José Ospina · Ingeniero de Sistemas · Sistemas Web",
  description:
    "Juan José Ospina, ingeniero de sistemas en Medellín. Diseño y construcción de sistemas web completos: alcance, arquitectura, datos, interfaz y despliegue.",
  keywords: ["Juan José Ospina", "Ingeniero de Sistemas", "Desarrollador de Software Medellín", "Next.js", "Sistemas web", "Portafolio"],
  authors: [{ name: "Juan José Ospina", url: "https://github.com/juann11" }],
  openGraph: {
    title: "Juan José Ospina · Sistemas web bien estructurados",
    description: "Alcance, arquitectura, datos y despliegue. Sistemas que aguantan operación real.",
    type: "website",
    locale: "es_CO",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060913",
};

export default function RootLayout(props: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan José Ospina",
    jobTitle: "Ingeniero de Sistemas · Desarrollo de Software",
    address: { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
    alumniOf: "UPB",
    url: "https://github.com/juann11",
    knowsAbout: ["Next.js", "React", "Node.js", "NestJS", "Python", "Kotlin", "Postgres", "Supabase", "Docker", "n8n"],
  };
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable} dark`}>
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>{props.children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
