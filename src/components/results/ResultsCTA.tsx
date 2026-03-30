"use client";

import Link from "next/link";

export default function ResultsCTA() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "#1A1510",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>
          NEXT STEP
        </p>

        <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.15] mb-6 tracking-[-0.02em]">
          One spot is open. I will tell you if I can fill your calendar before you pay anything.
        </h2>

        <p className="text-[16px] text-[#D2C9B8] leading-[1.7] mb-8 max-w-[560px] mx-auto">
          I review your market before the call. I show you where you are losing calls and what fixing it is worth. If I cannot produce a return, I tell you on the call. Not after you have paid. Not after month three.{" "}
          <span style={{ color: "#D4A853" }}>Before.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold w-full sm:w-auto"
            style={{ background: "#D4A853", color: "#0A0F1E" }}
          >
            Book a Diagnostic Call &rarr;
          </Link>
          <Link
            href="/services"
            className="text-[13px] text-[rgba(255,255,255,0.4)] hover:text-[#D4A853] transition-colors"
          >
            How the system works &rarr;
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {[
            "\u26A1 Response within 24 hours",
            "\uD83D\uDD12 No commitment to apply",
            "Founder-led, not an agency intake",
          ].map((item, i) => (
            <span key={i} className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-2">
              {i > 0 && (
                <span
                  className="hidden sm:inline-block"
                  style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)" }}
                />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
