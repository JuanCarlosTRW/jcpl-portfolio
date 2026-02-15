import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import {
  aboutContent,
  aboutTrustStrip,
  aboutPrinciples,
  aboutTimeline,
} from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarBorder from "@/components/ui/StarBorder";
import CredibilityStrip from "@/components/ui/CredibilityStrip";
import OperatingPrinciples from "@/components/ui/OperatingPrinciples";
import WorkingModelTimeline from "@/components/ui/WorkingModelTimeline";
import FounderCard from "@/components/ui/FounderCard";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "About — Juan Carlos, Growth Partner for Service Businesses",
  description:
    "I build complete growth systems — not isolated deliverables. Learn why integrated execution beats fragmented freelancers every time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection direction="left">
            <SectionLabel label="About" className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {aboutContent.headline}
            </h1>
            <div className="space-y-4">
              {aboutContent.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--text-secondary)] leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Founder card — premium fallback (replace with photo when ready) */}
          <AnimatedSection direction="right" delay={0.2}>
            <FounderCard />
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ── Credibility Strip ── */}
      <CredibilityStrip metrics={aboutTrustStrip} />

      {/* ── Operating Principles ── */}
      <OperatingPrinciples principles={aboutPrinciples} />

      {/* ── Working Model Timeline ── */}
      <SectionWrapper>
        <AnimatedSection className="max-w-3xl mx-auto">
          <SectionLabel label="Working Model" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            How We Work Together
          </h2>
          <WorkingModelTimeline timeline={aboutTimeline} />
        </AnimatedSection>
      </SectionWrapper>

      {/* ── Philosophy ── */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <StarBorder variant="accent" speed="12s" className="rounded-3xl">
            <div className="rounded-3xl bg-[var(--bg-surface)] py-12 px-8 md:py-16 md:px-12">
              <SectionLabel label="Philosophy" className="mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {aboutContent.philosophy.headline}
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                {aboutContent.philosophy.body}
              </p>
            </div>
          </StarBorder>
        </AnimatedSection>
      </SectionWrapper>

      {/* ── Advantage ── */}
      <SectionWrapper>
        <AnimatedSection className="max-w-3xl mx-auto">
          <SectionLabel label="The Advantage" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {aboutContent.advantage.headline}
          </h2>
          <div className="space-y-5">
            {aboutContent.advantage.points.map((point, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <StarBorder variant="accent" speed="10s" className="rounded-2xl">
                  <div className="rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8">
                    <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                      {point}
                    </p>
                  </div>
                </StarBorder>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <FinalCTA />
    </>
  );
}
