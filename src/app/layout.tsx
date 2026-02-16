import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeedPopup from "@/components/SpeedPopup";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import { siteConfig } from "@/lib/content";
import {
  generatePersonSchema,
  generateProfessionalServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProfessionalServiceSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
      </head>
        <body className={`${inter.className} antialiased bg-[var(--bg-base)] text-[var(--text-primary)]`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <SpeedPopup />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
