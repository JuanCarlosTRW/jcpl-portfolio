"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target, prefix = "", suffix = "", duration = 2000 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 bg-[#09090b] overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Subtle emerald glow for animation area */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
        {/* Left: Content */}
        <div className="flex-1 min-w-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-emerald-500/60" />
            <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
              Growth Infrastructure for Service Businesses
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white max-w-[1000px]">
            <span className="text-zinc-400">$900 in ads.</span>
            <br />
            $41,085 in revenue.
            <br />
            <span className="text-zinc-400">30 days.</span>
          </h1>
          {/* Subhead */}
          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-[680px] leading-relaxed">
            I build the conversion site, run Google Ads to ready-to-hire buyers,
            and deploy AI that qualifies leads before your phone rings. One system.
            One person. Fully tracked.
          </p>
          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-zinc-900 font-medium rounded-lg text-sm hover:bg-zinc-100 transition-colors duration-200"
            >
              Book a 20-Minute Diagnostic Call
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-sm text-zinc-600">
              If I cannot move the needle, I will tell you before you pay anything.
            </span>
          </div>
        </div>
        {/* Right: Animation placeholder (desktop only) */}
        <div className="hidden lg:flex flex-1 items-center justify-center min-w-[320px] max-w-[480px] relative">
          <div className="relative w-full aspect-square max-w-[480px] flex items-center justify-center">
            {/* Placeholder for future animation */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-emerald-900/30 border border-zinc-800/60 flex items-center justify-center">
              <div className="w-2/3 h-2/3 rounded-full bg-emerald-400/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Metrics strip */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full mt-16 pt-10 border-t border-zinc-800/60">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              $<AnimatedNumber target={33} />
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Avg cost per qualified call.<br />All active accounts.
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={5} />
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Active client systems running.<br />Right now.
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={11} /> days
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Median time to first booked call.<br />Across all accounts.
            </p>
          </div>
        </div>
      </div>
      {/* Client logos */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full mt-12 flex items-center gap-3">
        <span className="text-xs text-zinc-600 uppercase tracking-widest mr-4 shrink-0">
          Active clients
        </span>
        <div className="flex -space-x-1">
          {[
            { alt: "Triple W Rentals", src: "/images/logos/triplew.png" },
            { alt: "Culture Barbershop", src: "/images/logos/culture.png" },
            { alt: "Elite Barbershop", src: "/images/logos/elite.png" },
            { alt: "Absolute Painting", src: "/images/logos/absolute.png" },
            { alt: "Centre Dentaire", src: "/images/logos/dentaire.png" },
          ].map((logo, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-zinc-900 overflow-hidden flex items-center justify-center"
              title={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} className="w-6 h-6 object-contain opacity-70" />
            </div>
          ))}
        </div>
        <span className="text-xs text-zinc-600">5 active systems</span>
      </div>
    </section>
  );
}
