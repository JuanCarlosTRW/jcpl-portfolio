import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const VerticalTabs = dynamic(() => import("@/components/ui/vertical-tabs"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const TheReality = dynamic(() => import("@/components/home/TheReality"));
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

      {/* 2. Acquisition System */}
      <VerticalTabs />

      <SectionDivider />

      {/* 3. Testimonials */}
      <TestimonialBlock />

      <SectionDivider />

      {/* 4. Pain section */}
      <TheReality />

      <SectionDivider />

      {/* 5. Pricing */}
      <PricingStatement />

      <SectionDivider />

      {/* 6. FAQ */}
      <FAQ />

      <SectionDivider />

      {/* 7. Who This Is For */}
      <QualificationCTA />

      <SectionDivider />

      {/* 8. Diagnostic form */}
      <DiagnosticForm />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
