"use client";

import { useEffect, useRef, useState } from "react";
import LightPillar from "./LightPillar";

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
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-32 pb-16 overflow-hidden">
      {/* Ethereal LightPillar fills the background */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#2EE6A6"
          bottomColor="#1D4ED8"
          intensity={0.18}
          rotationSpeed={0.09}
          interactive={false}
          glowAmount={0.0018}
          pillarWidth={2.6}
          pillarHeight={0.36}
          noiseIntensity={0.09}
          mixBlendMode="screen"
          pillarRotation={-18}
          quality="medium"
        />
      </div>
      {/* Text protection overlay only behind content */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#09090b] via-[#09090bcc] to-transparent pointer-events-none" />
      <div className="relative z-20 max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
        {/* Left: Content */}
        <div className="flex-1 min-w-0 max-w-[620px] lg:pr-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-emerald-600/60" />
            <span className="text-xs tracking-[0.22em] uppercase text-zinc-500 font-semibold">
              Growth Infrastructure for Service Businesses
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white max-w-[700px] mb-4">
            Growth Infrastructure Behind More Qualified Calls
          </h1>
          {/* Proof line */}
          <div className="mb-4">
            <div className="text-[1.22rem] font-semibold text-emerald-200 tracking-tight leading-snug" style={{letterSpacing: '-0.012em', textShadow: '0 1px 8px rgba(30,255,200,0.08)'}}>
              $41,085 <span className="font-normal text-zinc-300">generated from</span> $900 <span className="font-normal text-zinc-300">in ad spend</span>
            </div>
            <div className="text-[1.05rem] text-zinc-400 font-medium mt-1 ml-0.5 tracking-tight" style={{letterSpacing: '-0.01em'}}>within 30 days.</div>
          </div>
          {/* CTA cluster */}
          <div className="flex flex-col items-start gap-1.5 mb-5">
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2 px-7 py-2.5 bg-[#12795a] hover:bg-[#0e5e47] text-white font-semibold rounded-[0.7rem] text-[1.11rem] shadow-[0_2px_16px_0_rgba(18,121,90,0.13)] transition-colors duration-200 border border-[#0e5e47] tracking-tight"
              style={{ minWidth: 260, fontWeight: 600, fontFamily: 'Inter, ui-sans-serif', letterSpacing: '-0.01em', boxShadow: '0 2px 16px 0 rgba(18,121,90,0.13)' }}
            >
              See If Your Business Qualifies
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-[0.97rem] text-zinc-400 mt-1 font-medium">
              Fast diagnosis. Clear next step. No pressure.
            </span>
          </div>
        </div>
        {/* Right: intentionally empty for spacing, pillar is background only */}
        <div className="hidden lg:block flex-1 min-w-[320px] max-w-[520px]" />
      </div>
      {/* Integrated confidence rail */}
      <div className="relative z-20 max-w-[1200px] mx-auto w-full mt-5 pt-1.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-center lg:text-left">
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">$<AnimatedNumber target={32} /></div>
            <div className="text-xs text-zinc-500 mt-1.5">Avg cost per qualified call</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight"><AnimatedNumber target={4} /></div>
            <div className="text-xs text-zinc-500 mt-1.5">Active client systems</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight"><AnimatedNumber target={10} /> days</div>
            <div className="text-xs text-zinc-500 mt-1.5">Median to first booked call</div>
          </div>
        </div>
        {/* Client logos row */}
        <div className="mt-5 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-xs text-zinc-600 uppercase tracking-widest mr-4 shrink-0">Active clients</span>
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
                className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-900 overflow-hidden flex items-center justify-center"
                title={logo.alt}
              >
                <img src={logo.src} alt={logo.alt} className="w-5 h-5 object-contain opacity-80" />
              </div>
            ))}
          </div>
          <span className="text-xs text-zinc-600 ml-3">+2 active builds</span>
        </div>
      </div>
    </section>
  );
}
