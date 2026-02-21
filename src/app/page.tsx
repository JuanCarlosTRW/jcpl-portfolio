import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import LogoLoop from "@/components/hero/LogoLoop";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const GrowthArchitecture = dynamic(() => import("@/components/home/GrowthArchitecture"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const HowWeWork = dynamic(() => import("@/components/home/HowWeWork"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));

export default function HomePage() {
  return (
    <>
      {/* A — Hero */}
      <Hero />

      {/* B — Client Reality: Pain bullets */}
      <ClientReality />

      {/* C — Qualification (For You / Not For You) */}
      <QualificationCTA />

      {/* D — The Growth Architecture: 4 pillars */}
      <GrowthArchitecture />

      {/* E — Proof Injection: Featured case study */}
      <FeaturedCaseStudy />

      {/* Client logos */}
      <div className="py-8 md:py-12">
        <LogoLoop logos={caseStudyLogos} speed={120} gap={40} logoHeight={40} />
      </div>

      {/* F — Process: 3-step */}
      <HowWeWork />

      {/* G — Differentiation: Comparison table */}
      <Differentiation />

      {/* FAQ — Objection handling */}
      <FAQSection />
    </>
  );
}
