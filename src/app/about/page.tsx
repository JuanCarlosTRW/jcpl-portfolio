import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import Principles from "@/components/about/Principles";
import WorkTimeline from "@/components/about/WorkTimeline";
import PhilosophyBlock from "@/components/about/PhilosophyBlock";
import AdvantageCompare from "@/components/about/AdvantageCompare";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = buildMetadata({
  title: "About — Juan Carlos, Growth Partner for Service Businesses",
  description:
    "I build complete growth systems — not isolated deliverables. Learn why integrated execution beats fragmented freelancers every time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Copy + Portrait (animation untouched) ── */}
      <SectionWrapper className="pt-32 md:pt-40">
        <AboutHero />
      </SectionWrapper>

      {/* ── Credibility / Proof Strip ── */}
      <SectionWrapper className="!py-12 md:!py-16">
        <MetricsRow />
      </SectionWrapper>

      {/* ── Operating Principles (3 cards) ── */}
      <SectionWrapper className="bg-[var(--bg-surface)]/30">
        <Principles />
      </SectionWrapper>

      {/* ── Working Model Timeline ── */}
      <SectionWrapper>
        <WorkTimeline />
      </SectionWrapper>

      {/* ── Philosophy Statement ── */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <PhilosophyBlock />
      </SectionWrapper>

      {/* ── Integrated vs Fragmented ── */}
      <SectionWrapper>
        <AdvantageCompare />
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <AboutCTA />
    </>
  );
}
