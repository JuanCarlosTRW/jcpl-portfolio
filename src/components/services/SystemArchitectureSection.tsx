"use client";

import { Reveal } from "@/components/motion";

const CORE_ITEMS = [
  {
    title: "Market Analysis",
    copy: "I map your competitors before writing a line of code. Every build decision follows from what the data shows.",
  },
  {
    title: "Conversion Website",
    copy: "Hand-coded. Loads in under a second. Built to turn visitors into booked calls, not to look impressive.",
  },
  {
    title: "Local Search Visibility",
    copy: "SEO targeting buyers with intent to book in your city. Compounds from day one and gets stronger every month.",
  },
  {
    title: "Booking Flow",
    copy: "Calls and forms captured around the clock. No lead slips through while you are on a job.",
  },
  {
    title: "Revenue Tracking",
    copy: "Every call, form, and booking traced to its source. You see exactly what the system is producing each month.",
  },
  {
    title: "You Own Everything",
    copy: "Website, ad accounts, analytics, and tracking belong to your business. If you leave, you take all of it.",
  },
];

export default function SystemArchitectureSection() {
  return (
    <section
      id="system"
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
            The Core Acquisition System
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-14"
            style={{ color: "#756D63", maxWidth: 580 }}
          >
            This is not a menu. Everything below ships with every engagement as one connected system.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  borderLeft: "3px solid #D4A853",
                }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: "#F5F0E8" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
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
