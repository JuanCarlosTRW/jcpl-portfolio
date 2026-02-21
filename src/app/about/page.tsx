import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import Principles from "@/components/about/Principles";
import AboutHowIBuiltThis from "@/components/about/AboutHowIBuiltThis";
import WorkTimeline from "@/components/about/WorkTimeline";
import PhilosophyBlock from "@/components/about/PhilosophyBlock";
import AdvantageCompare from "@/components/about/AdvantageCompare";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = buildMetadata({
  title: "About — Growth Partner for Service Businesses",
  description:
    "I build complete growth systems — not isolated deliverables. Learn why integrated execution beats fragmented freelancers every time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Copy + Portrait (animation untouched) ── */}
      <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14">
        return (
          <>
            {/* ── Hero: Copy + Portrait (animation untouched) ── */}
            <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14">
              <AboutHero />
            </SectionWrapper>

            {/* ── Stats Bar (NEW) — replaces MetricsRow, uses aboutTrustStrip */}
            <SectionWrapper className="!py-6 md:!py-8">
              <MetricsRow />
            </SectionWrapper>

            {/* ── How I Built This (NEW) ── */}
            <AboutHowIBuiltThis />

            {/* ── AdvantageCompare (Fragmented vs Integrated) — moved up */}
            <SectionWrapper>
              <AdvantageCompare />
            </SectionWrapper>

            {/* ── Operating Principles (3 cards) — moved below AdvantageCompare */}
            <SectionWrapper>
              <Principles />
            </SectionWrapper>

            {/* ── Divider above Final CTA ── */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent my-10 md:my-14" aria-hidden="true" />

            {/* ── Final CTA ── */}
            <AboutCTA />
          </>
        );
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <AboutCTA />
    </>
  );
}
