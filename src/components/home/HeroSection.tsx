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
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20 bg-[#09090b] overflow-hidden">
      {/* Full background LightPillar */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#2EE6A6"
          bottomColor="#1D4ED8"
          intensity={0.32}
          rotationSpeed={0.12}
          interactive={false}
          glowAmount={0.0025}
          pillarWidth={2.2}
          pillarHeight={0.32}
          noiseIntensity={0.12}
          mixBlendMode="screen"
          pillarRotation={-18}
          quality="medium"
        />
      </div>
      {/* Text protection overlay */}
      <div className="absolute inset-0 bg-[#09090b]/90 z-10" />
      <div className="relative z-20 max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0">
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
          <h1 className="text-[clamp(2.6rem,5vw,4.8rem)] font-bold leading-[1.07] tracking-[-0.03em] text-white max-w-[900px] mb-4">
            Growth Infrastructure Behind More Qualified Calls
          </h1>
          {/* Proof line */}
          <div className="text-lg font-medium text-emerald-400 mb-7">
            $41,085 generated from $900 in ad spend — within 30 days.
          </div>
          {/* CTA cluster */}
          <div className="flex flex-col items-start gap-3 mb-10">
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 text-white font-semibold rounded-lg text-lg shadow-lg hover:bg-emerald-400 transition-colors duration-200"
              style={{ minWidth: 260 }}
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
            <span className="text-sm text-zinc-400 mt-1">
              Fast diagnosis. Clear next step. No pressure.
            </span>
          </div>
        </div>
        {/* Right: LightPillar visual, masked and contained */}
        <div className="hidden lg:flex flex-1 items-center justify-end min-w-[320px] max-w-[520px] relative">
          <div className="w-full h-[420px] relative overflow-visible pointer-events-none">
            <LightPillar
              topColor="#2EE6A6"
              bottomColor="#1D4ED8"
              intensity={0.32}
              rotationSpeed={0.12}
              interactive={false}
              glowAmount={0.0025}
              pillarWidth={2.2}
              pillarHeight={0.32}
              noiseIntensity={0.12}
              mixBlendMode="screen"
              pillarRotation={-18}
              quality="medium"
            />
            {/* Mask: fade out left edge for text protection */}
            <div className="absolute inset-0 left-[-40%] bg-gradient-to-l from-transparent to-[#09090b] pointer-events-none" style={{ zIndex: 2 }} />
          </div>
        </div>
      </div>
      {/* Integrated confidence rail */}
      <div className="relative z-20 max-w-[1200px] mx-auto w-full mt-16 pt-8 border-t border-zinc-800/60">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              $<AnimatedNumber target={33} />
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Avg cost per qualified call.<br />All accounts.
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={5} />
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Active client systems.<br />Right now.
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              <AnimatedNumber target={11} /> days
            </div>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Median to first booked call.<br />All accounts.
            </p>
          </div>
        </div>
        {/* Client logos row */}
        <div className="mt-8 flex items-center gap-3">
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
