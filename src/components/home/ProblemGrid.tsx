"use client";

import { Search, Globe, RefreshCw } from "lucide-react";

const PROBLEMS = [
  {
    icon: Search,
    headline: "You are not getting found first.",
    description: "Google, Maps, AI search. If you are not in those results, the call goes to whoever is.",
  },
  {
    icon: Globe,
    headline: "Your website is not converting.",
    description: "Traffic without conversion is wasted money. No clear offer, no call to action, no reason to pick up the phone.",
  },
  {
    icon: RefreshCw,
    headline: "Your pipeline depends on referrals.",
    description: "Good months. Quiet months. No control. Referrals keep you alive. They do not build predictability.",
  },
];

export default function ProblemGrid() {
  return (
    <section id="reality" className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      {/* Header */}
      <div className="text-center px-6">
        <span
          className="inline-block mb-5"
          style={{
            background: "rgba(212,168,83,0.1)",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: 20,
            border: "1px solid rgba(212,168,83,0.15)",
          }}
        >
          THE PROBLEM
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#F0EAD6",
            lineHeight: 1.1,
            marginTop: 20,
          }}
        >
          You are losing money every single day.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(18px, 3vw, 24px)",
            color: "#ffffff",
            fontStyle: "italic",
            marginTop: 8,
          }}
        >
          and you do not even see it yet.
        </p>
      </div>

      {/* Grid */}
      <div className="problem-grid">
        {PROBLEMS.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.headline} className="problem-card">
              <div className="problem-icon">
                <Icon size={24} stroke="#D4A853" strokeWidth={2} fill="none" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#F0EAD6",
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                {p.headline}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  color: "rgba(240,234,214,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Closing line */}
      <p
        className="text-center px-6"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 15,
          color: "rgba(240,234,214,0.55)",
          marginTop: 40,
        }}
      >
        Serious operators build <span style={{ color: "#D4A853" }}>infrastructure</span>. Everyone else waits for the phone to ring.
      </p>
    </section>
  );
}
