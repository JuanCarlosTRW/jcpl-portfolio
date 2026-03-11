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
          <h2 className="mx-auto mb-5 max-w-[860px] text-[clamp(32px,4.2vw,50px)] font-[800] leading-[1.12] tracking-[-0.026em] text-[#F5F0E8]">
            Your Work Is Good.{" "}
            <span style={{ color: "#EDE5D0", fontWeight: 700 }}>
              Your Pipeline Shouldn&apos;t Be This Fragile.
            </span>
          </h2>
          <p className="mx-auto mb-4 max-w-[720px] text-[clamp(16px,1.8vw,18px)] font-[400] leading-[1.6] text-[#8A7E74]">
            Untracked demand. A site that doesn&apos;t close. No follow-up. Each gap is small. Together, they are the reason good work doesn&apos;t become full books.
          </p>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
              fontWeight: 600,
              color: "#C8A05A",
            }}
          >
            Most competitors don&apos;t work harder. They run a system.
          </p>
        </Reveal>

        <Reveal className="mx-auto my-14 md:my-16 max-w-[640px]">
          <div
            className="relative mx-auto max-w-[640px] rounded-[14px] px-7 py-8 sm:px-10 sm:py-9 lift-card"
            style={{
              background: "#1A1610",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.55)",
              boxShadow: "0 0 60px rgba(212,168,83,0.04)",
            }}
          >
            <p
              className="mb-6 uppercase tracking-[0.18em]"
              style={{ fontSize: "0.6875rem", color: "#D4A853", fontWeight: 600 }}
            >
              8:47 AM · TODAY
            </p>
            <div
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.0625rem)",
                color: "#D2C9B8",
                lineHeight: 1.8,
              }}
            >
              <p>Someone in your city searched for your service.</p>
              <p>They found a competitor first.</p>
              <p>That phone rang. Yours didn&apos;t.</p>
              <p className="mt-5" style={{ color: "#A69D8D" }}>
                Not because your work is worse.
              </p>
              <p style={{ color: "#A69D8D" }}>
                Because their system was there. Yours wasn&apos;t.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-5 lg:mb-14 lg:grid-cols-2 reality-cards">
          {CARDS.map((card, i) => {
            const isFullWidth = i === 0 || i === 3;
            return (
              <Reveal key={card.num} delay={0.08 * (i + 1)} className={isFullWidth ? "lg:col-span-2" : ""}>
                <div
                  className={`group relative flex h-full flex-col rounded-[14px] lift-card card ${
                    isFullWidth ? "p-8 md:p-10" : "p-7 md:p-9"
                  }`}
                  style={{
                    border: "1px solid #2A2318",
                    background: "#1A1610",
                  }}
                >
                  <span
                    className="mb-5 inline-flex w-fit items-center rounded-md px-2.5 py-1"
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#D4A853",
                      background: "rgba(212,168,83,0.08)",
                      border: "1px solid rgba(212,168,83,0.22)",
                    }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className={`mb-3.5 font-[700] leading-[1.28] text-[#F5F0E8] ${
                      isFullWidth ? "text-[clamp(22px,2.2vw,26px)]" : "text-[20px]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`flex-1 leading-[1.72] ${
                      isFullWidth ? "text-[0.9375rem] md:text-[1rem]" : "text-[0.875rem]"
                    }`}
                    style={{ color: "#9A9080" }}
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
