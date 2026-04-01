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
const ServicesGrid = dynamic(() => import("@/components/home/ServicesGrid"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const BatonHandoff = dynamic(() => import("@/components/home/BatonHandoff"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
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

      {/* 2. Stats bar */}
      <StatsBar />

      {/* 3. The Reality */}
      <TheReality />

      <SectionDivider />

      {/* 4. Proven Outcomes */}
      <FeaturedCaseStudy />

      <SectionDivider />

      {/* 5. The Acquisition System */}
      <VerticalTabs />

      <SectionDivider />

      {/* 5.5. Services */}
      <ServicesGrid />

      <SectionDivider />

      {/* 6. Who This Is For */}
      <QualificationCTA />

      <SectionDivider />

      {/* 7. Testimonials */}
      <TestimonialBlock />

      <SectionDivider />

      {/* 8. About */}
      <AboutSection />

      <SectionDivider />

      {/* 9. Pricing */}
      <PricingStatement />

      <SectionDivider />

      {/* 10. What Happens Next */}
      <BatonHandoff />

      <SectionDivider />

      {/* 11. FAQ */}
      <FAQ />

      <SectionDivider />

      {/* 12. Closing CTA — diagnostic form */}
      <DiagnosticForm />

      {/* Sticky mobile CTA bar */}
      <StickyMobileCTA />
    </>
  );
}
