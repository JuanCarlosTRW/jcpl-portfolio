import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import ResultsHero from "@/components/results/ResultsHero";
import CaseStudy3DDeck from "@/components/case-studies/CaseStudy3DDeck";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Results",
    description:
      "Real growth systems built for real service businesses. See measurable results across Google Ads, web design, SEO, and AI automation.",
    path: "/results",
  }),
  alternates: {
    canonical: "https://clientgrowth.ca/results",
  },
};

export default function ResultsPage() {
  return (
    <div className="bg-sv-base min-h-screen">
      <ResultsHero />
      <CaseStudy3DDeck autoPlay />
      <CaseStudiesSection />
    </div>
  );
}
