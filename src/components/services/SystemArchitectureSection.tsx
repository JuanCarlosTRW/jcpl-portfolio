"use client";

import { Reveal } from "@/components/motion";

const coreIncludes = [
  {
    title: "Market Gap Report",
    copy: "Competitor exposure mapped before a line of code is written. Every build decision follows from this.",
  },
  {
    title: "Conversion Site",
    copy: "Hand-coded. Sub-second load. Built to book calls — not to look presentable.",
  },
  {
    title: "Local Search Capture",
    copy: "Local SEO targeting buyers with intent to book. Compounds from day one.",
  },
  {
    title: "Booking Flow",
    copy: "Calls and forms captured 24/7. No leads lost while you're working.",
  },
  {
    title: "Analytics Layer",
    copy: "Every call, form, and booking attributed to its source. You see exactly what the system produces.",
  },
  {
    title: "Full Asset Ownership",
    copy: "Website, ad accounts, analytics, and tracking are yours. If you leave, you take everything.",
  },
];

const expansionLayers = [
  {
    num: "01",
    label: "PAID ACQUISITION LAYER",
    title: "When organic capture alone is not enough.",
    copy: "When search alone isn't fast enough. Ads targeting active purchase intent — tracked to cost per call.",
    items: [
      "Google Ads targeting active buyers in your market",
      "Landing pages per service and city",
      "AI voice agent — no lead to voicemail",
      "Weekly optimization against cost per qualified call",
    ],
    investment: "$2,500 / month + ad spend",
    investmentDetail: "Ad spend separate. Minimum $500/month. 90-day initial term.",
  },
  {
    num: "02",
    label: "MARKET SCALE LAYER",
    title: "When the objective is structural dominance.",
    copy: "Proven demand. A competitor about to move. Multi-city architecture built to own a market, not just rank in it.",
    items: [
      "Multi-city campaign architecture",
      "Competitor displacement across search and paid",
      "Expanded SEO targeting high-value commercial terms",
      "Bi-weekly strategy calls",
    ],
    investment: "$6,000 / month + ad spend",
    investmentDetail: "Ad spend minimum $1,500/month. Two slots per niche per city.",
    scarcity: "If a competitor in your market applies first, this layer closes for your area.",
  },
];

function CoreItem({ title, copy }: { title: string; copy: string }) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{
        background: "#1E1A14",
        border: "1px solid #2A2318",
        borderLeft: "3px solid #D4A853",
      }}
    >
      <p className="text-sm font-semibold mb-2" style={{ color: "#F5F0E8" }}>
        {title}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
        {copy}
      </p>
    </div>
  );
}

export default function SystemArchitectureSection() {
  return (
    <section
      id="system"
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#131009" }}
    >
      {/* Background orb */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">

        {/* ── Section header ── */}
        <Reveal>
          <p
            className="section-label mb-5"
            style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
          >
            THE ACQUISITION ENGINE
          </p>
          <h2
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold text-white leading-[1.1] tracking-tight mb-6"
            style={{ maxWidth: "700px" }}
          >
            One System. Every Layer Connected.
          </h2>
          <p
            className="text-[17px] leading-[1.75] mb-4"
            style={{ color: "#D2C9B8", maxWidth: "600px" }}
          >
            Not a bundle of services. One acquisition infrastructure — site, search, paid, AI qualification, and optimization running as one connected machine.
          </p>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "#756D63", maxWidth: "580px" }}
          >
            The core system ships with every engagement. Expansion layers activate based on your stage.
          </p>
        </Reveal>

        {/* ── Divider ── */}
        <div className="my-14 md:my-16 h-px w-full" style={{ background: "rgba(212,168,83,0.15)" }} aria-hidden />

        {/* ── Core system ── */}
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#D4A853" }}
          >
            BUILT INTO EVERY PARTNERSHIP
          </p>
          <h3
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2"
          >
            The Core Acquisition System
          </h3>
          <p className="text-sm mb-10" style={{ color: "#756D63" }}>
            Always included. The foundation every expansion layer builds on.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {coreIncludes.map((item) => (
              <CoreItem key={item.title} title={item.title} copy={item.copy} />
            ))}
          </div>
        </Reveal>

        {/* ── Divider ── */}
        <div className="my-14 md:my-16 h-px w-full" style={{ background: "rgba(212,168,83,0.15)" }} aria-hidden />

        {/* ── Expansion layers ── */}
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#D4A853" }}
          >
            WHAT ACTIVATES BASED ON STAGE
          </p>
          <h3
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2"
          >
            Expansion Layers
          </h3>
          <p className="text-sm mb-8" style={{ color: "#756D63" }}>
            Not separate packages. The next layer of the same machine — activated when your stage calls for it.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {expansionLayers.map((layer, i) => (
            <Reveal key={layer.label} delay={i * 0.06}>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  borderTop: "2px solid #D4A853",
                }}
              >
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8">

                  {/* Left: label + title + copy */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          background: "#221D17",
                          border: "1.5px solid #D4A853",
                          color: "#D4A853",
                        }}
                      >
                        {layer.num}
                      </div>
                      <p
                        className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                        style={{ color: "#D4A853" }}
                      >
                        {layer.label}
                      </p>
                    </div>
                    <h4
                      className="text-xl font-semibold mb-3 leading-snug"
                      style={{ color: "#F5F0E8" }}
                    >
                      {layer.title}
                    </h4>
                    <p
                      className="text-[15px] leading-relaxed mb-6"
                      style={{ color: "#D2C9B8" }}
                    >
                      {layer.copy}
                    </p>

                    {/* Investment */}
                    <div
                      className="inline-flex flex-col gap-1 rounded-lg px-4 py-3"
                      style={{ background: "#131009", border: "1px solid #2A2318" }}
                    >
                      <span className="text-lg font-semibold" style={{ color: "#D4A853" }}>
                        {layer.investment}
                      </span>
                      <span className="text-xs" style={{ color: "#756D63" }}>
                        {layer.investmentDetail}
                      </span>
                    </div>
                  </div>

                  {/* Vertical divider */}
                  <div
                    className="hidden lg:block w-px self-stretch"
                    style={{ background: "#2A2318" }}
                    aria-hidden
                  />

                  {/* Right: items + scarcity */}
                  <div className="flex flex-col justify-between">
                    <ul className="space-y-3 mb-6">
                      {layer.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: "#D2C9B8" }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="shrink-0 mt-0.5"
                            aria-hidden
                          >
                            <path
                              d="M4 8.5l3 3 5-5.5"
                              stroke="#D4A853"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {layer.scarcity && (
                      <p
                        className="text-xs leading-relaxed pt-4 border-t"
                        style={{ color: "#756D63", borderColor: "#2A2318" }}
                      >
                        {layer.scarcity}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
