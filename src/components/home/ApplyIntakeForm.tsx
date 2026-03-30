"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

const REVENUE_OPTIONS = [
  "Under $5K/month",
  "$5K - $15K/month",
  "$15K - $30K/month",
  "$30K+/month",
];

const SOURCE_OPTIONS = [
  "Google search",
  "Referral",
  "Social media",
  "Saw a client result",
  "Other",
];

export default function ApplyIntakeForm() {
  const [firstName, setFirstName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [pipelineProblem, setPipelineProblem] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !businessName.trim()) return;

    setStatus("submitting");
    trackEvent("apply_form_submit");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName,
          businessName,
          businessWebsite: websiteUrl,
          monthlyRevenue,
          goal: pipelineProblem,
          leadSource: source,
          email: "",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("form_submit");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl px-4 py-3.5 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all";
  const inputStyle = {
    background: "#181410",
    border: "1px solid #2A2318",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#D4A853";
    e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#2A2318";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="book-call"
      className="py-12 md:py-16"
      style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}
    >
      <div className="mx-auto max-w-[540px] px-6">
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
              style={{
                background: "rgba(212,168,83,0.12)",
                color: "#D4A853",
                fontSize: "1.5rem",
              }}
            >
              &#10003;
            </span>
            <p className="text-lg font-semibold text-white mb-2">
              Application received.
            </p>
            <p className="text-sm" style={{ color: "#A69D8D" }}>
              I review every application personally. Response within 24 hours.
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
            {/* First name */}
            <div>
              <label
                htmlFor="apply-first-name"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                First name <span style={{ color: "#D4A853" }}>*</span>
              </label>
              <input
                id="apply-first-name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className={inputBase}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Business name */}
            <div>
              <label
                htmlFor="apply-business-name"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Business name <span style={{ color: "#D4A853" }}>*</span>
              </label>
              <input
                id="apply-business-name"
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your business name"
                className={inputBase}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Website URL */}
            <div>
              <label
                htmlFor="apply-website"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Website URL
              </label>
              <input
                id="apply-website"
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="yourbusiness.com (if you have one)"
                className={inputBase}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Monthly revenue */}
            <div>
              <label
                htmlFor="apply-revenue"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Monthly revenue (approximate)
              </label>
              <select
                id="apply-revenue"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(e.target.value)}
                className={`${inputBase} appearance-none`}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Select a range</option>
                {REVENUE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Biggest pipeline problem */}
            <div>
              <label
                htmlFor="apply-problem"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Biggest pipeline problem
              </label>
              <textarea
                id="apply-problem"
                value={pipelineProblem}
                onChange={(e) => setPipelineProblem(e.target.value)}
                placeholder="What is the biggest gap in your pipeline right now?"
                rows={3}
                className="w-full rounded-xl px-4 py-3.5 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all resize-none"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* How did you find me */}
            <div>
              <label
                htmlFor="apply-source"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                How did you find me
              </label>
              <select
                id="apply-source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className={`${inputBase} appearance-none`}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Select an option</option>
                {SOURCE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting" || !firstName.trim() || !businessName.trim()}
              className="w-full rounded-xl px-6 py-4 text-base font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "#D4A853",
                color: "#0D0B09",
                minHeight: 52,
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
                  <span className="inline-block w-4 h-4 border-2 border-[#0D0B09] border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Send my application"
              )}
            </button>

            {/* Microcopy below button */}
            <p
              className="text-center text-[12px] leading-[1.7]"
              style={{ color: "#756D63" }}
            >
              I review every application personally. Response within 24 hours.
              No retainer until I confirm fit. If I cannot produce a return for
              your business, I tell you on the call before you pay anything.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
