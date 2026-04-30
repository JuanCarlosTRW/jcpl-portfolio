"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const SECTIONS = [
  { y: 8, h: 16, label: "HERO", t: 0.05 },
  { y: 26, h: 12, label: "PROOF", t: 0.18 },
  { y: 40, h: 18, label: "OFFER", t: 0.32 },
  { y: 60, h: 14, label: "PROCESS", t: 0.46 },
  { y: 76, h: 12, label: "CTA", t: 0.6 },
];

interface SectionRowProps {
  local: MotionValue<number>;
  s: (typeof SECTIONS)[number];
}

function SectionRow({ local, s }: SectionRowProps) {
  const enterProg = useTransform(local, [s.t, s.t + 0.15], [0, 1]);
  const yOff = useTransform(enterProg, [0, 1], [4, 0]);
  return (
    <motion.g style={{ opacity: enterProg, y: yOff }}>
      <rect x="22" y={s.y} width="56" height={s.h} rx="0.6" fill="url(#ww-section)" stroke="rgba(212,168,83,0.35)" strokeWidth="0.12" />
      <rect x="24" y={s.y + 2} width="22" height="1.2" rx="0.3" fill="rgba(245,240,232,0.45)" />
      <rect x="24" y={s.y + 4} width="36" height="0.8" rx="0.3" fill="rgba(245,240,232,0.2)" />
      <rect x="24" y={s.y + 5.5} width="30" height="0.8" rx="0.3" fill="rgba(245,240,232,0.2)" />
      <text x="76" y={s.y + 3} fontSize="1.2" fill={ACCENT_HEX.gold} textAnchor="end" fontFamily="ui-monospace, monospace" letterSpacing="0.1" fontWeight="700">
        {s.label}
      </text>
    </motion.g>
  );
}

export default function WebsiteWireframe({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);
  const opacity = useTransform(
    progress,
    [scene.start - 0.05, scene.start, scene.end, scene.end + 0.05],
    [0, 1, 1, 0]
  );
  const chromeOp = useTransform(local, [0, 0.1], [0, 1]);
  const ctaBgOp = useTransform(local, [0.15, 0.3], [0, 1]);
  const ctaTextOp = useTransform(local, [0.18, 0.35], [0, 1]);
  const meterOp = useTransform(local, [0.55, 0.85], [0, 1]);
  const meterH = useTransform(local, [0.55, 1], [0, 36]);
  const meterY = useTransform(local, [0.55, 1], [78, 46]);
  const cvrOp = useTransform(local, [0.7, 1], [0, 1]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 z-30 h-full w-full"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="ww-section" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212,168,83,0.12)" />
          <stop offset="100%" stopColor="rgba(212,168,83,0.04)" />
        </linearGradient>
      </defs>

      <motion.g style={{ opacity: chromeOp }}>
        <rect x="20" y="3" width="60" height="94" rx="1.2" fill="rgba(20,16,14,0.9)" stroke="rgba(212,168,83,0.25)" strokeWidth="0.2" />
        <rect x="20" y="3" width="60" height="3" fill="rgba(245,240,232,0.04)" />
        <circle cx="22.5" cy="4.5" r="0.4" fill="rgba(245,240,232,0.3)" />
        <circle cx="24" cy="4.5" r="0.4" fill="rgba(245,240,232,0.3)" />
        <circle cx="25.5" cy="4.5" r="0.4" fill="rgba(245,240,232,0.3)" />
      </motion.g>

      {SECTIONS.map((s, i) => (
        <SectionRow key={i} local={local} s={s} />
      ))}

      <motion.rect x="58" y="18" width="18" height="3.5" rx="0.6" fill={ACCENT_HEX.gold} style={{ opacity: ctaBgOp }} />
      <motion.text
        x="67"
        y="20.4"
        fontSize="1.5"
        textAnchor="middle"
        fill="#0A0E1A"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        style={{ opacity: ctaTextOp }}
      >
        BOOK A CALL
      </motion.text>

      <motion.g style={{ opacity: meterOp }}>
        <text x="84" y="40" fontSize="1.2" fill="rgba(245,240,232,0.6)" fontFamily="ui-monospace, monospace" letterSpacing="0.15">
          CVR
        </text>
        <rect x="84" y="42" width="8" height="40" rx="0.4" fill="rgba(245,240,232,0.06)" stroke="rgba(212,168,83,0.25)" strokeWidth="0.1" />
        <motion.rect x="84" width="8" rx="0.4" fill={ACCENT_HEX.gold} style={{ height: meterH, y: meterY }} />
        <motion.text
          x="88"
          y="38"
          fontSize="2.6"
          fill={ACCENT_HEX.gold}
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
          style={{ opacity: cvrOp }}
        >
          7.4%
        </motion.text>
      </motion.g>
    </motion.svg>
  );
}
