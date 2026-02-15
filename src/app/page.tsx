"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import LogoPlatform from "@/components/hero/LogoPlatform";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection"));
const SystemSection = dynamic(() => import("@/components/home/SystemSection"));
const ResultsSection = dynamic(() => import("@/components/home/ResultsSection"));
const WhySection = dynamic(() => import("@/components/home/WhySection"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function Home() {
  const [laserLanded, setLaserLanded] = useState(false);

  return (
    <>
      <Hero onLaserLand={() => setLaserLanded(true)} />
      <LogoPlatform laserLanded={laserLanded} />
      <ProblemSection />
      <SystemSection />
      <ResultsSection />
      <WhySection />
      <FinalCTA />
    </>
  );
}
