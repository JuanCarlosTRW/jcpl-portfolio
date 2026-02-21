import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import WhatYouGet from "@/components/services/WhatYouGet";
import FitCheck from "@/components/services/FitCheck";
import InvestmentSection from "@/components/services/InvestmentSection";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Growth Systems for Service Businesses",
  description:
    "Conversion websites, Google Ads, SEO, and AI automation built as one integrated system. Starting at $2,500/month. Apply to see if you qualify.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatYouGet />
      <FitCheck />
      <InvestmentSection />
      <ServicesFinalCTA />
    </>
  );
}
