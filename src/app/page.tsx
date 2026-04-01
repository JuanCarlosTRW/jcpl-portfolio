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
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const BatonHandoff = dynamic(() => import("@/components/home/BatonHandoff"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — animation + headline + CTA + ticker */}
      <HeroSection />

      {/* 2. Proof — stats bar + featured case study */}
      <FeaturedCaseStudy />

      {/* 3. Pain — "Your phone was quiet" emotional anchor */}
      <ClientReality />

      {/* 4. The System — 3-step acquisition system */}
      <VerticalTabs />

      {/* 5. Who this is for — fit / not fit */}
      <QualificationCTA />

      {/* 6. Testimonials */}
      <TestimonialBlock />

      {/* 7. Pricing — two-tier layout */}
      <PricingStatement />

      {/* 7b. What happens next — baton handoff */}
      <BatonHandoff />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA — diagnostic form */}
      <DiagnosticForm />
    </>
  );
}
