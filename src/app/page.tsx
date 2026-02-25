import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import LogoLoop from "@/components/hero/LogoLoop";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const GrowthArchitecture = dynamic(() => import("@/components/home/GrowthArchitecture"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const DataBenchmarkBlock = dynamic(() => import("@/components/home/DataBenchmarkBlock"));
const HowWeWork = dynamic(() => import("@/components/home/HowWeWork"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const InfrastructureTiers = dynamic(() => import("@/components/home/InfrastructureTiers"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));

export default function HomePage() {
  return (
    <>
      {/* A — Hero */}
      <Hero />

      {/* B — Client Reality: Pain bullets */}
      <ClientReality />
  {/* Removed explicit spacer div for tighter section flow */}
      {/* C — Qualification (For You / Not For You) */}
      <QualificationCTA />

      {/* D — The Growth Architecture: 4 pillars */}
      <GrowthArchitecture />

      {/* E — Proof Injection: Featured case study */}
      <FeaturedCaseStudy />

      {/* Client logos */}
      <div className="py-10 md:py-14 bg-cg-section-b">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-cg-muted mb-2">CLIENTS</p>
        <p className="text-center text-[13px] text-cg-dim mb-7">Every business below is a real active or past client account.</p>
        <LogoLoop logos={caseStudyLogos} speed={120} gap={40} logoHeight={40} />
      </div>

      {/* Data benchmark — stark single-number section */}
      <DataBenchmarkBlock />

      {/* F — Process: 3-step */}
      <HowWeWork />

      {/* G — Differentiation: Comparison table */}
      <Differentiation />

      {/* H — Infrastructure Tiers: Three-tier pricing */}
      <InfrastructureTiers />

      {/* FAQ — Objection handling */}
      <FAQSection />

      {/* Spots Left Section — now at the end before footer */}
      {require("@/components/home/SpotsLeftSection").default()}
    </>
  );
}
