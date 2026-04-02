import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const AcquisitionSlider = dynamic(() => import("@/components/home/AcquisitionSlider"));
const DifferentiationSection = dynamic(() => import("@/components/home/DifferentiationSection"));
const ProofStrip = dynamic(() => import("@/components/home/ProofStrip"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const ProblemGrid = dynamic(() => import("@/components/home/ProblemGrid"));
const WhatIBuildSlider = dynamic(() => import("@/components/home/WhatIBuildSlider"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));
const StickyMobileCTA = dynamic(() => import("@/components/home/StickyMobileCTA"));

function SectionDivider() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(212, 168, 83, 0.08)",
        width: "100%",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. The Acquisition System (Apple slider — 3 cards) */}
      <AcquisitionSlider />

      <SectionDivider />

      {/* 3. Why This Is Different */}
      <DifferentiationSection />

      <SectionDivider />

      {/* 4. Proof Strip */}
      <ProofStrip />

      {/* 5. Testimonials */}
      <TestimonialBlock />

      <SectionDivider />

      {/* 4. The Problem — 6-card grid */}
      <ProblemGrid />

      <SectionDivider />

      {/* 5. What I Build (Apple slider — 6 cards) */}
      <WhatIBuildSlider />

      <SectionDivider />

      {/* 6. Pricing */}
      <PricingStatement />

      <SectionDivider />

      {/* 7. FAQ */}
      <FAQ />

      <SectionDivider />

      {/* 8. Who This Is For */}
      <QualificationCTA />

      <SectionDivider />

      {/* 9. Diagnostic form */}
      <DiagnosticForm />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
