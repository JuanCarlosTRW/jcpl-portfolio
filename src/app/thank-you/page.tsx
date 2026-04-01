import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import ThankYouTracker from "@/components/ui/ThankYouTracker";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Application Received",
  description:
    "Your application has been received. I review every application personally and will respond within 24 hours.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <SectionWrapper className="pt-32 md:pt-40">
      <ThankYouTracker />
      <div className="max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 mb-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M10 20l7 7 13-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand-accent)]" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Application received.
        </h1>

        <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 md:p-10 mb-10 text-left">
          <p className="text-base text-[var(--text-secondary)] leading-[1.75]">
            I will review your business within 24 hours and email you directly.
            What I am looking at: your market, your competitors, what you are
            currently running, and whether I can produce a measurable return for
            you. If the answer is yes, my email will include exactly what that
            looks like. Check your inbox, including spam, within one business day.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <CTAButton href="/results" variant="secondary" size="lg">
            See Results While You Wait
          </CTAButton>
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Didn&apos;t mean to submit? No worries. Just reply to the confirmation email you&apos;ll receive.
        </p>
      </div>
    </SectionWrapper>
  );
}
