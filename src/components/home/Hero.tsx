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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Prism
        height={3.5}
        baseWidth={5.5}
        animationType="rotate"
        glow={1}
        offset={{ x: 0, y: 0 }}
        noise={0.5}
        transparent={true}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        hoverStrength={2}
        inertia={0.05}
        bloom={1}
        suspendWhenOffscreen={false}
        timeScale={0.5}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />
            <span className="text-sm text-[var(--text-muted)]">Building growth systems for</span>
            <RotatingText 
              items={hero.rotatingNiches} 
              className="text-sm font-semibold"
            />
          </div>
        </Reveal>

        <BlurText
          text={hero.headline}
          delay={200}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        />

        <Reveal delay={0.6} className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
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
            style={{ boxShadow: 'var(--glow-accent)' }}
          >
            {ctaCopy.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white/5 px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--brand-accent)]/40 hover:bg-white/10"
          >
            See Results
          </Link>
        </Reveal>

        <Reveal delay={1.2} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={20000} prefix="$" suffix="K+" />
            </span>
            <span>generated for clients</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={3} suffix="+" />
            </span>
            <span>active growth systems</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={30} prefix="<" />
            </span>
            <span>days to first leads</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />
    </section>
  );
}
