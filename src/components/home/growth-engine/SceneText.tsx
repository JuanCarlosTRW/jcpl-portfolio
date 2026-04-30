"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const FADE = 0.05;

export default function SceneText({ scene, progress }: Props) {
  const { start, end } = scene;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start - FADE, start, end, end + FADE],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start - FADE, start, end, end + FADE],
    [40, 0, 0, -40]
  );

  const blurPx = useTransform(
    progress,
    [start - FADE, start, end, end + FADE],
    [12, 0, 0, 12]
  );
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);

  const scale = useTransform(progress, [start, mid, end], [0.96, 1, 1.04]);

  const accentBg =
    scene.accent === "cyan"
      ? `${ACCENT_HEX.cyan}22`
      : scene.accent === "duo"
      ? `${ACCENT_HEX.gold}22`
      : `${ACCENT_HEX.gold}22`;

  const accentBorder =
    scene.accent === "cyan"
      ? `${ACCENT_HEX.cyan}55`
      : `${ACCENT_HEX.gold}55`;

  const accentText =
    scene.accent === "cyan" ? ACCENT_HEX.cyan : ACCENT_HEX.gold;

  const isFinal = scene.cta != null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 sm:px-10"
      style={{
        opacity,
        y,
        scale,
        filter,
        willChange: "opacity, transform, filter",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] text-center">
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{
            backgroundColor: accentBg,
            borderColor: accentBorder,
            color: accentText,
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accentText, boxShadow: `0 0 10px ${accentText}` }}
          />
          Stage {String(scene.index + 1).padStart(2, "0")} / 07
        </div>

        <h2
          className="text-[clamp(36px,7vw,96px)] font-[800] leading-[0.98] tracking-[-0.025em] text-white"
          style={{ textShadow: `0 0 60px rgba(0,0,0,0.6)` }}
        >
          {scene.headline.split(". ").map((part, i, arr) => (
            <span key={i} className="block">
              {part}
              {i < arr.length - 1 ? "." : ""}
            </span>
          ))}
        </h2>

        <p
          className="mx-auto mt-7 max-w-[640px] text-[clamp(15px,1.5vw,19px)] leading-[1.6] text-[var(--text-body)]"
          style={{ textShadow: "0 0 30px rgba(0,0,0,0.5)" }}
        >
          {scene.subheadline}
        </p>

        {isFinal && scene.cta && (
          <a
            href={scene.cta.href}
            className="pointer-events-auto mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform hover:scale-[1.03]"
            style={{
              backgroundColor: ACCENT_HEX.gold,
              color: "#0A0E1A",
              boxShadow: `0 0 0 1px ${ACCENT_HEX.gold}, 0 12px 50px ${ACCENT_HEX.gold}33, 0 0 80px ${ACCENT_HEX.cyan}22`,
            }}
          >
            {scene.cta.label}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
