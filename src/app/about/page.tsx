import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import AboutHowIBuiltThis from "@/components/about/AboutHowIBuiltThis";
import PhilosophyBlock from "@/components/about/PhilosophyBlock";
import AboutCTA from "@/components/about/AboutCTA";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = buildMetadata({
  title: "About: Growth Partner for Service Businesses",
  description:
    "I build complete growth systems, not isolated deliverables. Learn why integrated execution beats fragmented freelancers every time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero: Copy + Portrait */}
      <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14" style={{ background: "#0D0B09" }}>
        <AboutHero />
      </SectionWrapper>

      {/* 2. Philosophy */}
      <SectionWrapper style={{ background: "#131009" }}>
        <PhilosophyBlock />
      </SectionWrapper>

      {/* 3. Why I Operate Differently (shortened) */}
      <AboutHowIBuiltThis />

      {/* 4. 3 Partnerships + Stats */}
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
