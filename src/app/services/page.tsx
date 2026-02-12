import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { serviceTiers, ctaCopy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Services — Growth Systems for Service Businesses",
  description:
    "Three clear service tiers to get you online, fill your calendar, and dominate your local market. Foundation, Growth, and Scale packages.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-32 md:pt-40">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <SectionLabel label="Services" className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Choose the{" "}
            <span className="gradient-text">Growth System</span>{" "}
            That Fits Your Stage
          </h1>
          <p className="mt-6 text-lg text-[#9a9ab0] max-w-2xl mx-auto">
            Whether you&apos;re building your first online presence or scaling
            an existing lead machine, there&apos;s a clear path forward.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Tiers */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={0.1 * i}>
              <div
                className={`relative gradient-border rounded-2xl bg-[#0c0c10] p-8 h-full flex flex-col transition-all duration-300 hover:bg-[#141418] ${
                  tier.featured
                    ? "ring-2 ring-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                    : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-indigo-400 font-medium">
                    {tier.tagline}
                  </p>
                </div>

                <div className="mb-6 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-[#5c5c72] mb-1">
                    Best For
                  </p>
                  <p className="text-sm text-[#9a9ab0] leading-relaxed">
                    {tier.bestFor}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {tier.deliverables.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-sm text-[#9a9ab0]">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#5c5c72]">Timeline:</span>
                    <span className="text-white font-medium">
                      {tier.timeline}
                    </span>
                  </div>
                </div>

                <div className="mb-6 rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-indigo-400 mb-1">
                    Business Impact
                  </p>
                  <p className="text-sm text-[#9a9ab0] leading-relaxed">
                    {tier.impact}
                  </p>
                </div>

                <CTAButton
                  href={ctaCopy.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  size="lg"
                  className="w-full text-center"
                >
                  {tier.cta}
                </CTAButton>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
