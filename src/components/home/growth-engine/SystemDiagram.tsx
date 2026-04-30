"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const NODES = [
  { id: "demand", x: 18, y: 28, label: "DEMAND" },
  { id: "ads", x: 38, y: 18, label: "ADS" },
  { id: "site", x: 50, y: 50, label: "WEBSITE", primary: true },
  { id: "ai", x: 62, y: 18, label: "AI" },
  { id: "crm", x: 82, y: 28, label: "CRM" },
  { id: "seo", x: 28, y: 78, label: "SEO" },
  { id: "geo", x: 50, y: 86, label: "GEO" },
  { id: "review", x: 72, y: 78, label: "REVIEWS" },
];

const EDGES: Array<[string, string]> = [
  ["demand", "ads"],
  ["demand", "seo"],
  ["ads", "site"],
  ["ai", "site"],
  ["ai", "crm"],
  ["site", "crm"],
  ["seo", "site"],
  ["geo", "site"],
  ["geo", "review"],
  ["review", "site"],
  ["seo", "geo"],
];

const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));

interface NodeProps {
  local: MotionValue<number>;
  n: (typeof NODES)[number];
  i: number;
}

function SystemNode({ local, n, i }: NodeProps) {
  const t = 0.05 + i * 0.05;
  const prog = useTransform(local, [t, t + 0.2], [0, 1]);
  const scale = useTransform(prog, [0, 1], [0, 1]);
  const r = n.primary ? 4 : 2.8;
  const fill = n.primary ? ACCENT_HEX.gold : ACCENT_HEX.cyan;

  return (
    <motion.g style={{ opacity: prog }}>
      <motion.circle cx={n.x} cy={n.y} r={r * 2.4} fill={fill} fillOpacity="0.12" style={{ scale, originX: `${n.x}%`, originY: `${n.y}%` }} />
      <motion.circle cx={n.x} cy={n.y} r={r} fill={fill} stroke="rgba(0,0,0,0.4)" strokeWidth="0.15" style={{ scale, originX: `${n.x}%`, originY: `${n.y}%` }} />
      <motion.text
        x={n.x}
        y={n.y + r + 3}
        fontSize="1.4"
        fill={n.primary ? ACCENT_HEX.gold : ACCENT_HEX.cream}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        letterSpacing="0.18"
      >
        {n.label}
      </motion.text>
    </motion.g>
  );
}

interface EdgeProps {
  local: MotionValue<number>;
  ax: number;
  ay: number;
  bx: number;
  by: number;
  i: number;
}

function SystemEdge({ local, ax, ay, bx, by, i }: EdgeProps) {
  const t = 0.4 + i * 0.04;
  const prog = useTransform(local, [t, t + 0.25], [0, 1]);
  const dist = Math.hypot(bx - ax, by - ay);
  const dash = useTransform(prog, [0, 1], [dist, 0]);
  const op = useTransform(prog, [0, 0.2, 1], [0, 0.55, 0.7]);
  return (
    <motion.line
      x1={ax}
      y1={ay}
      x2={bx}
      y2={by}
      stroke={ACCENT_HEX.cyan}
      strokeWidth="0.2"
      strokeDasharray={dist}
      strokeLinecap="round"
      style={{ strokeDashoffset: dash, opacity: op }}
    />
  );
}

export default function SystemDiagram({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);

  const haloOp = useTransform(local, [0.3, 1], [0, 0.5]);
  const ringOp = useTransform(local, [0.5, 1], [0, 0.4]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-30 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sys-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_HEX.gold} stopOpacity="0.6" />
          <stop offset="60%" stopColor={ACCENT_HEX.cyan} stopOpacity="0.18" />
          <stop offset="100%" stopColor={ACCENT_HEX.cyan} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Big diffuse halo behind the system */}
      <motion.circle cx="50" cy="50" r="42" fill="url(#sys-halo)" style={{ opacity: haloOp }} />
      <motion.circle cx="50" cy="50" r="28" fill="none" stroke={ACCENT_HEX.gold} strokeWidth="0.08" strokeDasharray="0.8 1.6" style={{ opacity: ringOp }} />

      {/* Edges first so nodes overlay */}
      {EDGES.map(([a, b], i) => {
        const A = BY_ID[a];
        const B = BY_ID[b];
        return <SystemEdge key={`${a}-${b}`} local={local} ax={A.x} ay={A.y} bx={B.x} by={B.y} i={i} />;
      })}

      {NODES.map((n, i) => (
        <SystemNode key={n.id} local={local} n={n} i={i} />
      ))}
    </motion.svg>
  );
}
