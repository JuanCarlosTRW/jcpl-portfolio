"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

const BUSINESS_TYPES = [
  "Barbershop",
  "Dental Clinic",
  "Painting Contractor",
  "RV Rental",
  "Real Estate Agent",
  "Home Services",
  "Other",
];

const REVENUE_RANGES = [
  "Under $5,000",
  "$5,000\u2013$15,000",
  "$15,000\u2013$50,000",
  "$50,000+",
];

export default function DiagnosticForm() {
  const [businessType, setBusinessType] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    setStatus("submitting");
    trackEvent("apply_form_submit");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Diagnostic Application",
          email,
          businessType,
          monthlyRevenue,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("form_submit");
    } catch {
      setStatus("error");
    }
  }

  const selectClass =
    "w-full rounded-xl px-4 py-3 text-[#F5F0E8] text-sm appearance-none focus:outline-none transition-all";
  const selectStyle = {
    background: "#181410",
    border: "1px solid #2A2318",
  };

  return (
    <section
      id="book-call"
      className="py-20 md:py-28"
      style={{ background: "#1A1510" }}
    >
      {/* Closing headline */}
      <div className="mx-auto max-w-2xl px-4 md:px-6 text-center mb-16">
        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white mb-5"
        >
          Your Pipeline Will Not Build Itself.
        </h2>
        <p
          className="text-base leading-[1.7] mx-auto max-w-lg"
          style={{ color: "#A69D8D" }}
        >
          Apply for a diagnostic call. I review your business, your market, and
          your pipeline before the call. I show you exactly where
          you are losing calls and what fixing it is worth. If I cannot produce a
          return, I tell you on the call.{" "}
          <span style={{ color: "#D4A853" }}>Before you pay anything.</span>
        </p>
      </div>

      <div
        className="mx-auto max-w-2xl px-4 md:px-6"
      >
        <div
          className="rounded-xl"
          style={{
            background: "#111009",
            border: "1px solid #2A2010",
            borderRadius: 12,
            padding: "48px 32px",
          }}
        >
        {/* Section label */}
        <p
          className="uppercase mb-3"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
            fontWeight: 600,
          }}
        >
          THE DIAGNOSTIC
        </p>

        {/* Headline */}
        <h2
          className="text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold leading-tight text-white mb-3"
        >
          Book your diagnostic. I will tell you if I can help.
        </h2>

        {/* Subtext */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#A69D8D", maxWidth: 540 }}
        >
          This is not a discovery call. It is an actual audit. I review your
          pipeline, your competitors, and your current traffic sources. I show
          you where you are losing calls and what fixing it is worth. I tell you
          if I can help. No pitch. No pressure.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { icon: "\u26A1", text: "Response within 24h" },
            { icon: "\uD83D\uDD12", text: "100% confidential" },
            { icon: "\u2728", text: "Limited spots per quarter" },
          ].map((badge, i) => (
            <span key={badge.text} className="inline-flex items-center">
              {i > 0 && (
                <span
                  className="mx-2 hidden sm:inline-block"
                  style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)" }}
                />
              )}
              <span
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ color: "#756D63" }}
              >
                <span>{badge.icon}</span>
                {badge.text}
              </span>
            </span>
          ))}
        </div>

        {/* Form */}
        {status === "success" ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: "#1E1A14",
              border: "1px solid rgba(212,168,83,0.25)",
            }}
          >
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
              style={{ background: "rgba(212,168,83,0.12)", color: "#D4A853", fontSize: "1.5rem" }}
            >
              ✓
            </span>
            <p className="text-lg font-semibold text-white mb-2">
              Application received.
            </p>
            <p className="text-sm" style={{ color: "#A69D8D" }}>
              I&apos;ll review your market and respond within 24 hours.
            </p>
          </div>
        ) : status === "error" ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: "#1E1A14",
              border: "1px solid rgba(192,57,43,0.3)",
            }}
          >
            <p className="text-lg font-semibold text-white mb-2">
              Something went wrong.
            </p>
            <p className="text-sm mb-4" style={{ color: "#A69D8D" }}>
              Email{" "}
              <a
                href="mailto:juan@clientgrowth.ca"
                className="underline"
                style={{ color: "#D4A853" }}
              >
                juan@clientgrowth.ca
              </a>{" "}
              directly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="rounded-lg px-5 py-2 text-sm font-medium"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#F5F0E8",
                border: "1px solid #2A2318",
              }}
            >
              Try again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business type */}
            <div>
              <label
                htmlFor="diagnostic-businessType"
                className="block text-sm font-medium mb-2"
                style={{ color: "#D2C9B8" }}
              >
                Business type
              </label>
              <select
                id="diagnostic-businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className={selectClass}
                style={selectStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4A853";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#2A2318";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option value="">Select your industry</option>
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly revenue */}
            <div>
              <label
                htmlFor="diagnostic-revenue"
                className="block text-sm font-medium mb-2"
                style={{ color: "#D2C9B8" }}
              >
                Monthly revenue range
              </label>
              <select
                id="diagnostic-revenue"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(e.target.value)}
                className={selectClass}
                style={selectStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4A853";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#2A2318";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option value="">Select a range</option>
                {REVENUE_RANGES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="diagnostic-email"
                className="block text-sm font-medium mb-2"
                style={{ color: "#D2C9B8" }}
              >
                Email address <span style={{ color: "#D4A853" }}>*</span>
              </label>
              <input
                id="diagnostic-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                className="w-full rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all"
                style={selectStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4A853";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#2A2318";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting" || !isValidEmail(email)}
              className="w-full rounded-xl px-6 py-4 text-base font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "#D4A853",
                color: "#0A0F1E",
                minHeight: 56,
              }}
              onMouseOver={(e) => {
                if (status !== "submitting")
                  (e.currentTarget as HTMLButtonElement).style.filter =
                    "brightness(1.1)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.filter = "none";
              }}
            >
              {status === "submitting" ? (
                <span className="inline-flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-4 border-2 border-[#0A0F1E] border-t-transparent rounded-full animate-spin"
                  />
                  Submitting...
                </span>
              ) : (
                "Get My Diagnostic Call \u2192"
              )}
            </button>

            {/* Microcopy */}
            <p
              className="text-center text-xs"
              style={{ color: "#756D63", lineHeight: 1.6 }}
            >
              I review your market before the call. Response within 24 hours. No
              retainer until I confirm fit.
            </p>
          </form>
        )}
        </div>
      </div>
    </section>
  );
}
