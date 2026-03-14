import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import WorkingWithMe from "@/components/about/WorkingWithMe";
import AboutCTA from "@/components/about/AboutCTA";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = buildMetadata({
  title: "About: Growth Infrastructure & Operating Model",
  description:
    "One operator. One system. Full accountability. Why single-operator ownership produces better outcomes than fragmented agency execution — and why selectivity protects results.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero: Copy + Portrait */}
      <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14" style={{ background: "#0D0B09" }}>
        <AboutHero />
      </SectionWrapper>

      {/* 2. Working with me (first 30 days) */}
      <WorkingWithMe />

      {/* 3. Selectivity + proof */}
      <div style={{ background: "#1A1510" }}>
        <SpotsLeftSection background="#1A1510" />
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <MetricsRow />
        </div>
      </div>

      {/* 5. Final CTA */}
      <SectionWrapper style={{ background: "#0D0B09" }}>
        <AboutCTA />
      </SectionWrapper>
    </>
  );
}
