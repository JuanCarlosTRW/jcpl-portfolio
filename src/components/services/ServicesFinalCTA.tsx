"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";

export default function ServicesFinalCTA() {
  return (
    <section id="apply" style={{ background: "#1A1510" }}>
      <SectionWrapper className="relative z-10">
        {/* HOW I WORK */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-10">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4A853",
                  marginBottom: 12,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                HOW I WORK
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center"
                style={{ color: "#F5F0E8" }}
              >
                What you know before signing anything.
              </h2>
              <p className="text-sm max-w-[480px] mx-auto" style={{ color: "#756D63" }}>
                Every protection is a buyer advantage. Set before any retainer is signed.
              </p>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Gold dot separator */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#D4A853",
              boxShadow: "0 0 8px rgba(212,168,83,0.4)",
            }}
          />
        </div>

        {/* APPLY */}
        <div className="max-w-xl mx-auto relative text-center">
          <div className="relative z-10">
            <Reveal>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4A853",
                  marginBottom: 12,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                APPLY
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#F5F0E8" }}
              >
                Ready to Build Your System?
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md mx-auto"
                style={{ color: "#D2C9B8" }}
              >
                Short application. I review your market before the call. If I can produce a return, you will get a call link within 24 hours. If not, I will tell you directly.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              {/* Proof inset */}
              <div
                className="mb-6 p-5 rounded-lg text-left max-w-md mx-auto"
                style={{
                  background: "rgba(212,168,83,0.05)",
                  border: "1px solid rgba(212,168,83,0.14)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#A69D8D" }}>
                  Recent results: one system went live in 9 days. One booked their first qualified call on day 7. One generated $2,716 in month one.
                </p>
              </div>

              {/* Price line */}
              <p className="text-sm mb-8" style={{ color: "#D2C9B8" }}>
                Full engagement starts at{" "}
                <span style={{ color: "#D4A853", fontWeight: 600 }}>$2,500/month</span>.{" "}
                No retainer until I confirm fit.
              </p>

              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide w-full sm:w-auto transition-all"
                style={{
                  background: "#D4A853",
                  color: "#0D0B09",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
              >
                Apply to be a Partner &rarr;
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
