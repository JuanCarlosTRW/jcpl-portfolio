"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function DiagnosticForm() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
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
          name: fullName,
          email,
          businessType: businessName,
          monthlyRevenue: website,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("form_submit");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all";
  const inputStyle = {
    background: "#181410",
    border: "1px solid #2A2318",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#D4A853";
    e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#2A2318";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="book-call"
      className="py-20 md:py-28"
      style={{ background: "#1A1510" }}
    >
      <div className="mx-auto max-w-2xl px-4 md:px-6">
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

          {/* Testimonial quote */}
          <div
            className="rounded-lg p-4 mb-10"
            style={{
              background: "rgba(212,168,83,0.04)",
              borderLeft: "2px solid #D4A853",
            }}
          >
            <p
              className="text-[14px] italic leading-[1.65]"
              style={{ color: "#D2C9B8" }}
            >
              &ldquo;First call came in 9 days. We had tried two agencies before this. Nothing came close.&rdquo;
            </p>
            <p className="text-[12px] mt-2" style={{ color: "#756D63" }}>
              — Tyler W., Triple W Rentals · Texas
            </p>
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
              {/* Full name */}
              <div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Business name */}
              <div>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your business name"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Website */}
              <div>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yourwebsite.com (if you have one)"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
                  "Get My Diagnostic Call →"
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
