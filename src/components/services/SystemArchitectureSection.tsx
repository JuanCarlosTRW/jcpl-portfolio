"use client";

import { Reveal } from "@/components/motion";

const OUTCOMES = [
  {
    title: "Your market mapped before I write a line of code.",
    copy: "Competitors, search volume, ad costs, and buyer behavior. Every build decision follows from what the data shows, not assumptions.",
  },
  {
    title: "A site that makes them call, not just browse.",
    copy: "Hand-coded for speed and conversion. Loads under a second. Booking flow built in. Every visitor has a clear reason to pick up the phone.",
  },
  {
    title: "You own everything. Website, ads, data. If you leave, it comes with you.",
    copy: "Your ad accounts, analytics, tracking, and website belong to your business. No lock-in. No hostage assets. Full ownership from day one.",
  },
];

export default function SystemArchitectureSection() {
  return (
    <section
      id="core-system"
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#131009" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
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
            BUILT INTO EVERY PARTNERSHIP
          </p>
          <h2
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold text-white leading-[1.1] tracking-tight mb-4"
            style={{ maxWidth: 700 }}
          >
            What the system produces.
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-14"
            style={{ color: "#756D63", maxWidth: 580 }}
          >
            Not deliverables. Outcomes. Every engagement ships the same connected system.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OUTCOMES.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl flex flex-col"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  borderTop: "2px solid #D4A853",
                }}
              >
                <p
                  className="text-[16px] font-bold mb-4 leading-[1.35]"
                  style={{ color: "#F5F0E8" }}
                >
                  {item.title}
                </p>
                <p className="text-[14px] leading-[1.7] flex-1" style={{ color: "#A69D8D" }}>
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
