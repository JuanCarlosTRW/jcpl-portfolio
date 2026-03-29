import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const VerticalTabs = dynamic(() => import("@/components/ui/vertical-tabs"));
const FounderBlock = dynamic(() => import("@/components/home/FounderBlock"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const ROICalculator = dynamic(() => import("@/components/home/ROICalculator"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));


export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Proof — verified results */}
      <FeaturedCaseStudy />

      {/* 3. The Reality + Pain Points */}
      <ClientReality />

      {/* 4. Acquisition system — Attract → Convert → Compound */}
      <VerticalTabs />

      {/* 5. Who Builds This */}
      <FounderBlock />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. Testimonials */}
      <TestimonialBlock />

      {/* 8. Pricing */}
      <PricingStatement />

      {/* 9. ROI Calculator */}
      <ROICalculator />

      {/* 10. Who This Is For */}
      <QualificationCTA />

      {/* 11. Final CTA + Form */}
      <DiagnosticForm />
    </>
  );
}
