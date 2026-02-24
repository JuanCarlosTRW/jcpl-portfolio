"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { formSteps } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";

type FormData = Record<string, string>;
type FormStatus = "idle" | "submitting" | "error";

export default function ApplyForm({ initialTier = "" }: { initialTier?: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(
    initialTier ? { serviceTier: initialTier } : {}
  );
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
    <SectionWrapper className="pt-32 md:pt-40">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel label="Apply" className="mb-6" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          I Run 3 Partnerships at a Time.
        </h1>
        <p className="text-lg text-[var(--text-3)] mb-8">
          Short application. If I think I can help, you will get a call link within 24 hours. If not, I will tell you directly.
        </p>
        <CTAButton
          href="/apply"
          size="lg"
          eventName="hero_cta_click"
          className="mx-auto"
        >
          Apply for Growth Partnership →
        </CTAButton>
      </div>
    </SectionWrapper>
  );
}
