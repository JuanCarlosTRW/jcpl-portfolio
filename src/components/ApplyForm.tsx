"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { formSteps } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

type FormData = Record<string, string>;
type FormStatus = "idle" | "submitting" | "error";

export default function ApplyForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStarted, setFormStarted] = useState(false);

  const step = formSteps[currentStep];
  const totalSteps = formSteps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  function updateField(name: string, value: string) {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("apply_form_start");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function validateStep(): boolean {
    const newErrors: Record<string, string> = {};
    for (const field of step.fields) {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (
        field.type === "email" &&
        formData[field.name] &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.name])
      ) {
        newErrors[field.name] = "Please enter a valid email address";
      }
      if (
        field.name === "businessWebsite" &&
        formData[field.name]?.trim() &&
        !/^https?:\/\/.+\..+/.test(formData[field.name].trim())
      ) {
        newErrors[field.name] = "Please enter a valid URL (e.g. https://example.com)";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext(e: FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;

    trackEvent("form_step_complete", {
      data: { step: step.id, stepNumber: currentStep + 1 },
    });

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  }

  function handleBack() {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  }

  async function handleSubmit() {
    setStatus("submitting");
    trackEvent("apply_form_submit");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      trackEvent("form_submit");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper className="pt-12 md:pt-16">
      <div
        className="max-w-2xl mx-auto rounded-xl overflow-hidden"
        style={{
          background: "#1E1A14",
          border: "1px solid #2A2318",
        }}
      >
        {/* Gold progress bar at top */}
        {status === "idle" && (
          <div
            className="h-1 w-full"
            style={{ background: "rgba(212,168,83,0.2)" }}
          >
            <motion.div
              className="h-full rounded-r-full"
              style={{ background: "#D4A853" }}
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        )}
      <div className="p-6 md:p-8">
        <SectionLabel label="Apply" className="mb-6" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Let&apos;s Build Your{" "}
          <span className="gradient-text">Growth System</span>
        </h1>
        <p className="text-lg text-[var(--text-3)] mb-4">
          Answer a few quick questions so I can understand your business and
          goals. If it&apos;s a fit, you&apos;ll hear from me within 24 hours.
        </p>

        {/* Time + privacy + SLA strip */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-10">
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            ~2 minutes to complete
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5"><rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            100% confidential
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5"><path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/></svg>
            Response within 24 hours
          </span>
        </div>

        {/* Disqualifier note removed as requested */}

        {/* Step indicator */}
        {status === "idle" && (
          <div className="mb-10">
            <div className="flex justify-between text-xs text-[var(--text-3)] mb-2">
              <span>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.form
              key={step.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-[var(--text)] mb-6">
                {step.title}
              </h2>

              {step.fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[var(--text-3)] mb-2"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-[var(--brand-alt)] ml-1">*</span>
                    )}
                  </label>

                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        updateField(field.name, e.target.value)
                      }
                      className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-all appearance-none"
                    style={{
                      background: "#181410",
                      border: "1px solid #2A2318",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#D4A853";
                      e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#2A2318";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        updateField(field.name, e.target.value)
                      }
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-[#6B6358] focus:outline-none transition-all"
                      style={{
                        background: "#181410",
                        border: "1px solid #2A2318",
                      }}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#D4A853";
                        e.currentTarget.style.boxShadow = "0 0 0 1px #D4A853";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#2A2318";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  )}

                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-[var(--color-danger)]">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-4 pt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-xl border border-[var(--border-soft)] bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all hover:bg-white/10 hover:border-[var(--border-strong)]"
                  >
                    ← Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: "#D4A853", color: "#0A0E1A" }}
                >
                  {currentStep < totalSteps - 1
                    ? "Continue →"
                    : "Submit Application"}
                </button>
              </div>

              <p className="text-xs text-[var(--text-muted)] text-center pt-2">
                Your information is kept confidential and never shared.
              </p>
            </motion.form>
          )}

          {status === "submitting" && (
            <motion.div
              key="submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-[var(--brand-accent)] border-t-transparent mb-4" />
              <p className="text-[var(--text-secondary)]">Reviewing your application...</p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="rounded-2xl border border-red-500/20 bg-[var(--bg-surface)] p-10 md:p-14">
                <p className="text-lg font-semibold text-white mb-3">
                  Something went wrong.
                </p>
                <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
                  Your application could not be sent. Please email me directly at{" "}
                  <a
                    href="mailto:juan@clientgrowth.ca"
                    className="text-[var(--brand-accent)] underline"
                  >
                    juan@clientgrowth.ca
                  </a>{" "}
                  and I will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-xl border border-[var(--border-soft)] bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all hover:bg-white/10"
                >
                  Try again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </SectionWrapper>
  );
}
