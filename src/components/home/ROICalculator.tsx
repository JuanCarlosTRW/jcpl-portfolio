"use client";

import { useState } from "react";

function sliderStyle(value: number, min: number, max: number): React.CSSProperties {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, rgba(212,168,83,0.90) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
  };
}

export default function ROICalculator() {
  const [jobValue, setJobValue] = useState(1500);
  const [callsNeeded, setCallsNeeded] = useState(10);

  const costPerCall = 33;
  const monthlyCost = callsNeeded * costPerCall;
  const monthlyRevenue = callsNeeded * jobValue;
  const roi = monthlyRevenue / monthlyCost;

  return (
    <section
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-28"
      style={{ background: "#0D0B09", borderBottom: "1px solid #2A2318" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "rgba(212,168,83,0.55)" }} />
          <span
            className="uppercase font-semibold"
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "#8A7E74",
            }}
          >
            Unit Economics
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-[700] text-[#F5F0E8] tracking-tight max-w-[640px]"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.028em",
          }}
        >
          Run the Math.
        </h2>
        <p
          className="mt-3 max-w-[520px]"
          style={{
            fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
            lineHeight: 1.65,
            color: "#8A7E74",
          }}
        >
          At $33 per qualified call, this is what the economics look like with your
          numbers. Not projections. Just math.
        </p>

        {/* Grid */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Inputs ── */}
          <div className="space-y-10">

            {/* Slider 1 — Job Value */}
            <div>
              <div className="flex justify-between items-baseline mb-3.5">
                <label
                  className="leading-snug"
                  style={{ fontSize: "0.8125rem", color: "#8A7E74" }}
                >
                  Average job value
                </label>
                <span
                  className="tabular-nums font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.024em" }}
                >
                  ${jobValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={10000}
                step={100}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                style={sliderStyle(jobValue, 200, 10000)}
                className="w-full h-[3px] rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-[22px]
                  [&::-webkit-slider-thumb]:h-[22px]
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#F0EBE0]
                  [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.12)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb:active]:scale-110
                  [&::-moz-range-thumb]:w-[22px]
                  [&::-moz-range-thumb]:h-[22px]
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#F0EBE0]
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
              />
              <div
                className="flex justify-between mt-2"
                style={{ fontSize: "0.75rem", color: "#5A5248" }}
              >
                <span>$200</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Slider 2 — Calls per month */}
            <div>
              <div className="flex justify-between items-baseline mb-3.5">
                <label
                  className="leading-snug max-w-[220px]"
                  style={{ fontSize: "0.8125rem", color: "#8A7E74" }}
                >
                  Qualified calls needed per month
                </label>
                <span
                  className="tabular-nums font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "1.5rem", letterSpacing: "-0.024em" }}
                >
                  {callsNeeded}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={callsNeeded}
                onChange={(e) => setCallsNeeded(Number(e.target.value))}
                style={sliderStyle(callsNeeded, 3, 30)}
                className="w-full h-[3px] rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-[22px]
                  [&::-webkit-slider-thumb]:h-[22px]
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#F0EBE0]
                  [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.12)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb:active]:scale-110
                  [&::-moz-range-thumb]:w-[22px]
                  [&::-moz-range-thumb]:h-[22px]
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#F0EBE0]
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
              />
              <div
                className="flex justify-between mt-2"
                style={{ fontSize: "0.75rem", color: "#5A5248" }}
              >
                <span>3 calls</span>
                <span>30 calls</span>
              </div>
            </div>

            {/* Footnote */}
            <p
              className="leading-relaxed"
              style={{ fontSize: "0.75rem", color: "#4A4440" }}
            >
              Based on $33 average cost per qualified call across active client
              accounts. Q4 2025 verified.
            </p>
          </div>

          {/* ── Results Card ── */}
          <div
            className="rounded-[16px] p-8 md:p-9 flex flex-col gap-0"
            style={{
              background: "#1A1610",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.45)",
              boxShadow: "0 0 60px rgba(212,168,83,0.04)",
            }}
          >

            {/* Monthly Investment */}
            <div className="pb-7">
              <p
                className="mb-1.5 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#5A5248", fontWeight: 600 }}
              >
                Monthly Investment
              </p>
              <p
                className="tabular-nums font-semibold text-[#F5F0E8]"
                style={{ fontSize: "1.875rem", letterSpacing: "-0.024em" }}
              >
                ${monthlyCost.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#5A5248", marginTop: "0.25rem" }}>
                {callsNeeded} calls × $33 per call
              </p>
            </div>

            <div style={{ height: 1, background: "#2A2318", marginBottom: "1.75rem" }} />

            {/* Projected Revenue — emotional anchor */}
            <div className="pb-7">
              <p
                className="mb-2 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#8A7E74", fontWeight: 600 }}
              >
                Projected Monthly Revenue
              </p>
              <p
                className="tabular-nums font-[800]"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.032em",
                  lineHeight: 1,
                  color: "#D4A853",
                }}
              >
                ${monthlyRevenue.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#5A5248", marginTop: "0.5rem" }}>
                {callsNeeded} calls × ${jobValue.toLocaleString()} avg job
              </p>
            </div>

            <div style={{ height: 1, background: "#2A2318", marginBottom: "1.75rem" }} />

            {/* Return Multiple */}
            <div className="pb-8">
              <p
                className="mb-1.5 uppercase tracking-[0.14em]"
                style={{ fontSize: "0.6875rem", color: "#5A5248", fontWeight: 600 }}
              >
                Return on Lead Cost
              </p>
              <p
                className="tabular-nums font-[700] text-[#F5F0E8]"
                style={{ fontSize: "1.75rem", letterSpacing: "-0.026em" }}
              >
                {roi.toFixed(0)}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#8A7E74",
                    marginLeft: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  × return
                </span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="#book-call"
              className="block w-full text-center rounded-[0.6rem] font-semibold text-[#0D0B09]"
              style={{
                fontSize: "0.9375rem",
                padding: "0.925rem 1.5rem",
                letterSpacing: "-0.01em",
                backgroundColor: "#F0EBE0",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.09), 0 1px 0 0 rgba(212,168,83,0.12)",
                transition: "background-color 180ms ease, box-shadow 220ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EBE5D9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F0EBE0";
              }}
            >
              See If Your Business Qualifies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
