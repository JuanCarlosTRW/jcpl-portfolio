"use client";

import { useEffect } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { trackEvent } from "@/lib/analytics";

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent("thank_you_view");
  }, []);

  return (
    <SectionWrapper className="pt-32 md:pt-40">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 mb-8">
          <span className="text-4xl" aria-hidden="true">✓</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Application Received!
        </h1>

        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
          Thanks for applying. I review every application personally and
          will respond within <strong className="text-white">24 hours</strong>.
        </p>

        {/* Next steps */}
        <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 md:p-10 mb-10 text-left">
          <h2 className="text-lg font-bold text-white mb-6">What Happens Next</h2>
          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Application Review",
                desc: "I'll review your answers to understand your business and goals.",
              },
              {
                step: "2",
                title: "Fit Assessment",
                desc: "If we're a match, I'll send you a link to book a free strategy call.",
              },
              {
                step: "3",
                title: "Strategy Call",
                desc: "We'll map out your Presence-to-Pipeline System™ together — no obligation.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <CTAButton href="/case-studies" variant="secondary" size="lg">
            See Case Studies While You Wait
          </CTAButton>
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Didn&apos;t mean to submit? No worries — just reply to the email you&apos;ll receive.
        </p>
      </div>
    </SectionWrapper>
  );
}
