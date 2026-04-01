"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

const HOOK_LINES = [
  "Someone in your city just searched for what you do.",
  "They found a result. They clicked it.",
  "That business\u2019s phone rang before you finished your coffee.",
  "",
  "Not because they are better at the work.",
  "Because they had a system running while you were asleep.",
  "",
  "Your competitors are not outworking you.",
  "They are out-infrastructuring you.",
];

const POINTS = [
  {
    title: "People in your city are searching. You are easy to miss.",
    body: "If you are not on Google, Maps, or AI search, that call goes elsewhere before you knew it existed.",
  },
  {
    title: "Your site is online. It is not working.",
    body: "Most local service websites exist. They do not convert. No clear offer, no call to action, no reason for a visitor to pick up the phone. Traffic without conversion is just noise.",
  },
  {
    title: "You are invisible on Google Maps and AI search.",
    body: "ChatGPT, Google AI overviews, and Maps are where buyers go first. If you are not in those results, the call goes to whoever is.",
  },
  {
    title: "Referrals keep you alive. They do not build predictability.",
    body: "Good months. Quiet months. No control. If your pipeline depends on word of mouth, you are waiting, not growing.",
  },
];

export default function TheReality() {
  return (
    <SectionWrapper id="reality" style={{ background: "#0D0B09" }}>
      <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-[11px] uppercase tracking-[0.16em] mb-5" style={{ color: "#D4A853" }}>THE REALITY</p>
      </Reveal>

      {/* Cinematic hook card */}
      <Reveal delay={0.1}>
        <div className="max-w-xl mx-auto mb-16">
          <div
            className="rounded-xl p-8 md:p-10"
            style={{
              background: "#111009",
              border: "1px solid #2A2318",
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#756D63", marginBottom: 24, letterSpacing: "0.04em" }}>
              7:12 AM · TODAY
            </p>
            <div className="space-y-3">
              {HOOK_LINES.map((line, i) =>
                line === "" ? (
                  <div key={i} style={{ height: 12 }} />
                ) : (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.0625rem",
                      color: i >= 7 ? "#F5F0E8" : "#D2C9B8",
                      fontWeight: i >= 7 ? 600 : 400,
                      lineHeight: 1.65,
                    }}
                  >
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Section headline */}
      <Reveal delay={0.15}>
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white leading-[1.12] tracking-[-0.02em] text-center max-w-2xl mx-auto mb-5">
          Your work is good. Your pipeline should not be this fragile.
        </h2>
        <p className="text-[15px] text-center max-w-lg mx-auto mb-14" style={{ color: "#A69D8D", lineHeight: 1.65 }}>
          Untracked demand. A site that does not convert. No follow-up. Most competitors do not work harder. They run a system.
        </p>
      </Reveal>

      {/* 4 points */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {POINTS.map((point, i) => (
          <Reveal key={i} delay={0.05 * i}>
            <div
              className="rounded-xl p-6"
              style={{ background: "#131009", border: "1px solid #2A2318" }}
            >
              <p className="text-[15px] font-semibold text-white mb-2 leading-snug">{point.title}</p>
              <p className="text-[14px] leading-[1.7]" style={{ color: "#A69D8D" }}>{point.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Closing tagline */}
      <Reveal delay={0.2}>
        <div className="text-center">
          <p className="text-[15px] font-semibold text-[#F5F0E8]">Serious operators build infrastructure.</p>
          <p className="text-[15px] text-[#756D63]">Everyone else waits for the phone to ring.</p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
