import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import WorkingWithMe from "@/components/about/WorkingWithMe";
import AboutCTA from "@/components/about/AboutCTA";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = {
  title: "À propos | Juan Carlos, partenaire de croissance",
  description:
    "Un opérateur. Un système. Pleine responsabilité. Pourquoi l'opération par un seul operateur produit de meilleurs résultats que l'exécution fragmentée par une agence.",
  alternates: {
    canonical: "https://clientgrowth.ca/fr/about",
    languages: {
      "en": "https://clientgrowth.ca/about",
      "fr": "https://clientgrowth.ca/fr/about",
      "x-default": "https://clientgrowth.ca/about",
    },
  },
};

export default function FrAboutPage() {
  return (
    <>
      <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14" style={{ background: "#0D0B09" }}>
        <AboutHero />
      </SectionWrapper>
      <WorkingWithMe />
      <div style={{ background: "#1A1510" }}>
        <SpotsLeftSection background="#1A1510" />
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <MetricsRow />
        </div>
      </div>
      <SectionWrapper style={{ background: "#0D0B09" }}>
        <AboutCTA />
      </SectionWrapper>
    </>
  );
}
