"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const QUERIES = [
  { x: 8, y: 22, text: "best dentist near me", w: 28 },
  { x: 6, y: 38, text: "ac repair montreal", w: 26 },
  { x: 8, y: 54, text: "hvac contractor 24h", w: 28 },
  { x: 6, y: 70, text: "rv rental ottawa", w: 24 },
];

interface RowProps {
  local: MotionValue<number>;
  q: (typeof QUERIES)[number];
  i: number;
}

function QueryRow({ local, q, i }: RowProps) {
  const t = 0.1 + i * 0.08;
  const rowProg = useTransform(local, [t, t + 0.25], [0, 1]);
  const x = useTransform(rowProg, [0, 1], [-6, 0]);
  return (
    <motion.g style={{ opacity: rowProg, x }}>
      <rect x={q.x} y={q.y} width={q.w} height="3.6" rx="1.8" fill="rgba(245,240,232,0.06)" stroke="rgba(245,240,232,0.18)" strokeWidth="0.08" />
      <circle cx={q.x + 1.6} cy={q.y + 1.8} r="0.7" fill="none" stroke={ACCENT_HEX.cream} strokeWidth="0.12" opacity="0.6" />
      <line x1={q.x + 2.1} y1={q.y + 2.3} x2={q.x + 2.5} y2={q.y + 2.7} stroke={ACCENT_HEX.cream} strokeWidth="0.12" opacity="0.6" />
      <text x={q.x + 3.2} y={q.y + 2.4} fontSize="1.5" fill="rgba(245,240,232,0.85)" fontFamily="ui-monospace, monospace">
        {q.text}
      </text>
    </motion.g>
  );
}

interface TrailProps {
  local: MotionValue<number>;
  q: (typeof QUERIES)[number];
  i: number;
}

function ConversionTrail({ local, q, i }: TrailProps) {
  const t = 0.25 + i * 0.08;
  const trailProg = useTransform(local, [t, t + 0.4], [0, 1]);
  const dash = useTransform(trailProg, [0, 1], [80, 0]);
  const op = useTransform(trailProg, [0, 0.2, 1], [0, 1, 0.4]);
  return (
    <motion.path
      d={`M ${q.x + q.w} ${q.y + 1.8} Q ${65} ${q.y + 1.8 + (50 - q.y - 1.8) * 0.35}, 75 50`}
      stroke={ACCENT_HEX.cyan}
      strokeWidth="0.3"
      fill="none"
      strokeDasharray="80"
      strokeLinecap="round"
      style={{ strokeDashoffset: dash, opacity: op }}
    />
  );
}

export default function AdsFlow({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);
  const targetOp = useTransform(local, [0.4, 1], [0, 1]);
  const targetGlow = useTransform(local, [0.4, 1], [0, 0.7]);
  const targetGlowFaint = useTransform(local, [0.4, 1], [0, 0.45]);
  const labelOp = useTransform(local, [0.6, 1], [0, 1]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-30 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="af-target" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_HEX.gold} stopOpacity="0.9" />
          <stop offset="60%" stopColor={ACCENT_HEX.cyan} stopOpacity="0.4" />
          <stop offset="100%" stopColor={ACCENT_HEX.cyan} stopOpacity="0" />
        </radialGradient>
      </defs>

      {QUERIES.map((q, i) => (
        <QueryRow key={`q-${i}`} local={local} q={q} i={i} />
      ))}

      {QUERIES.map((q, i) => (
        <ConversionTrail key={`t-${i}`} local={local} q={q} i={i} />
      ))}

      <motion.circle cx="75" cy="50" r="14" fill="url(#af-target)" style={{ opacity: targetOp }} />
      <motion.circle cx="75" cy="50" r="3.2" fill={ACCENT_HEX.gold} style={{ opacity: targetOp }} />
      <motion.circle cx="75" cy="50" r="6.5" fill="none" stroke={ACCENT_HEX.gold} strokeWidth="0.18" style={{ opacity: targetGlow }} />
      <motion.circle cx="75" cy="50" r="9.8" fill="none" stroke={ACCENT_HEX.gold} strokeWidth="0.12" style={{ opacity: targetGlowFaint }} />

      <motion.text
        x="75"
        y="65"
        fontSize="1.6"
        fill={ACCENT_HEX.gold}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        letterSpacing="0.2"
        style={{ opacity: labelOp }}
      >
        QUALIFIED LEAD
      </motion.text>
    </motion.svg>
  );
}
