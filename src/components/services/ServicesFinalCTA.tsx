"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function ServicesFinalCTA() {
  const { lp, locale } = useLocale();
  const fc = translations[locale].services.finalCta;

  return (
    <section
      id="apply"
      style={{ background: "#1A1510" }}
    >
      <SectionWrapper className="relative z-10">

        {/* HOW I WORK */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <p
                className="section-label mb-4 text-center"
                style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
              >
                {fc.howLabel}
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center"
                style={{ color: "#F5F0E8" }}
              >
                {fc.howHeading}
              </h2>
              <p className="text-sm max-w-[420px] mx-auto" style={{ color: "#756D63" }}>
                {fc.howSub}
              </p>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div
            className="w-16 h-px"
            style={{ background: "rgba(212, 168, 83, 0.4)" }}
          />
        </div>

        {/* Apply CTA */}
        <div className="max-w-xl mx-auto relative text-center">
          {/* Orb */}
          <div
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[400px] rounded-full pointer-events-none z-0 max-md:w-[300px] max-md:h-[240px]"
            style={{
              background: "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <Reveal>
              <p
                className="section-label mb-4"
                style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
              >
                {fc.applyLabel}
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#F5F0E8" }}
              >
                {fc.applyHeading}
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md mx-auto"
                style={{ color: "#D2C9B8" }}
              >
                {fc.applyBody}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              {/* Proof strip */}
              <div
                className="mb-8 p-4 rounded-lg text-left max-w-md mx-auto"
                style={{
                  background: "rgba(212,168,83,0.05)",
                  border: "1px solid rgba(212,168,83,0.14)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#A69D8D" }}>
                  {fc.proofText}
                </p>
              </div>

              <Link
                href={lp("/apply")}
                className="cta-primary inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold tracking-wide"
              >
                {fc.button}
              </Link>

              <p className="text-xs text-center mt-4" style={{ color: "#756D63" }}>
                {fc.microcopy}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
