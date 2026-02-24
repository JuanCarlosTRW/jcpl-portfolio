"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";

const tiers = [
  { id: "foundation", label: "Foundation Architecture", desc: "Website + SEO. The base layer." },
  { id: "performance", label: "Performance Engine", desc: "Full system + Google Ads." },
  { id: "ownership", label: "Market Ownership", desc: "Multi-city. Dominate the niche." },
];

const revenueOptions = [
  "Under $5,000/month",
  "$5,000 – $10,000/month",
  "$10,000 – $25,000/month",
  "$25,000 – $50,000/month",
  "$50,000+/month",
];

export default function ServicesFinalCTA() {
  const [selectedTier, setSelectedTier] = useState("performance");

  return (
    <section
      id="apply"
      style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #070B14 100%)" }}
    >
      <SectionWrapper className="relative z-10">

        {/* HOW I WORK */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-8">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
                style={{ color: "#1E3A5F" }}
              >
                HOW I WORK
              </p>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center"
                style={{ color: "#FFFFFF" }}
              >
                What You Know Before Signing Anything.
              </h2>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div
            className="w-16 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.30), transparent)" }}
          />
        </div>

        {/* Application form */}
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#1E3A5F" }}
              >
                APPLY
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#FFFFFF" }}
              >
                I Run 3 Partnerships at a Time.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#64748B" }}
              >
                Short application. If I think I can help, you will get a call link within 24 hours. If not, I will tell you directly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form
              className="rounded-2xl p-8"
              style={{ background: "#0F1A2E", border: "1px solid rgba(59, 130, 246, 0.15)" }}
            >
              {/* Tier selection */}
              <div className="mb-7">
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                  style={{ color: "#475569" }}
                >
                  Which tier are you applying for?
                </p>
                <div className="flex flex-col gap-2">
                  {tiers.map((tier) => (
                    <label
                      key={tier.id}
                      className="flex items-start gap-3 rounded-xl px-4 py-3 cursor-pointer transition-colors"
                      style={{
                        background: selectedTier === tier.id ? "rgba(37, 99, 235, 0.12)" : "rgba(148, 163, 184, 0.04)",
                        border: selectedTier === tier.id ? "1px solid rgba(59, 130, 246, 0.35)" : "1px solid rgba(148, 163, 184, 0.10)",
                      }}
                    >
                      <input
                        type="radio"
                        name="tier"
                        value={tier.id}
                        checked={selectedTier === tier.id}
                        onChange={() => setSelectedTier(tier.id)}
                        className="mt-0.5 accent-blue-500"
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: selectedTier === tier.id ? "#FFFFFF" : "#94A3B8" }}
                        >
                          {tier.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>
                          {tier.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name + Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First and last"
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: "rgba(148, 163, 184, 0.05)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      color: "#F1F5F9",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                    Business name
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your business"
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: "rgba(148, 163, 184, 0.05)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      color: "#F1F5F9",
                    }}
                  />
                </div>
              </div>

              {/* Revenue + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                    Monthly revenue
                  </label>
                  <select
                    name="revenue"
                    defaultValue=""
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: "rgba(148, 163, 184, 0.05)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      color: "#94A3B8",
                    }}
                  >
                    <option value="" disabled>Select range</option>
                    {revenueOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@business.com"
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: "rgba(148, 163, 184, 0.05)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      color: "#F1F5F9",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                  What are you trying to solve?{" "}
                  <span style={{ color: "#334155" }}>(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Briefly describe your current situation and goal."
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none resize-none"
                  style={{
                    background: "rgba(148, 163, 184, 0.05)",
                    border: "1px solid rgba(148, 163, 184, 0.12)",
                    color: "#F1F5F9",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-150 hover:brightness-110"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #3B82F6)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(37, 99, 235, 0.35)",
                }}
              >
                Submit Application →
              </button>

              <p className="text-xs text-center mt-4" style={{ color: "#334155" }}>
                Response within 24 hours. No retainer until I confirm fit.
              </p>
            </form>
          </Reveal>
        </div>

        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
