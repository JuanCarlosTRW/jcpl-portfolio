"use client";


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
      {/* A — Hero (laser WebGL preserved) */}
      <Hero />

      {/* B — Client Reality: Pain bullets */}
      <ClientReality />

      {/* D — The Growth Architecture: 4 pillars */}
      <GrowthArchitecture />


      {/* E — Proof Injection: Featured case study */}
      <FeaturedCaseStudy />

      {/* LogoLoop: Client logos after proof section */}
      <div className="py-8 md:py-12">
  {/* LogoLoop Headline */}
  <div className="text-center mb-4">
    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Systems that succeeded</h2>
    <p className="text-base md:text-lg text-cg-muted max-w-xl mx-auto">I’m not hiding bad case studies—there are none!</p>
  </div>

  <LogoLoop logos={caseStudyLogos} speed={120} gap={40} logoHeight={40} />
      </div>

      {/* F — How We Work: 3-step process */}
      <HowWeWork />

      {/* G — Differentiation: Comparison table */}
      <Differentiation />

      {/* FAQ — Objection handling */}
      <FAQSection />

      {/* H — Qualification + Final CTA */}
      <QualificationCTA />
    </>
  );
}
