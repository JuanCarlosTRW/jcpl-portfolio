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
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-32 pb-16 bg-[#09090b] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-end items-stretch">
        <div className="hidden lg:block w-[48vw] max-w-[700px] h-full relative">
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
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
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
          <h1 className="text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white max-w-[700px] mb-5">
            Growth Infrastructure Behind More Qualified Calls
          </h1>
          {/* Proof line */}
          <div className="text-[1.18rem] font-semibold text-emerald-300 mb-5 tracking-tight leading-snug" style={{letterSpacing: '-0.01em'}}>
            <span className="block opacity-90">$41,085 generated from $900 in ad spend</span>
            <span className="block text-zinc-400 font-normal text-[1.05rem] mt-0.5">within 30 days.</span>
          </div>
          {/* CTA cluster */}
          <div className="flex flex-col items-start gap-2 mb-7">
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-lg shadow-lg transition-colors duration-200 border border-emerald-800"
              style={{ minWidth: 260, fontWeight: 600, fontSize: '1.13rem', letterSpacing: '-0.01em' }}
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
      <div className="relative z-10 max-w-[1200px] mx-auto w-full mt-10 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center lg:text-left">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              $<AnimatedNumber target={32} />
            </div>
            <p className="mt-1.5 text-sm text-zinc-500 leading-snug">Avg cost per qualified call</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={4} />
            </div>
            <p className="mt-1.5 text-sm text-zinc-500 leading-snug">Active client systems</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={10} /> days
            </div>
            <p className="mt-1.5 text-sm text-zinc-500 leading-snug">Median to first booked call</p>
          </div>
        </div>
        {/* Client logos row */}
        <div className="mt-7 flex items-center gap-3 justify-center lg:justify-start">
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
