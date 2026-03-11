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
      className="border-b border-[#2A2318] py-20 md:py-28"
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
          <p className="mx-auto mb-6 max-w-[580px] text-[clamp(15.5px,1.7vw,17.5px)] font-[400] leading-[1.7] text-[#8A7E74]">
            Untracked demand. A site that doesn&apos;t convert. No follow-up.
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

        <Reveal className="mx-auto my-14 md:my-16 max-w-[620px]">
          <div
            className="relative mx-auto max-w-[620px] rounded-[14px] px-8 py-10 sm:px-10 sm:py-11 lift-card"
            style={{
              background: "#1A1610",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.55)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.35), 0 0 60px rgba(212,168,83,0.04)",
            }}
          >
            <p
              className="mb-7 uppercase tracking-[0.18em]"
              style={{ fontSize: "0.6875rem", color: "#D4A853", fontWeight: 600 }}
            >
              8:47 AM · TODAY
            </p>
            <div
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.0625rem)",
                lineHeight: 1.85,
              }}
            >
              <p style={{ color: "#C8BFAE" }}>Someone in your city searched for your service.</p>
              <p style={{ color: "#C8BFAE" }}>They found a competitor first.</p>
              <p style={{ color: "#C8BFAE" }}>That phone rang. Yours didn&apos;t.</p>

              <div
                aria-hidden="true"
                style={{
                  height: "1px",
                  background: "rgba(212,168,83,0.14)",
                  margin: "1.5rem 0",
                }}
              />

              <p style={{ color: "#A8A098", fontWeight: 400 }}>
                Not because your work is worse.
              </p>
              <p style={{ color: "#EDE5D0", fontWeight: 600 }}>
                Because their system was there. Yours wasn&apos;t.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-5 lg:mb-14 lg:grid-cols-2 reality-cards">
          {CARDS.map((card, i) => {
            const isFullWidth = i === 0 || i === 3;
            const isDominant = i === 0;
            const isConclusion = i === 3;
            const padding = isFullWidth ? "p-9 md:p-11" : "p-7 md:p-8";
            const titleSize = isFullWidth
              ? "text-[clamp(22px,2.3vw,27px)]"
              : "text-[19px]";
            return (
              <Reveal key={card.num} delay={0.08 * (i + 1)} className={isFullWidth ? "lg:col-span-2" : ""}>
                <div
                  className={`group relative flex h-full flex-col rounded-[14px] lift-card card ${padding}`}
                  style={{
                    background: "#1A1610",
                    border: "1px solid #2A2318",
                    ...(isConclusion
                      ? { borderLeft: "3px solid rgba(212,168,83,0.30)" }
                      : {}),
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
                    className={`mb-3.5 font-[700] leading-[1.26] text-[#F5F0E8] ${titleSize}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`flex-1 leading-[1.72] ${
                      isFullWidth ? "text-[0.9375rem] md:text-[1rem]" : "text-[0.8625rem]"
                    }`}
                    style={{ color: isDominant ? "#A8A098" : "#9A9080" }}
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
