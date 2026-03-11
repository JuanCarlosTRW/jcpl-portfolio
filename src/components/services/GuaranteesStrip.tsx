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
            minHeight: "400px",
          }}
        >
          {/* Orb */}
          <div
            className="absolute left-1/2 bottom-[20%] -translate-x-1/2 w-[300px] h-[200px] rounded-full pointer-events-none z-0 max-md:w-[180px] max-md:h-[120px]"
            style={{
              background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            aria-hidden
          />
          <div className="relative z-10 flex flex-col justify-between h-full gap-10">
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
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#D2C9B8" }}
              >
                All results are from live client accounts. No projections. No hypotheticals.
              </p>
            </div>
            <div>
              <p
                className="text-5xl font-bold leading-none"
                style={{ color: "#F5F0E8" }}
              >
                $41,085
              </p>
              <p
                className="text-xs mt-2"
                style={{ color: "#756D63" }}
              >
                Most recent verifiable result. 30 days.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Three partnership standards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              Milestone Delivery
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
              Phase 1: market analysis and 90-day roadmap. Phase 2: live site, campaigns, and booking system. You approve before each phase starts.
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
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              Asset Ownership
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
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
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              Pre-Engagement Review
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
              I review your market and operation before any agreement. If I can't produce a return, I tell you directly. I've turned clients down before.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
