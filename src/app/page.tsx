import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import FounderBlock from "@/components/home/FounderBlock";
import PricingStatement from "@/components/home/PricingStatement";
import DiagnosticSteps from "@/components/home/DiagnosticSteps";

/* Dynamic imports for below-the-fold sections */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const ROICalculator = dynamic(() => import("@/components/home/ROICalculator"));
const ComparisonSection = dynamic(() => import("@/components/home/ComparisonSection"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const BenefitsRail = dynamic(() => import("@/components/sections/BenefitsRail"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"));

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client proof cards */}
      <SocialProofBar />

      {/* 3. The Reality */}
      <ClientReality />

      {/* 3b. ROI Calculator */}
      <ROICalculator />

      {/* 4. The Difference */}
      <ComparisonSection />

      {/* 5. Founder block */}
      <FounderBlock />

      {/* 6. Proof */}
      <FeaturedCaseStudy />

      {/* 7. Services (icons) */}
      <ServicesSection />

      {/* 8. The Diagnostic */}
      <DiagnosticSteps />

      {/* 9. Pricing */}
      <PricingStatement />

      {/* 10. System Benefits */}
      <BenefitsRail />

      {/* 11. Who This Is For */}
      <QualificationCTA />

      {/* 12. FAQ + Booking */}
      <FAQ />
      <CalendarSection />
    </>
  );
}
