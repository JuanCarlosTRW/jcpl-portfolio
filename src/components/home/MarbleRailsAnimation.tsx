"use client";

import { useMemo } from "react";
import {
  RAIL_COLORS,
  RAIL_OPACITY,
  DIMENSIONS,
  BALL,
  TRAIL,
} from "@/lib/marbleConfig";

const { width: W, height: H, railGap } = DIMENSIONS;
const left = 60;
const right = 540;
const rail1Y = 70;
const rail2Y = 70 + railGap;
const rail3Y = 70 + railGap * 2;

/* Progress segments (0–1): rail1 roll, drop1, rail2 roll, drop2, rail3 roll */
const R1_END = 0.33;
const D1_END = 0.38;
const R2_END = 0.66;
const D2_END = 0.71;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function progressToPosition(progress: number): { x: number; y: number } {
  if (progress <= 0) return { x: left, y: rail1Y };
  if (progress >= 1) return { x: right, y: rail3Y };

  if (progress < R1_END) {
    const t = progress / R1_END;
    return { x: lerp(left, right, t), y: rail1Y };
  }
  if (progress < D1_END) {
    const t = (progress - R1_END) / (D1_END - R1_END);
    return { x: right, y: lerp(rail1Y, rail2Y, t) };
  }
  if (progress < R2_END) {
    const t = (progress - D1_END) / (R2_END - D1_END);
    return { x: lerp(right, left, t), y: rail2Y };
  }
  if (progress < D2_END) {
    const t = (progress - R2_END) / (D2_END - R2_END);
    return { x: left, y: lerp(rail2Y, rail3Y, t) };
  }
  const t = (progress - D2_END) / (1 - D2_END);
  return { x: lerp(left, right, t), y: rail3Y };
}

function progressToActiveRail(progress: number): number | null {
  if (progress < R1_END) return 0;
  if (progress < D1_END) return null;
  if (progress < R2_END) return 1;
  if (progress < D2_END) return null;
  return 2;
}

interface MarbleRailsAnimationProps {
  progress: number;
  reduced: boolean;
}

export default function MarbleRailsAnimation({ progress, reduced }: MarbleRailsAnimationProps) {
  const pos = useMemo(() => progressToPosition(progress), [progress]);
  const activeRailIndex = useMemo(() => progressToActiveRail(progress), [progress]);

  const trailPositions = useMemo(() => {
    if (reduced || progress <= 0) return [];
    const samples: { x: number; y: number }[] = [];
    const count = TRAIL.count;
    for (let i = count; i >= 0; i--) {
      const p = Math.max(0, progress - (i * 0.015));
      samples.push(progressToPosition(p));
    }
    return samples;
  }, [progress, reduced]);

  if (reduced) {
    return (
      <div className="relative w-full" style={{ minHeight: H }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          className="w-full h-auto max-w-2xl mx-auto block"
        >
          <defs>
            <filter id="marble-rail-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="marble-ball-gloss" cx="35%" cy="35%" r="50%">
              <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
              <stop offset="70%" stopColor={BALL.baseColor} stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(240,240,245,0.98)" stopOpacity="1" />
            </radialGradient>
          </defs>
          <Rail
            line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
            color={RAIL_COLORS.blue}
            filter="url(#marble-rail-glow-blue)"
            active={false}
          />
          <Rail
            line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
            color={RAIL_COLORS.purple}
            filter="url(#marble-rail-glow-purple)"
            active={false}
          />
          <Rail
            line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
            color={RAIL_COLORS.emerald}
            filter="url(#marble-rail-glow-emerald)"
            active={false}
          />
          <g
            style={{
              transformOrigin: "0 0",
              transform: `translate(${right}px, ${rail3Y}px)`,
            }}
          >
            <circle
              cx={0}
              cy={0}
              r={BALL.radius}
              fill="url(#marble-ball-gloss)"
              opacity={0.9}
            />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ minHeight: H }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="w-full h-auto max-w-2xl mx-auto block"
      >
        <defs>
          <filter id="marble-rail-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-ball-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="marble-ball-gloss" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
            <stop offset="70%" stopColor={BALL.baseColor} stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(240,240,245,0.98)" stopOpacity="1" />
          </radialGradient>
        </defs>

        <Rail
          line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
          color={RAIL_COLORS.blue}
          filter="url(#marble-rail-glow-blue)"
          active={activeRailIndex === 0}
        />
        <Rail
          line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
          color={RAIL_COLORS.purple}
          filter="url(#marble-rail-glow-purple)"
          active={activeRailIndex === 1}
        />
        <Rail
          line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
          color={RAIL_COLORS.emerald}
          filter="url(#marble-rail-glow-emerald)"
          active={activeRailIndex === 2}
        />

        {trailPositions.map((p, i) => {
          const opacity =
            TRAIL.baseOpacity * Math.pow(TRAIL.fadeFactor, trailPositions.length - 1 - i);
          return (
            <circle
              key={`trail-${i}-${p.x.toFixed(0)}-${p.y.toFixed(0)}`}
              cx={p.x}
              cy={p.y}
              r={BALL.radius * 0.6}
              fill="rgba(255,255,255,0.6)"
              opacity={opacity}
              style={{ filter: "blur(2px)" }}
            />
          );
        })}

        <g
          style={{
            transformOrigin: "0 0",
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <circle
            cx={0}
            cy={0}
            r={BALL.radius}
            fill="url(#marble-ball-gloss)"
            filter="url(#marble-ball-glow)"
          />
        </g>
      </svg>
    </div>
  );
}

function Rail({
  line,
  color,
  filter,
  active,
}: {
  line: { x1: number; y1: number; x2: number; y2: number };
  color: string;
  filter: string;
  active?: boolean;
}) {
  const glowOpacity = active ? RAIL_OPACITY.active : RAIL_OPACITY.base;
  const lineOpacity = active ? 1 : RAIL_OPACITY.centerLine;
  return (
    <g>
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={lineOpacity}
        fill="none"
        style={{ transition: "opacity 0.3s ease" }}
      />
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="24"
        strokeLinecap="round"
        opacity={glowOpacity}
        fill="none"
        style={{ filter, transition: "opacity 0.3s ease" }}
      />
    </g>
  );
}
