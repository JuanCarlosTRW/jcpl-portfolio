"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection"));
const SystemSection = dynamic(() => import("@/components/home/SystemSection"));
// const LogosSection = dynamic(() => import("@/components/home/LogosSection"));
const ResultsSection = dynamic(() => import("@/components/home/ResultsSection"));
const WhySection = dynamic(() => import("@/components/home/WhySection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SystemSection />
      {/* <LogosSection /> */}
      <ResultsSection />
      <WhySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
