import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import FounderBlock from "@/components/home/FounderBlock";
import PricingStatement from "@/components/home/PricingStatement";

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

      {/* 4. ROI Calculator */}
      <ROICalculator />

      {/* 5. Who Builds This */}
      <FounderBlock />

      {/* 7. Proof */}
      <FeaturedCaseStudy />

      {/* 8. Testimonial */}
      <TestimonialBlock />

      {/* 9. Services (compact pills) */}
      <ServicesSection />

      {/* 10. Pricing */}
      <PricingStatement />

      {/* 11. Who This Is For */}
      <QualificationCTA />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Booking (diagnostic + calendar) */}
      <CalendarSection />
    </>
  );
}
