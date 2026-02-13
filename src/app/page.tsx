import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection"));
const SystemSection = dynamic(() => import("@/components/home/SystemSection"));
const ResultsSection = dynamic(() => import("@/components/home/ResultsSection"));
const WhySection = dynamic(() => import("@/components/home/WhySection"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function Home() {
  return (
    <>
  <Hero />
      <ProblemSection />
      <SystemSection />
      <ResultsSection />
      <WhySection />
      <FinalCTA />
    </>
  );
}
