import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ClientLogoTicker from "@/components/home/ClientLogoTicker";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clientgrowth.ca/",
    languages: {
      "en": "https://clientgrowth.ca/",
      "fr": "https://clientgrowth.ca/fr",
      "x-default": "https://clientgrowth.ca/",
    },
  },
};

/* Dynamic imports — everything below the fold */
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const FounderBlock = dynamic(() => import("@/components/home/FounderBlock"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const PricingStatement = dynamic(() => import("@/components/home/PricingStatement"));
const ROICalculator = dynamic(() => import("@/components/home/ROICalculator"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));
const UnicornStudioEmbed = dynamic(() => import("@/components/home/UnicornStudioEmbed"));


export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client logos strip */}
      <ClientLogoTicker />

      {/* 3. Proof — verified results */}
      <FeaturedCaseStudy />

      {/* 4. Pain points (2 cards) */}
      <ClientReality />

      {/* 5. Acquisition system — Attract → Convert → Compound */}
      <ServicesSection />

      {/* 6. Who Builds This */}
      <FounderBlock />

      {/* 7. Testimonial — Mike S., Culture Barbershop */}
      <TestimonialBlock />

      {/* 8. Pricing */}
      <PricingStatement />

      {/* 9. ROI Calculator */}
      <ROICalculator />

      {/* 10. Who This Is For */}
      <QualificationCTA />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Diagnostic application form */}
      <DiagnosticForm />

      {/* Unicorn Studio WebGL Embed */}
      <UnicornStudioEmbed />
    </>
  );
}
