"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formSteps, isQualifiedLead } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

type FormData = Record<string, string>;
type FormStatus = "idle" | "submitting" | "qualified" | "nurture";

export default function ApplyForm() {
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
      trackEvent("form_start");
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

  function handleSubmit() {
    setStatus("submitting");
    trackEvent("form_submit");

    // Simulate processing
    setTimeout(() => {
      const qualified = isQualifiedLead(formData);
      if (qualified) {
        trackEvent("lead_qualified_true");
        setStatus("qualified");
      } else {
        trackEvent("lead_qualified_false");
        setStatus("nurture");
      }
    }, 1500);
  }

  return (
    <SectionWrapper className="pt-32 md:pt-40">
      <div className="max-w-2xl mx-auto">
        <SectionLabel label="Apply" className="mb-6" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Let&apos;s Build Your{" "}
          <span className="gradient-text">Growth System</span>
        </h1>
        <p className="text-lg text-[var(--text-3)] mb-12">
          Answer a few quick questions so I can understand your business and
          goals. If we&apos;re a fit, you&apos;ll be able to book a strategy
          call right away.
        </p>

        {/* Progress bar */}
        {status === "idle" && (
          <div className="mb-10">
            <div className="flex justify-between text-xs text-[var(--text-3)] mb-2">
              <span>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 w-full rounded-full bg-white/5">
              <motion.div
                className="h-1 rounded-full bg-[var(--emerald)]"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
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
                      <span className="text-[var(--emerald)] ml-1">*</span>
                    )}
                  </label>

                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        updateField(field.name, e.target.value)
                      }
                      className="w-full rounded-xl bg-[var(--bg-surface)] border border-[var(--border-soft)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)]/30 focus:outline-none transition-all appearance-none"
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
                      className="w-full rounded-xl bg-[var(--bg-surface)] border border-[var(--border-soft)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)]/30 focus:outline-none transition-all"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
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
                  className="flex-1 rounded-xl bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold text-[var(--bg-base)] transition-all hover:bg-[var(--brand-strong)] hover:scale-[1.02]"
                  style={{ boxShadow: 'var(--glow-accent)' }}
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

          {status === "qualified" && (
            <motion.div
              key="qualified"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-10 md:p-14">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Great News — You&apos;re a Fit!
                </h2>
                <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                  Based on your answers, I believe we can build something
                  powerful together. Book a free strategy call below to get
                  started.
                </p>

                {/* Calendly embed placeholder */}
                <div className="rounded-xl bg-white/[0.02] border border-[var(--brand-accent)]/20 p-8 mb-6">
                  <p className="text-[var(--text-muted)] text-sm mb-4">
                    Calendly Embed Placeholder
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-[var(--bg-base)] transition-all hover:bg-[var(--brand-strong)] hover:scale-[1.02]"
                    style={{ boxShadow: 'var(--glow-accent)' }}
                    onClick={() => trackEvent("calendly_view")}
                  >
                    Book Your Strategy Call →
                  </a>
                </div>

                <p className="text-xs text-[var(--text-muted)]">
                  30-minute call • No obligation • 100% free
                </p>
              </div>
            </motion.div>
          )}

          {status === "nurture" && (
            <motion.div
              key="nurture"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-10 md:p-14">
                <div className="text-5xl mb-4">📬</div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Thanks for Your Interest!
                </h2>
                <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
                  Based on your current situation, my services may not be the
                  best fit right now — but I&apos;d love to stay in touch and
                  help when the timing is right.
                </p>
                <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                  I&apos;ll send you actionable growth tips you can
                  implement today — no spam, just value.
                </p>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-[var(--border-soft)] px-6 py-3 text-sm text-[var(--brand-accent)]">
                  ✓ You&apos;re on the list — check your inbox!
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
