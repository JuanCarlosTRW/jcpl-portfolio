"use client";

import { useState, useEffect, useRef } from "react";

interface Step {
  number: string;
  name: string;
  badge: string;
  body: string;
  tags: string[];
  outcome: string;
}

const steps: Step[] = [
  {
    number: "01",
    name: "Market Gap Report",
    badge: "72 hours",
    body: "Before I write a line of code, I map your market. Where your competitors are exposed. What your buyers are actually searching. What your current funnel is missing. You get a 90-day roadmap before anything gets built.",
    tags: ["Market Gap Report", "Funnel Audit", "90-Day Roadmap"],
    outcome: "You know exactly what to build before anything is built.",
  },
  {
    number: "02",
    name: "System Launch",
    badge: "2–4 weeks",
    body: "Site, ads, tracking, booking flow, and AI qualification. All built, all connected, all live. You approve each component before it ships. Timeline depends on asset approvals.",
    tags: ["Live Website", "Ads Campaign", "Booking System", "Tracking Dashboard"],
    outcome: "Your phone starts ringing. Every call tracked to its source.",
  },
  {
    number: "03",
    name: "Ongoing Optimization",
    badge: "Ongoing",
    body: "Every week I review what is working and cut what is not. Every month I report revenue, attribution, and next steps. Cost per call drops as the system learns your market.",
    tags: ["Weekly Performance Report", "Monthly Review Call", "Conversion Improvements"],
    outcome: "The longer it runs, the cheaper each call gets.",
  },
];

const GOLD = "#D4A853";
const BG = "#0D0B09";
const CARD = "#161209";
const BORDER = "#2A2010";
const MUTED = "#A89880";
const WHITE = "#FFFFFF";
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

function useInView(ref: { current: Element | null }, threshold = 0.45) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return inView;
}

interface StepBlockProps {
  step: Step;
  index: number;
  isLast: boolean;
}

function StepBlock({ step, index, isLast }: StepBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setTextVisible(true), 320);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 0,
        position: "relative",
        fontFamily: FONT,
        minHeight: 220,
      }}
    >
      {/* Left spine */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 64,
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Line above */}
        {index > 0 && (
          <div
            style={{
              width: 1,
              height: 32,
              background: `linear-gradient(to bottom, transparent, ${inView ? GOLD : BORDER})`,
              transition: "background 600ms ease",
              flexShrink: 0,
            }}
          />
        )}

        {/* Bubble */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            border: `2px solid ${inView ? GOLD : BORDER}`,
            background: inView ? `${GOLD}18` : CARD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "border-color 500ms ease, background 500ms ease, box-shadow 500ms ease",
            boxShadow: inView
              ? `0 0 0 6px ${GOLD}14, 0 0 24px ${GOLD}22`
              : "none",
            flexShrink: 0,
            zIndex: 2,
            position: "relative",
          }}
        >
          <span
            style={{
              color: inView ? GOLD : MUTED,
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              transition: "color 400ms ease",
            }}
          >
            {step.number}
          </span>
        </div>

        {/* Line below */}
        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              background: `linear-gradient(to bottom, ${inView ? GOLD : BORDER}, ${BORDER})`,
              transition: "background 600ms ease 200ms",
              minHeight: 80,
            }}
          />
        )}
      </div>

      {/* Right content */}
      <div
        style={{
          paddingLeft: 28,
          paddingTop: 12,
          paddingBottom: isLast ? 0 : 48,
          flex: 1,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 480ms ease, transform 480ms ease",
        }}
      >
        {/* Badge + Name row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: WHITE,
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {step.name}
          </h3>
          <span
            style={{
              background: GOLD,
              color: "#0D0B09",
              fontSize: "0.68rem",
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: 99,
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            {step.badge}
          </span>
        </div>

        {/* Body */}
        <p
          style={{
            color: MUTED,
            fontSize: "0.97rem",
            lineHeight: 1.75,
            margin: "0 0 18px",
            maxWidth: 520,
          }}
        >
          {step.body}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {step.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                border: `1px solid ${BORDER}`,
                color: MUTED,
                fontSize: "0.72rem",
                padding: "4px 10px",
                borderRadius: 4,
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Outcome */}
        <div
          style={{
            borderTop: `1px solid ${GOLD}55`,
            paddingTop: 14,
            display: "inline-block",
            maxWidth: 460,
          }}
        >
          <p
            style={{
              margin: 0,
              color: GOLD,
              fontStyle: "italic",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {step.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ThreeStepProcess() {
  const headRef = useRef<HTMLDivElement>(null);
  const headIn = useInView(headRef, 0.5);
  const [headText, setHeadText] = useState(false);

  useEffect(() => {
    if (headIn) {
      const t = setTimeout(() => setHeadText(true), 100);
      return () => clearTimeout(t);
    }
  }, [headIn]);

  return (
    <section id="system" style={{ background: BG, padding: "80px 40px", fontFamily: FONT }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Label + Headline */}
        <div ref={headRef} style={{ marginBottom: 64 }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 14px",
              opacity: headText ? 1 : 0,
              transition: "opacity 400ms ease",
            }}
          >
            THE SYSTEM
          </p>
          <h2
            style={{
              color: WHITE,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              opacity: headText ? 1 : 0,
              transform: headText ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 500ms ease 100ms, transform 500ms ease 100ms",
            }}
          >
            Three steps. Built to get you live fast.
          </h2>
        </div>

        {/* Steps */}
        {steps.map((s, i) => (
          <StepBlock key={i} step={s} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
}
