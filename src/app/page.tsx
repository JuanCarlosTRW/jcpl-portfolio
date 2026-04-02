import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const ProofStrip = dynamic(() => import("@/components/home/ProofStrip"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const ProblemGrid = dynamic(() => import("@/components/home/ProblemGrid"));
const DifferentiationSection = dynamic(() => import("@/components/home/DifferentiationSection"));
const AcquisitionSlider = dynamic(() => import("@/components/home/AcquisitionSlider"));
const WhatIBuildSlider = dynamic(() => import("@/components/home/WhatIBuildSlider"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
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

      {/* 2. Proof Strip — stats bar */}
      <ProofStrip />

      <SectionDivider />

      {/* 3. Proven Outcomes (id="outcomes") */}
      <FeaturedCaseStudy />

      <SectionDivider />

      {/* 4. The Problem (id="reality") */}
      <ProblemGrid />

      <SectionDivider />

      {/* 5. Why This Is Different (id="different") */}
      <DifferentiationSection />

      <SectionDivider />

      {/* 6. The Acquisition System (id="system") */}
      <AcquisitionSlider />

      <SectionDivider />

      {/* 7. What I Build (id="services") */}
      <WhatIBuildSlider />

      <SectionDivider />

      {/* 8. Who This Is For (id="fit") */}
      <QualificationCTA />

      <SectionDivider />

      {/* 9. Testimonials (id="testimonials") */}
      <TestimonialBlock />

      <SectionDivider />

      {/* 9.5. Who I Am (id="about") */}
      <AboutSection />

      <SectionDivider />

      {/* 10. Pricing (id="pricing") */}
      <PricingStatement />

      <SectionDivider />

      {/* 11. The Diagnostic + Form (id="book-call") */}
      <DiagnosticForm />

      <SectionDivider />

      {/* 12. FAQ (id="faq") */}
      <FAQ />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
