import type { Metadata } from "next";
import CaseStudiesSection from "@/components/case-studies/CaseStudiesSection";
import ResultsHero from "@/components/results/ResultsHero";

export const metadata: Metadata = {
  title: "Résultats | Registre vérifié de partenariats clients",
  description:
    "Un registre structuré de partenariats actifs. Conditions de départ, ce qui a été construit, et les résultats. Chaque chiffre lié à un compte réel.",
  alternates: {
    canonical: "https://clientgrowth.ca/fr/results",
    languages: {
      "en": "https://clientgrowth.ca/results",
      "fr": "https://clientgrowth.ca/fr/results",
      "x-default": "https://clientgrowth.ca/results",
    },
  },
};

export default function FrResultsPage() {
  return (
    <div className="bg-sv-base min-h-screen">
      <ResultsHero />
      <CaseStudiesSection />
    </div>
  );
}
