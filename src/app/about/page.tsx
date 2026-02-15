import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { aboutContent } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
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
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {aboutContent.headline}
            </h1>
            <div className="space-y-4">
              {aboutContent.story.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Photo placeholder */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] overflow-hidden">
              <ImagePlaceholder
                label="Professional photo"
                icon="👨‍💻"
                aspect="portrait"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
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
      <SectionWrapper>
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
