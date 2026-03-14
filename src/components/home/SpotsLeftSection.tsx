"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { useTranslations } from "@/context/LocaleContext";
import { prefersReducedMotion } from "@/lib/motion";

type SpotsLeftSectionProps = { background?: string; variant?: "default" | "compact" };

export default function SpotsLeftSection({ background, variant = "default" }: SpotsLeftSectionProps) {
  const t = useTranslations();
  const microcopy = [t<string>("spots.reply24"), t<string>("spots.noContracts"), t<string>("spots.threeSpots")];
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "default" || prefersReducedMotion() || !proofRef.current) return;
    const els = proofRef.current.querySelectorAll(".proof-line");
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        els.forEach((el, i) => {
          (el as HTMLElement).style.animation = `proofFadeIn 0.4s ease forwards`;
          (el as HTMLElement).style.animationDelay = `${i * 200}ms`;
          (el as HTMLElement).style.opacity = "0";
          (el as HTMLElement).style.animationFillMode = "forwards";
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(proofRef.current);
    return () => observer.disconnect();
  }, [variant]);

  if (variant === "compact") {
    return (
      <section className="py-6 md:py-8" style={{ background: background ?? "var(--sv-base, #0D0B09)" }}>
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Image
              src="/images/juan-headshot.jpeg"
              alt="Juan, Client Growth"
              width={80}
              height={80}
              quality={80}
              sizes="80px"
              style={{
                width: 80, height: 80,
                borderRadius: "50%", objectFit: "cover",
                border: "2px solid rgba(255,255,255,0.14)",
              }}
              onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = "none"; }}
            />
            <div className="text-center sm:text-left flex-1 min-w-0">
              <h2 className="text-lg md:text-xl font-bold text-white mb-0.5">
                {t<string>("spots.compactHeading")}
              </h2>
              <p className="text-xs text-[#D2C9B8] mb-2">
                {t<string>("spots.compactSubline")}
              </p>
              <div className="text-[11px] text-[#D2C9B8]">
                {[t<string>("spots.reply24"), t<string>("spots.confidential"), t<string>("spots.noCommitment")].join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 text-center" style={{ background: background ?? "var(--sv-base, #0D0B09)" }}>
      <style>{`
        @keyframes proofFadeIn {
          to { opacity: 1; }
        }
      `}</style>
      <div className="max-w-xl mx-auto px-4">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "28px", gap: 24 }}>
          <Image
            src="/images/juan-headshot.jpeg"
            alt="Juan, Client Growth"
            width={120}
            height={120}
            quality={90}
            sizes="120px"
            style={{
              width: 120, height: 120,
              borderRadius: "50%", objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.14)",
              display: "block",
            }}
            onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = "none"; }}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t<string>("spots.heading")}
        </h2>

        <p className="text-sv-text-sub text-lg mb-5 leading-[1.7]">
          {t<string>("spots.paragraph")}
        </p>

        {/* Social proof strip */}
        <div
          ref={proofRef}
          className="rounded-[12px] px-6 py-5 mb-7 text-left"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sv-text-muted mb-4 text-center">
            {t<string>("spots.lastThree")}
          </p>
          <div className="flex flex-col gap-2.5">
            <p className="proof-line text-[15px] font-bold" style={{ color: "#D4A853", opacity: prefersReducedMotion() ? 1 : 0 }}>{t<string>("spots.proof1")}</p>
            <p className="proof-line text-[15px] font-bold" style={{ color: "#D4A853", opacity: prefersReducedMotion() ? 1 : 0 }}>{t<string>("spots.proof2")}</p>
            <p className="proof-line text-[15px] font-bold" style={{ color: "#D4A853", opacity: prefersReducedMotion() ? 1 : 0 }}>{t<string>("spots.proof3")}</p>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 mb-3"
          style={{
            fontSize: "0.9rem",
            color: "#C8A05A",
            fontWeight: 600,
          }}
        >
          <span
            className="availability-pulse-dot rounded-full inline-block"
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#22c55e",
            }}
          />
          <span>One partnership slot currently open</span>
        </div>

        <p className="text-sv-text-sub text-base mb-8 leading-[1.7] max-w-md mx-auto">
          {t<string>("spots.applyParagraph")}
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton href="/apply" size="lg">
            {t<string>("spots.applyCta")}
          </CTAButton>
          <CTAButton href="/results" variant="secondary" size="md">
            {t<string>("spots.seeResults")}
          </CTAButton>
        </div>

        {/* Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {microcopy.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs text-sv-text-sub">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-sv-primary">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3.8 6 L5.3 7.5 L8.2 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
