
import ServicesHero from "@/components/services/ServicesHero";
import WhatYouGet from "@/components/services/WhatYouGet";
import FitCheck from "@/components/services/FitCheck";
import InvestmentSection from "@/components/services/InvestmentSection";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

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
