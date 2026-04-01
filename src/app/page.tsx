import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
  },
};

/* Dynamic imports — everything below the fold */
const StatsBar = dynamic(() => import("@/components/home/StatsBar"));
const TheReality = dynamic(() => import("@/components/home/TheReality"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const VerticalTabs = dynamic(() => import("@/components/ui/vertical-tabs"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const BatonHandoff = dynamic(() => import("@/components/home/BatonHandoff"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));
const StickyMobileCTA = dynamic(() => import("@/components/home/StickyMobileCTA"));

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats bar */}
      <StatsBar />

      {/* 3. The Reality — cinematic hook + 4 problem points */}
      <TheReality />

      {/* 4. Proven Outcomes — client cards */}
      <FeaturedCaseStudy />

      {/* 5. The Acquisition System — 3-step system */}
      <VerticalTabs />

      {/* 6. Who This Is For */}
      <QualificationCTA />

      {/* 7. Testimonials */}
      <TestimonialBlock />

      {/* 8. About — short founder block */}
      <AboutSection />

      {/* 9. Pricing — two tiers */}
      <PricingStatement />

      {/* 10. What Happens Next */}
      <BatonHandoff />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Closing CTA — diagnostic form */}
      <DiagnosticForm />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
