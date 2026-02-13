"use client";

import Link from "next/link";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { 
  SplitText, 
  DecryptText, 
  RotatingText, 
  CountUpValue, 
  Reveal 
} from "@/components/motion";
import Prism from "@/components/ui/Prism";
import BlurText from "@/components/ui/BlurText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[linear-gradient(180deg,#0B1411_0%,#0D1713_50%,#0A120F_100%),radial-gradient(circle_at_top_left,rgba(80,200,120,0.10),transparent),radial-gradient(circle_at_top_right,rgba(11,61,46,0.14),transparent),radial-gradient(circle_at_center,rgba(0,75,59,0.10),transparent),radial-gradient(circle,rgba(0,0,0,0.22),transparent)]">
      <Prism />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)] animate-pulse" style={{ animationDuration: '3s' }} />
            <span className="text-sm text-[var(--text-muted)]">Building growth systems for</span>
            <RotatingText 
              items={hero.rotatingNiches} 
              className="text-sm font-semibold"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </Reveal>

        <BlurText
          text={hero.headline}
          delay={200}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--text-primary)]"
          style={{ textShadow: '0 2px 18px rgba(0,0,0,0.25)' }}
        />

        <Reveal delay={0.6} className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-[720px] mx-auto leading-[1.5]">
          <DecryptText 
            text={hero.subheadline}
            delayMs={600}
            durationMs={1000}
          />
        </Reveal>

        <Reveal delay={0.9} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaCopy.href}
            onClick={() => trackEvent("hero_cta_click")}
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-[var(--bg-base)] transition-all duration-300 hover:bg-[var(--brand-strong)] hover:scale-[1.02]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          >
            {ctaCopy.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(217,230,218,0.28)] bg-[rgba(255,255,255,0.03)] px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[rgba(80,200,120,0.45)] hover:bg-[rgba(80,200,120,0.08)]"
          >
            See Results
          </Link>
        </Reveal>

        <Reveal delay={1.2} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
              <CountUpValue to={20000} prefix="$" suffix="K+" />
            </span>
            <span className="text-[rgba(217,230,218,0.78)] ml-2">generated for clients</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
              <CountUpValue to={3} suffix="+" />
            </span>
            <span className="text-[rgba(217,230,218,0.78)] ml-2">active growth systems</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
              <CountUpValue to={30} prefix="<" />
            </span>
            <span className="text-[rgba(217,230,218,0.78)] ml-2">days to first leads</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
    </section>
  );
}
