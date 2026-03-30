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
      {/* 1. Nav is rendered in ClientAppShell */}
      {/* 2. Trust ticker + 3. Hero + 4. Results ticker */}
      <HeroSection />

      {/* 5. Proven Outcomes */}
      <FeaturedCaseStudy />

      {/* 6. Pain Points */}
      <ClientReality />

      {/* 7. The Acquisition System */}
      <VerticalTabs />

      {/* 8. Who Runs The System */}
      <FounderBlock />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. Testimonials */}
      <TestimonialBlock />

      {/* 11. Pricing */}
      <PricingStatement />

      {/* 12. Unit Economics Calculator */}
      <ROICalculator />

      {/* 13. Who This Is For */}
      <QualificationCTA />

      {/* 14. Final CTA — Diagnostic */}
      <DiagnosticForm />
    </>
  );
}
