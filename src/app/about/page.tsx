import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { aboutContent, aboutTrustStrip, aboutPrinciples } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
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
      {/* Hero */}
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection direction="left">
            <SectionLabel label="About" className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {aboutContent.headline}
            </h1>
            <p className="text-lg text-[var(--brand-alt)] font-medium mb-6">
              I help service businesses build systems that generate qualified booked calls — not just pretty websites.
            </p>
            <div className="space-y-4">
              {aboutContent.story.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Fallback card instead of image placeholder */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-10 md:p-12 flex flex-col items-center justify-center text-center min-h-[320px]">
              <span className="text-6xl mb-4" aria-hidden="true">🚀</span>
              <h3 className="text-xl font-bold text-white mb-2">Growth Partner</h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-xs">
                Strategy + design + engineering + automation — one integrated partner, not five disconnected freelancers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Trust Strip */}
      <SectionWrapper className="!py-12 md:!py-16">
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {aboutTrustStrip.map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-1">
                {item.metric}
              </div>
              <p className="text-xs md:text-sm text-[var(--text-muted)]">{item.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Operating Principles */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <AnimatedSection className="max-w-3xl mx-auto">
          <SectionLabel label="Operating Principles" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            How I Work
          </h2>
          <div className="space-y-4">
            {aboutPrinciples.map((principle, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-soft)] p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-xs font-bold text-white mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <SectionLabel label="Philosophy" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {aboutContent.philosophy.headline}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {aboutContent.philosophy.body}
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Advantage */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <AnimatedSection className="max-w-3xl mx-auto">
          <SectionLabel label="The Advantage" className="mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {aboutContent.advantage.headline}
          </h2>
          <div className="space-y-6">
            {aboutContent.advantage.points.map((point, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-8">
                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                    {point}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
