import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import LogoLoop from "@/components/hero/LogoLoop";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const DataBenchmarkBlock = dynamic(() => import("@/components/home/DataBenchmarkBlock"));
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const GrowthArchitecture = dynamic(() => import("@/components/home/GrowthArchitecture"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const InfrastructureTiers = dynamic(() => import("@/components/home/InfrastructureTiers"));
const HowWeWork = dynamic(() => import("@/components/home/HowWeWork"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: Hook + authority signal */}
      <Hero />

      {/* 2 — Proof: Real client logos + hard benchmark stat */}
      <div className="py-10 md:py-14 bg-sv-surface">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-2">CLIENTS</p>
        <p className="text-center text-[13px] text-sv-text-dim mb-7">Every business below is a real active or past client account.</p>
        <LogoLoop logos={caseStudyLogos} speed={120} gap={40} logoHeight={40} />
      </div>
      <DataBenchmarkBlock />

      {/* 3 — Diagnosis: Pain bullets — what they're living with */}
      <ClientReality />

      {/* 4 — Trust Bridge: Agencies vs. Growth Architecture — why this is different */}
      <Differentiation />

      {/* 5 — System: The 4-pillar Growth Architecture */}
      <GrowthArchitecture />

      {/* 6 — Case Study: Proof the system works */}
      <FeaturedCaseStudy />

      {/* 7 — Who It's For: Qualification grid */}
      <QualificationCTA />

      {/* 8 — Offer Stack: Infrastructure tiers */}
      <InfrastructureTiers />

      {/* 9 — Process: 3-step — Diagnose → Build → Scale */}
      <HowWeWork />

      {/* 10 — FAQ: Objection handling */}
      <FAQSection />

      {/* 11 — Final CTA: Spots Left */}
      <SpotsLeftSection />
    </>
  );
}
