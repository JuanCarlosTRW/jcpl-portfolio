"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { prefersReducedMotion } from "@/lib/motion";
import { clientReality } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const CARDS = clientReality.pains.map((p, i) => ({
  num: String(i + 1).padStart(2, "0"),
  title: p.title,
  body: p.detail,
}));

export default function ClientReality() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".reality-cards .card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reality-cards",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="reality"
      variant="alt"
      className="border-b border-[#2A2318] py-16 md:py-24"
      style={{ background: "#0D0B09" }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-[980px] text-center md:mb-14">
          <SectionLabel label="THE REALITY" className="mb-5 !text-[#D4A853]" />
          <h2 className="mx-auto mb-5 max-w-[900px] text-[clamp(34px,4.5vw,52px)] font-[800] leading-[1.15] tracking-[-0.025em] text-[#F5F0E8]">
            Your Work Is Good.{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Your Pipeline Shouldn&apos;t Be This Uncertain.
            </span>
          </h2>
          <p className="mx-auto mb-4 max-w-[900px] text-[clamp(17px,2vw,19px)] font-[500] leading-[1.5] text-[#A69D8D]">
            Untracked demand, a leaky website, and no follow-up turn good work into quiet weeks.
          </p>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
              fontWeight: 600,
              color: "#F5F0E8",
            }}
          >
            Most competitors don&apos;t work harder. They run a system.
          </p>
        </Reveal>

        <Reveal className="mx-auto mb-12 max-w-[900px] md:mb-14">
          <div
            className="relative mx-auto max-w-[900px] rounded-[14px] px-8 py-8 text-center sm:px-8 sm:py-10 lift-card"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid #D4A853",
              boxShadow: "0 0 40px rgba(212,168,83,0.05)",
            }}
          >
            <p
              className="mb-6 uppercase tracking-[0.15em]"
              style={{ fontSize: "0.75rem", color: "#D4A853" }}
            >
              8:47 AM · TODAY
            </p>
            <p
              className="mx-auto max-w-[820px] leading-[1.85] sm:text-[17px]"
              style={{ fontSize: "1.05rem", color: "#D2C9B8" }}
            >
              Someone in your city searched &ldquo;painting contractor near me&rdquo; this
              morning. They clicked the first result. That company&apos;s phone rang at 8:47
              AM. They booked a $1,400 job before breakfast. Not because your work is
              worse. Because that company had the system.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-5 lg:mb-14 lg:grid-cols-2 reality-cards">
          {CARDS.map((card, i) => {
            const isFullWidth = i === 0 || i === 3;
            return (
              <Reveal key={card.num} delay={0.08 * (i + 1)} className={isFullWidth ? "lg:col-span-2" : ""}>
                <div
                  className={`group relative flex h-full flex-col rounded-[14px] border lift-card card ${
                    isFullWidth ? "p-8 md:p-10" : "p-7 md:p-8"
                  }`}
                  style={{
                    border: "1px solid #2A2318",
                    background: "#1E1A14",
                  }}
                >
                  <span
                    className="mb-4 inline-flex w-fit rounded-md px-2 py-1 text-[11px] font-[600] uppercase tracking-wider text-[#F5F0E8]"
                    style={{ background: "#D4A853" }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className={`mb-3 font-[700] leading-snug text-[#F5F0E8] ${
                      isFullWidth ? "text-[26px] md:text-[28px]" : "text-[22px]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`flex-1 leading-[1.75] ${
                      isFullWidth ? "text-base md:text-[17px]" : "text-[0.875rem]"
                    }`}
                    style={{ color: "#D2C9B8" }}
                  >
                    {card.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
