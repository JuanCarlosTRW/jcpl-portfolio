"use client";

import { useEffect, useRef, useState } from "react";
import { SCENES } from "./sceneData";
import { ACCENT_HEX } from "./types";

interface SceneCardProps {
  index: number;
  headline: string;
  subheadline: string;
  accent: "gold" | "cyan" | "duo";
  cta?: { label: string; href: string };
}

function SceneCard({ index, headline, subheadline, accent, cta }: SceneCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const accentText = accent === "cyan" ? ACCENT_HEX.cyan : ACCENT_HEX.gold;

  return (
    <div
      ref={ref}
      className="relative flex min-h-[80vh] items-center justify-center px-6 py-16 sm:px-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 700ms ease, transform 700ms ease",
      }}
    >
      <div className="mx-auto w-full max-w-[720px] text-center">
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{
            backgroundColor: `${accentText}22`,
            borderColor: `${accentText}55`,
            color: accentText,
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accentText }}
          />
          Stage {String(index + 1).padStart(2, "0")} / 07
        </div>
        <h3 className="text-[clamp(28px,5vw,52px)] font-[800] leading-[1.05] tracking-[-0.02em] text-white">
          {headline}
        </h3>
        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[var(--text-body)] sm:text-[16px]">
          {subheadline}
        </p>
        {cta && (
          <a
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT_HEX.gold, color: "#0A0E1A" }}
          >
            {cta.label} <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function GrowthEngineStatic() {
  return (
    <section
      id="growth-engine"
      aria-label="The Growth Engine"
      className="relative"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(212,168,83,0.06), transparent 60%), #0D0B09",
      }}
    >
      <div className="container mx-auto py-12">
        <div className="mb-2 text-center">
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em]"
            style={{ color: ACCENT_HEX.gold }}
          >
            The Growth Engine
          </span>
        </div>
      </div>
      {SCENES.map((s) => (
        <SceneCard
          key={s.id}
          index={s.index}
          headline={s.headline}
          subheadline={s.subheadline}
          accent={s.accent}
          cta={s.cta}
        />
      ))}
    </section>
  );
}
