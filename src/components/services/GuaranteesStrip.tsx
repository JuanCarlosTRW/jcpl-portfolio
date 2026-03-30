"use client";

import { Reveal } from "@/components/motion";

export default function GuaranteesStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
        {/* Left: Featured standard */}
        <div
          className="relative rounded-xl p-8 flex flex-col justify-between overflow-hidden"
          style={{
            background: "#1E1A14",
            border: "1px solid #2A2318",
            borderTop: "2px solid #D4A853",
            minHeight: 400,
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full gap-6">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#D4A853" }}
              >
                THE STANDARD
              </p>
              <h3
                className="text-2xl font-semibold leading-snug mb-5"
                style={{ color: "#F5F0E8" }}
              >
                Every number is real or it does not get published.
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#D2C9B8" }}>
                All results are from live client accounts. No projections. No hypotheticals.
              </p>

              {/* Micro-proof lines */}
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  "All results are from live client accounts",
                  "No projections. No hypotheticals.",
                  "I have turned clients down when I could not guarantee a return.",
                ].map((line) => (
                  <p key={line} className="text-sm flex items-start gap-2.5" style={{ color: "#A69D8D" }}>
                    <span style={{ color: "#D4A853", flexShrink: 0, marginTop: 1 }}>&middot;</span>
                    {line}
                  </p>
                ))}
              </div>

              {/* Gold divider */}
              <div className="h-px w-full mb-5" style={{ background: "rgba(212,168,83,0.2)" }} />

              {/* THE COMMITMENT */}
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                style={{ color: "#D4A853" }}
              >
                THE COMMITMENT
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "#D2C9B8" }}>
                If I cannot produce a return, I tell you before you pay anything.<br />
                Not after. Not on month three. Before.
              </p>
            </div>

            <p className="text-xs" style={{ color: "#756D63" }}>
              Verified Q1 2026. All results from live accounts.
            </p>
          </div>
        </div>

        {/* Right: Three cards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p className="text-base font-semibold mb-2" style={{ color: "#F5F0E8" }}>
              Milestone Delivery
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
              Phase 1: market analysis and 90-day roadmap. Phase 2: live site, campaigns, and booking system. You approve before each phase starts. Nothing ships without your sign-off.
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p className="text-base font-semibold mb-2" style={{ color: "#F5F0E8" }}>
              Asset Ownership
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
              Website, ad accounts, and tracking are yours. Month-to-month after build. Leave with everything.
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p className="text-base font-semibold mb-2" style={{ color: "#F5F0E8" }}>
              Pre-Engagement Review
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
              I review your market before any agreement. If I cannot produce a return, I tell you directly on the review call. Before you pay anything. I have turned clients down before.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
