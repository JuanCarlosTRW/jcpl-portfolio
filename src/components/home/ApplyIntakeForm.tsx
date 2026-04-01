"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ApplyIntakeForm() {
  const [firstName, setFirstName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [growthChallenge, setGrowthChallenge] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !businessName.trim() || !email.trim()) return;

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
          email,
          goal: growthChallenge,
          monthlyRevenue: "",
          leadSource: "",
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
      id="apply-form"
      className="py-12 md:py-16"
      style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}
    >
      <div className="mx-auto max-w-[540px] px-6">
        {status === "success" ? (
          <div
            className="rounded-xl p-8"
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
            <h2 className="text-xl font-bold text-white mb-4">
              Application received.
            </h2>
            <p className="text-[14px] leading-[1.75] mb-0" style={{ color: "#D2C9B8" }}>
              I will review your business within 24 hours and email you directly. What I am looking at: your market, your competitors, what you are currently running, and whether I can produce a measurable return for you. If the answer is yes, my email will include exactly what that looks like. Check your inbox, including spam, within one business day.
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
            {/* Your name */}
            <div>
              <label
                htmlFor="apply-first-name"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Your name <span style={{ color: "#D4A853" }}>*</span>
              </label>
              <input
                id="apply-first-name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your name"
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
                Website URL <span className="text-[#756D63]">(optional)</span>
              </label>
              <input
                id="apply-website"
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="yourbusiness.com"
                className={inputBase}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="apply-email"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                Email <span style={{ color: "#D4A853" }}>*</span>
              </label>
              <input
                id="apply-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourbusiness.com"
                className={inputBase}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Growth challenge */}
            <div>
              <label
                htmlFor="apply-challenge"
                className="block text-[13px] font-medium text-[#A69D8D] mb-2"
              >
                What is your biggest growth challenge right now?
              </label>
              <textarea
                id="apply-challenge"
                value={growthChallenge}
                onChange={(e) => setGrowthChallenge(e.target.value)}
                placeholder="Tell me what is not working"
                rows={3}
                className="w-full rounded-xl px-4 py-3.5 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all resize-none"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting" || !firstName.trim() || !businessName.trim() || !email.trim()}
              className="w-full rounded-xl px-6 py-4 text-[14px] font-bold uppercase tracking-[0.06em] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "#D4A853",
                color: "#0D0B09",
                minHeight: 52,
                borderRadius: 6,
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
                <>Apply for a Diagnostic Call &rarr;</>
              )}
            </button>

            {/* Microcopy below button */}
            <p
              className="text-center text-[12px] leading-[1.7]"
              style={{ color: "#756D63" }}
            >
              Response within 24 hours. No retainer until I confirm fit.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
