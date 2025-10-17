import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mundo Feliz Fantasia | Fantasias Infantis de Qualidade",
  description: "Loja especializada em fantasias infantis de alta qualidade. Trabalhamos com atacado e varejo, enviando para todo o Brasil. Fantasias que transformam momentos em memórias.",
  keywords: "fantasias infantis, fantasias, atacado, varejo, princesas, heróis, animais, profissões, halloween, natal, bebês",
  openGraph: {
    title: "Mundo Feliz Fantasia | Fantasias Infantis de Qualidade",
    description: "Fantasias que transformam momentos em memórias. Loja especializada em fantasias infantis.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

