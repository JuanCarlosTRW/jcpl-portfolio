import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ProofBanner from "@/components/services/ProofBanner";
import SystemTimelineSection from "@/components/services/SystemTimelineSection";
import SystemArchitectureSection from "@/components/services/SystemArchitectureSection";
import TechStack from "@/components/services/TechStack";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = {
  title: "Services | Infrastructure de croissance pour entreprises de services",
  description:
    "Un système d'acquisition complet : site de conversion, SEO local, Google Ads avec coût par appel suivi, IA de qualification. Construit et géré par une personne. En ligne en 11 jours.",
  alternates: {
    canonical: "https://clientgrowth.ca/fr/services",
    languages: {
      "en": "https://clientgrowth.ca/services",
      "fr": "https://clientgrowth.ca/fr/services",
      "x-default": "https://clientgrowth.ca/services",
    },
  },
};

export default function FrServicesPage() {
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
