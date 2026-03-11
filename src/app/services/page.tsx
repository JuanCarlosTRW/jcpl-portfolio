import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import ProofBanner from "@/components/services/ProofBanner";
import FitCheck from "@/components/services/FitCheck";
import SystemTimelineSection from "@/components/services/SystemTimelineSection";
import CaseStudySwitcher from "@/components/services/CaseStudySwitcher";
import ServicesUnicornEmbed from "@/components/services/ServicesUnicornEmbed";
import TechStack from "@/components/services/TechStack";
import SystemArchitectureSection from "@/components/services/SystemArchitectureSection";
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
      <FitCheck />
      <SystemTimelineSection />
      <CaseStudySwitcher />
      <ServicesUnicornEmbed />
      <TechStack />
      <SystemArchitectureSection />
      <ServicesFinalCTA />
    </>
  );
}
