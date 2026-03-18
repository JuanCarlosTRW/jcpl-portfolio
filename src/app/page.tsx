import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import FounderBlock from "@/components/home/FounderBlock";
import PricingStatement from "@/components/home/PricingStatement";
import UnicornStudioEmbed from "@/components/home/UnicornStudioEmbed";

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

/* Dynamic imports for below-the-fold sections */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const ROICalculator = dynamic(() => import("@/components/home/ROICalculator"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"));


export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Pain (8:47 AM + cards) */}
      <ClientReality />

      {/* 3. Proof — surfaces earlier for stronger trust */}
      <FeaturedCaseStudy />

      {/* 4. ROI Calculator — immediately after proof, numbers still fresh */}
      <ROICalculator />

      {/* 5. Services — explains HOW the proof was achieved */}
      <ServicesSection />

      {/* 6. Who Builds This */}
      <FounderBlock />

      {/* 7. Testimonial */}
      <TestimonialBlock />

      {/* 8. Pricing */}
      <PricingStatement />

      {/* 9. Who This Is For */}
      <QualificationCTA />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Booking (diagnostic + calendar) */}
      <CalendarSection />
      {/* Unicorn Studio WebGL Embed */}
      <UnicornStudioEmbed />
    </>
  );
}
