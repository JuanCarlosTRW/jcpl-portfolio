"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marbleSystemSection } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";
import MarbleRailsAnimation from "./MarbleRailsAnimation";
import { SCROLL } from "@/lib/marbleConfig";

gsap.registerPlugin(ScrollTrigger);

export default function MarbleSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}vh`,
          pin: viewportRef.current,
          scrub: 1.5,
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      /* Step 0: reveal 0–0.08, hold active 0.08–0.38, fade to inactive 0.38–0.45 */
      tl.fromTo(
        step0Ref.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" },
        0
      );
      tl.to(step0Ref.current, { opacity: 0.3, duration: 0.07, ease: "power2.inOut" }, 0.38);

      /* Step 1: reveal 0.35–0.42, hold active 0.42–0.75, fade to inactive 0.75–0.82 */
      tl.fromTo(
        step1Ref.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.07, ease: "power2.out" },
        0.35
      );
      tl.to(step1Ref.current, { opacity: 0.3, duration: 0.07, ease: "power2.inOut" }, 0.75);

      /* Step 2: reveal 0.72–0.78, hold active to end */
      tl.fromTo(
        step2Ref.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" },
        0.72
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

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
              {steps.map((step, i) => {
                const ref = [step0Ref, step1Ref, step2Ref][i];
                return (
                  <div
                    key={i}
                    ref={ref}
                    className="will-change-transform"
                    style={{ opacity: 0 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-neutral-600">
                      {step.copy}
                    </p>
                  </div>
                );
              })}
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
