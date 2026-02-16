"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

/* ─── Client logos — structured grid, text-based for now ─── */
const CLIENTS = [
  { name: "Premier RV Rentals", industry: "RV Rentals" },
  { name: "Elite Cuts", industry: "Barbershops" },
  { name: "Sharp Fade Studio", industry: "Barbershops" },
  { name: "Local Dental Co.", industry: "Dental" },
  { name: "Prestige Realty", industry: "Real Estate" },
  { name: "Summit Services", industry: "Local Services" },
];

export default function LogosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotionSafe();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced || !sectionRef.current || !headlineRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const logoItems = gridRef.current!.querySelectorAll(".logo-item");

      /* Pin the section for scroll-driven reveal */
      const pinDuration = isMobile ? "+=80vh" : "+=150vh";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: pinDuration,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      /* Headline fades in during first 20% of scroll */
      tl.fromTo(
        headlineRef.current!,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.2 },
        0
      );

      /* Logos stagger in from 20% to 70% */
      tl.fromTo(
        logoItems,
        { opacity: 0, scale: 0.96, y: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: "power2.out",
        },
        0.2
      );

      /* Subtle slow float — desktop only */
      if (!isMobile) {
        logoItems.forEach((item, i) => {
          gsap.to(item, {
            y: i % 2 === 0 ? 4 : -4,
            duration: 4 + i * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.2,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  /* Static fallback for reduced motion */
  if (reduced) {
    return (
      <section
        className="py-20 md:py-30 bg-[var(--bg-surface)]"
        aria-label="Trusted by growth-focused operators"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <SectionLabel label="Credibility" className="mb-6" />
          <h2 className="heading-2 max-w-lg mx-auto mb-12">
            Trusted by Growth-Focused Operators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-6 text-center"
              >
                <p className="text-sm font-medium text-[var(--text-primary)]">{client.name}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-[var(--bg-surface)]"
      aria-label="Trusted by growth-focused operators"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
        {/* Headline — fades in first */}
        <div ref={headlineRef} className="text-center mb-14 md:mb-16 opacity-0">
          <SectionLabel label="Credibility" className="mb-6" />
          <h2 className="heading-2 max-w-lg mx-auto">
            Trusted by Growth-Focused Operators
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-sm max-w-md mx-auto">
            Service businesses generating measurable growth through integrated systems.
          </p>
        </div>

        {/* Logo grid — strict alignment, no chaos */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="logo-item opacity-0 bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-6 md:p-8 text-center grayscale hover:grayscale-0 hover:border-[var(--border-strong)] transition-all duration-300 cursor-default"
            >
              <p className="text-sm font-medium text-[var(--text-primary)] tracking-wide">
                {client.name}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1.5">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
