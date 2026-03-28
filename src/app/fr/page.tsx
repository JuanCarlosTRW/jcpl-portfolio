import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import FounderBlock from "@/components/home/FounderBlock";
import PricingStatement from "@/components/home/PricingStatement";

const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const ROICalculator = dynamic(() => import("@/components/home/ROICalculator"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const TestimonialBlock = dynamic(() => import("@/components/home/TestimonialBlock"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const DiagnosticForm = dynamic(() => import("@/components/home/DiagnosticForm"));

export const metadata: Metadata = {
  title: "Client Growth | Appels qualifiés prévisibles pour entreprises de services",
  description:
    "Infrastructure de croissance pour les entreprises de services locales. Google Ads, SEO local et sites de conversion. Un système, un opérateur, zéro intermédiaire.",
  alternates: {
    canonical: "https://clientgrowth.ca/fr",
    languages: {
      "en": "https://clientgrowth.ca/",
      "fr": "https://clientgrowth.ca/fr",
      "x-default": "https://clientgrowth.ca/",
    },
  },
};

export default function FrHomePage() {
  return (
    <>
      <HeroSection />
      <ClientReality />
      <FeaturedCaseStudy />
      <ROICalculator />
      <ServicesSection />
      <FounderBlock />
      <TestimonialBlock />
      <PricingStatement />
      <QualificationCTA />
      <FAQ />
      <DiagnosticForm />
    </>
  );
}
