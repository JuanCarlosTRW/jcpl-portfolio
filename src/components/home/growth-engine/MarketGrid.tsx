"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const NODES = [
  { x: 18, y: 32, r: 6 },
  { x: 32, y: 58, r: 4 },
  { x: 48, y: 24, r: 8 },
  { x: 58, y: 70, r: 5 },
  { x: 72, y: 38, r: 7 },
  { x: 84, y: 62, r: 4 },
  { x: 26, y: 78, r: 5 },
  { x: 64, y: 18, r: 4 },
];

interface NodeProps {
  local: MotionValue<number>;
  x: number;
  y: number;
  r: number;
  i: number;
}

function DemandNode({ local, x, y, r, i }: NodeProps) {
  const t = i * 0.1;
  const nodeProg = useTransform(local, [t, t + 0.25], [0, 1]);
  const scale = useTransform(nodeProg, [0, 1], [0, 1]);
  const op = nodeProg;
  const haloOp = useTransform(nodeProg, (v) => v * 0.7);

  return (
    <motion.g style={{ originX: "0.5", originY: "0.5" }}>
      <motion.circle cx={x} cy={y} r={r} fill="url(#mg-glow)" style={{ scale, opacity: haloOp }} />
      <motion.circle cx={x} cy={y} r={r * 0.35} fill={ACCENT_HEX.cyan} style={{ scale, opacity: op }} />
      <motion.circle cx={x} cy={y} r="0.4" fill="white" style={{ opacity: op }} />
    </motion.g>
  );
}

export default function MarketGrid({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);
  const opacity = useTransform(
    progress,
    [scene.start - 0.05, scene.start, scene.end, scene.end + 0.05],
    [0, 1, 1, 0]
  );
  const scanY = useTransform(local, [0, 1], [10, 90]);
  const lineDash = useTransform(local, [0, 1], [400, 0]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-30 h-full w-full"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="mg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_HEX.cyan} stopOpacity="0.9" />
          <stop offset="100%" stopColor={ACCENT_HEX.cyan} stopOpacity="0" />
        </radialGradient>
        <pattern id="mg-dots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.18" fill="rgba(245,240,232,0.18)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100" height="100" fill="url(#mg-dots)" />

      {[20, 40, 60, 80].map((p) => (
        <g key={p}>
          <line x1={p} y1="0" x2={p} y2="100" stroke="rgba(212,168,83,0.06)" strokeWidth="0.08" />
          <line x1="0" y1={p} x2="100" y2={p} stroke="rgba(212,168,83,0.06)" strokeWidth="0.08" />
        </g>
      ))}

      <motion.line
        x1="0"
        x2="100"
        y1={scanY}
        y2={scanY}
        stroke={ACCENT_HEX.cyan}
        strokeWidth="0.2"
        opacity="0.5"
      />

      {NODES.map((n, i) => (
        <DemandNode key={i} local={local} x={n.x} y={n.y} r={n.r} i={i} />
      ))}

      <motion.path
        d="M 18 32 L 48 24 L 72 38 L 84 62 L 58 70 L 32 58 L 26 78 L 18 32"
        stroke={ACCENT_HEX.cyan}
        strokeWidth="0.15"
        fill="none"
        strokeOpacity="0.45"
        strokeDasharray="400"
        style={{ strokeDashoffset: lineDash }}
      />
    </motion.svg>
  );
}
