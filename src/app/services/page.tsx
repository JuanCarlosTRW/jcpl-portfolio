import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { serviceTiers } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesHero from "@/components/services/ServicesHero";
import ProofStrip from "@/components/services/ProofStrip";
import ServiceCard from "@/components/services/ServiceCard";
import DecisionAssist from "@/components/services/DecisionAssist";
import ComparisonTable from "@/components/services/ComparisonTable";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Services — Growth Systems for Service Businesses",
  description:
    "Three clear service tiers to get you online, fill your calendar, and dominate your local market. Foundation, Growth, and Scale packages.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <ServicesHero />

      {/* ═══ PROOF BAR ═══ */}
      <SectionWrapper className="pt-0">
        <ProofStrip />
      </SectionWrapper>

      {/* ═══ PLAN CARDS ═══ */}
      <SectionWrapper id="plans">
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <ServiceCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Decision Assist */}
        <div className="mt-12 max-w-3xl mx-auto">
          <DecisionAssist />
        </div>
      </SectionWrapper>

      {/* ═══ COMPARISON TABLE ═══ */}
      <SectionWrapper variant="surface">
        <div className="max-w-4xl mx-auto">
          <ComparisonTable />
        </div>
      </SectionWrapper>

      {/* ═══ FAQ ═══ */}
      <SectionWrapper>
        <ServicesFAQ />
      </SectionWrapper>

      {/* ═══ FINAL CTA + GUARANTEES + TRUST ═══ */}
      <ServicesFinalCTA />
    </>
  );
}
