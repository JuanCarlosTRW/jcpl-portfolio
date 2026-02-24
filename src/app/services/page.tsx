import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import WhatYouGet from "@/components/services/WhatYouGet";
import FitCheck from "@/components/services/FitCheck";
import InfrastructureTiers from "@/components/home/InfrastructureTiers";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Growth Systems for Service Businesses",
  description:
    "Conversion websites, Google Ads, SEO, and AI automation built as one integrated system. Three tiers built around your revenue stage. Apply to see if you qualify.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatYouGet />
      <FitCheck />
      <InfrastructureTiers />
      <ServicesFinalCTA />
    </>
  );
}
