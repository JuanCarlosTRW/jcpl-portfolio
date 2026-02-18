"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const StrategicGap = dynamic(() => import("@/components/home/StrategicGap"));
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

      {/* C — Strategic Gap: Truth blocks */}
      <StrategicGap />

      {/* D — The Growth Architecture: 4 pillars */}
      <GrowthArchitecture />

      {/* E — Proof Injection: Featured case study */}
      <FeaturedCaseStudy />

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
