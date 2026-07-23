import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chai Studio | Premium Kreativ Mütəxəssis və Freelance Platforması",
  description:
    "Chai Studio — Yoxlanılmış kreativ peşəkarları bizneslərlə birləşdirən lüks SaaS bazarı. Qrafik Dizayn, Brendinq, SMM, Video Montaj, Motion və UI/UX üzrə təhlükəsiz depozit ödənişli platforma.",
  keywords: [
    "Chai Studio",
    "Kreativ Mütəxəssislər",
    "Dizayn Bazarı",
    "Freelance Azərbaycan",
    "UI UX Dizayn",
    "Brendinq",
    "Video Montaj",
    "Depozit Ödəniş Escrow",
  ],
  authors: [{ name: "Chai Studio Azerbaijan" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az" className="dark scroll-smooth">
      <body className="bg-[#09090B] text-white antialiased selection:bg-purple-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
