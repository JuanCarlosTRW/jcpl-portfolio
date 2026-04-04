"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function DiagnosticForm() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.diagnosticForm;
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
    "w-full rounded-md px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#6B6358] focus:outline-none transition-all";
  const inputStyle = {
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(212, 168, 83, 0.2)",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#D4A853";
    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(212, 168, 83, 0.1)";
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
            {t.sectionLabel}
          </p>

          {/* Headline */}
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold leading-tight text-white mb-3"
          >
            {t.heading}
          </h2>

          {/* Subtext */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "#A69D8D", maxWidth: 540 }}
          >
            {t.body}
          </p>

          {/* Deliverable clarity block */}
          <div className="mb-8">
            <p
              className="text-[15px] font-semibold text-white mb-4"
            >
              {t.deliverablesTitle}
            </p>
            <ol className="space-y-2.5 mb-4 list-none p-0 m-0">
              {[t.deliverable1, t.deliverable2, t.deliverable3, t.deliverable4, t.deliverable5].map((d, i) => (
                <li key={i} className="flex items-start gap-3"><span className="flex-shrink-0 mt-0.5 text-[13px] font-bold" style={{ color: "#D4A853" }}>{i + 1}.</span><span className="text-[14px] leading-[1.6]" style={{ color: "#D2C9B8" }}>{d}</span></li>
              ))}
            </ol>
            <p className="text-[12px]" style={{ color: "#756D63" }}>
              {t.deliverablesNote}
            </p>
          </div>

          {/* Three steps */}
          <style>{`@media (max-width: 767px) { .diagnostic-steps-row { grid-template-columns: 1fr !important; gap: 20px !important; } }`}</style>
          <div
            className="diagnostic-steps-row mb-8"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              padding: "24px 0",
              borderTop: "1px solid rgba(212, 168, 83, 0.1)",
              borderBottom: "1px solid rgba(212, 168, 83, 0.1)",
            }}
          >
            {[
              { num: "1", title: t.step1Title, desc: t.step1Desc },
              { num: "2", title: t.step2Title, desc: t.step2Desc },
              { num: "3", title: t.step3Title, desc: t.step3Desc },
            ].map((step) => (
              <div key={step.num}>
                <span style={{ color: "#D4A853", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "24px", fontWeight: 400, letterSpacing: "-0.02em" }}>{step.num}</span>
                <h4 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "15px", color: "#F0EAD6", margin: "8px 0 4px", fontWeight: 600 }}>{step.title}</h4>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "13px", color: "rgba(240,234,214,0.5)", margin: 0 }}>{step.desc}</p>
              </div>
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
                {t.successTitle}
              </p>
              <p className="text-sm" style={{ color: "#A69D8D" }}>
                {t.successBody}
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
                {t.errorTitle}
              </p>
              <p className="text-sm mb-4" style={{ color: "#A69D8D" }}>
                {t.errorBody}{" "}
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
                {t.tryAgain}
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
                  placeholder={t.placeholderName}
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
                  placeholder={t.placeholderBusiness}
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
                  placeholder={t.placeholderWebsite}
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
                  placeholder={t.placeholderEmail}
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
                    {t.submittingText}
                  </span>
                ) : (
                  t.submitText
                )}
              </button>

              {/* Microcopy */}
              <p
                className="text-center text-xs"
                style={{ color: "#756D63", lineHeight: 1.6 }}
              >
                {t.microcopy}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
