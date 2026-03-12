import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { Header } from "@/components/Header";
import { AlgorithmicBackground } from "@/components/AlgorithmicBackground";

export const metadata: Metadata = {
  title: "ISE Senior Design Portfolio | NC A&T",
  description: "North Carolina A&T Industrial and Systems Engineering Senior Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-nc-gold selection:text-nc-blue-900`}>
        <AlgorithmicBackground />
        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
