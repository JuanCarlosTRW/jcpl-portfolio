"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import TechPanel from "@/components/hero/TechPanel";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection"));
const SystemSection = dynamic(() => import("@/components/home/SystemSection"));
// const LogosSection = dynamic(() => import("@/components/home/LogosSection"));
const ResultsSection = dynamic(() => import("@/components/home/ResultsSection"));
const WhySection = dynamic(() => import("@/components/home/WhySection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function HomePage() {
  const [laserLanded, setLaserLanded] = useState(false);

  return (
    <>
  <Hero />
  {/* <TechPanel laserLanded={laserLanded} /> */}
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
