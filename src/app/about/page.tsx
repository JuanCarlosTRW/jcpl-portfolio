import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import AboutProofRow from "@/components/about/AboutProofRow";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutIntegrated from "@/components/about/AboutIntegrated";
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
        <AboutProofRow />
      </SectionWrapper>

      {/* ── Operating Principles (3 cards) ── */}
      <SectionWrapper className="bg-[var(--bg-surface)]/30">
        <AboutPrinciples />
      </SectionWrapper>

      {/* ── Working Model Timeline ── */}
      <SectionWrapper>
        <AboutTimeline />
      </SectionWrapper>

      {/* ── Philosophy Statement ── */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <AboutPhilosophy />
      </SectionWrapper>

      {/* ── Integrated vs Fragmented ── */}
      <SectionWrapper>
        <AboutIntegrated />
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <AboutCTA />
    </>
  );
}
