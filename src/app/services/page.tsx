import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import ProofBanner from "@/components/services/ProofBanner";
import SystemTimelineSection from "@/components/services/SystemTimelineSection";
import SystemArchitectureSection from "@/components/services/SystemArchitectureSection";
import TechStack from "@/components/services/TechStack";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Growth Systems for Service Businesses",
  description:
    "One acquisition system — conversion site, local SEO, Google Ads, AI call qualification, and ongoing optimization. Built and managed by one person. Apply to see if you qualify.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ProofBanner />
      <SystemTimelineSection />
      <SystemArchitectureSection />
      <TechStack />
      <ServicesFinalCTA />
    </>
  );
}
