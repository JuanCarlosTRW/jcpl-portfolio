"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";

export default function ServicesFinalCTA() {
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
                HOW I WORK
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center"
                style={{ color: "#F5F0E8" }}
              >
                What You Know Before Signing Anything.
              </h2>
              <p className="text-sm max-w-[420px] mx-auto" style={{ color: "#756D63" }}>
                The terms, the standards, and the protections are set before any retainer is signed.
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
                APPLY
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#F5F0E8" }}
              >
                I Run 3 Partnerships at a Time.
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md mx-auto"
                style={{ color: "#D2C9B8" }}
              >
                Short application. I review your market before we speak. If I can produce a return, you will get a call link within 24 hours. If not, I will tell you directly.
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
                  Last 3 partnerships: one went live in 9 days. One booked their
                  first qualified call on day 7. One generated $2,716 in month one.
                </p>
              </div>

              <Link
                href="/apply"
                className="cta-primary inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold tracking-wide"
              >
                Book a Diagnostic Call →
              </Link>

              <p className="text-xs text-center mt-4" style={{ color: "#756D63" }}>
                Response within 24 hours. No retainer until I confirm fit.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
