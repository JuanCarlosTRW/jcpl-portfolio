"use client";

import { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marbleSystemSection } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";
import MarbleRailsAnimation from "./MarbleRailsAnimation";
import { SCROLL, STEP_ACTIVE_RANGES } from "@/lib/marbleConfig";

gsap.registerPlugin(ScrollTrigger);

function getStepStyle(progress: number, stepIndex: number): { opacity: number; transform: string } {
  const [start, end] = STEP_ACTIVE_RANGES[stepIndex];
  const effectiveStart = stepIndex === 0 ? 0 : start;
  const fadeInStart = stepIndex === 0 ? 0 : STEP_ACTIVE_RANGES[stepIndex - 1][1] - 0.02;

  if (progress < fadeInStart) {
    return { opacity: 0, transform: "translateY(8px)" };
  }
  if (progress >= effectiveStart && progress <= end) {
    return { opacity: 1, transform: "translateY(0)" };
  }
  if (progress > end) {
    return { opacity: 0.3, transform: "translateY(4px)" };
  }
  const t = (progress - fadeInStart) / (start - fadeInStart);
  return { opacity: t, transform: `translateY(${8 - 8 * t}px)` };
}

export default function MarbleSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const reduced = usePrefersReducedMotionSafe();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced || !sectionRef.current || !viewportRef.current) return;

    const pinDuration = isMobile ? SCROLL.PIN_DURATION_MOBILE : SCROLL.PIN_DURATION_DESKTOP;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}vh`,
          pin: viewportRef.current,
          scrub: SCROLL.SCRUB,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  const stepStyles = useMemo(
    () => [getStepStyle(progress, 0), getStepStyle(progress, 1), getStepStyle(progress, 2)],
    [progress]
  );

  const steps = marbleSystemSection.steps ?? [];

  if (reduced) {
    return (
      <section
        ref={sectionRef}
        id="marble-system"
        className="section bg-[#fafafa] py-20 md:py-28"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionLabel
              label={marbleSystemSection.label}
              className="mb-4 text-neutral-500"
            />
            <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-neutral-900 leading-[1.15] tracking-[-0.025em]">
              {marbleSystemSection.headline}
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl leading-[1.75] text-[17px]">
              {marbleSystemSection.subheadline}
            </p>
            <div className="mt-16 space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="border-l-2 border-neutral-300 pl-8">
                  <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">{step.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <MarbleRailsAnimation progress={1} reduced={true} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="marble-system"
      className="section bg-[#fafafa]"
    >
      <div
        ref={viewportRef}
        className="min-h-screen flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-24 lg:gap-32 py-24 md:py-28"
      >
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-24 lg:gap-32 w-full">
          <div className="flex-1 max-w-xl">
            <SectionLabel
              label={marbleSystemSection.label}
              className="mb-4 text-neutral-500"
            />
            <h2 className="text-[clamp(32px,4vw,52px)] font-[800] text-neutral-900 leading-[1.15] tracking-[-0.025em]">
              {marbleSystemSection.headline}
            </h2>
            <p className="mt-5 text-neutral-600 leading-[1.75] text-[17px] max-w-lg">
              {marbleSystemSection.subheadline}
            </p>

            <div className="mt-14 md:mt-20 space-y-10 md:space-y-12">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="will-change-transform transition-[opacity,transform] duration-200 ease-out"
                  style={stepStyles[i]}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-h-[320px] md:min-h-[360px] md:min-w-[480px] lg:min-w-[520px]">
            <MarbleRailsAnimation progress={progress} reduced={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
