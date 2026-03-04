"use client";

import { useMemo } from "react";
import {
  RAIL_COLORS,
  RAIL_OPACITY,
  RAIL_GLOW,
  DIMENSIONS,
  BALL,
  BALL_SCALE,
  TRAIL,
  PROGRESS_SEGMENTS,
  RAIL_DARKENING,
  DROP_OFF,
} from "@/lib/marbleConfig";

const { width: W, height: H, railGap } = DIMENSIONS;
const left = 60;
const right = 540;
const rail1Y = 70;
const rail2Y = 70 + railGap;
const rail3Y = 70 + railGap * 2;

const {
  RAIL1_END,
  DWELL1_END,
  DROP1_END,
  RAIL2_END,
  DWELL2_END,
  DROP2_END,
  RAIL3_END,
  DROP_OFF_START,
  DROP_OFF_END,
} = PROGRESS_SEGMENTS;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* easeOut: decelerate at end of roll */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* subtle bounce: slight overshoot at bottom for drop settle */
function dropBounce(t: number): number {
  if (t < 0.85) return t / 0.85;
  const overshoot = (t - 0.85) / 0.15;
  return 1 + 0.04 * Math.sin(overshoot * Math.PI);
}

function progressToPosition(progress: number): { x: number; y: number } {
  if (progress <= 0) return { x: left, y: rail1Y };

  if (progress < RAIL1_END) {
    const t = progress / RAIL1_END;
    const eased = easeOut(t);
    return { x: lerp(left, right, eased), y: rail1Y };
  }
  if (progress < DWELL1_END) {
    return { x: right, y: rail1Y };
  }
  if (progress < DROP1_END) {
    const t = (progress - DWELL1_END) / (DROP1_END - DWELL1_END);
    const eased = dropBounce(t);
    return { x: right, y: lerp(rail1Y, rail2Y, eased) };
  }
  if (progress < RAIL2_END) {
    const t = (progress - DROP1_END) / (RAIL2_END - DROP1_END);
    const eased = easeOut(t);
    return { x: lerp(right, left, eased), y: rail2Y };
  }
  if (progress < DWELL2_END) {
    return { x: left, y: rail2Y };
  }
  if (progress < DROP2_END) {
    const t = (progress - DWELL2_END) / (DROP2_END - DWELL2_END);
    const eased = dropBounce(t);
    return { x: left, y: lerp(rail2Y, rail3Y, eased) };
  }
  if (progress < RAIL3_END) {
    const t = (progress - DROP2_END) / (RAIL3_END - DROP2_END);
    const eased = easeOut(t);
    return { x: lerp(left, right, eased), y: rail3Y };
  }
  /* Dwell at end of rail3: 0.82–0.84 */
  if (progress < DROP_OFF_START) {
    return { x: right, y: rail3Y };
  }
  /* Drop-off phase: 0.84–0.90 forward nudge, 0.90–1.0 vertical drop */
  const dropProgress = (progress - DROP_OFF_START) / (DROP_OFF_END - DROP_OFF_START);
  const nudgeEnd = 0.375; /* 0.84–0.90 ≈ 37.5% of drop phase */
  if (dropProgress < nudgeEnd) {
    const t = dropProgress / nudgeEnd;
    const eased = easeOutQuart(t);
    const forward = 18;
    return { x: right + forward * eased, y: rail3Y };
  }
  const t = (dropProgress - nudgeEnd) / (1 - nudgeEnd);
  const eased = easeOutQuart(t);
  const dropY = rail3Y + DROP_OFF.distancePx * eased;
  const forward = 18;
  return { x: right + forward, y: dropY };
}

/* easeOutQuart: for ball scale and rail darkness */
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function progressToScale(progress: number): number {
  const t = Math.max(0, Math.min(1, progress));
  if (t >= DROP_OFF_START) {
    const dropT = (t - DROP_OFF_START) / (DROP_OFF_END - DROP_OFF_START);
    const eased = easeOutQuart(dropT);
    return lerp(BALL_SCALE.max, BALL_SCALE.min, eased);
  }
  const effectiveT = t / DROP_OFF_START;
  const eased = easeOutQuart(effectiveT);
  return lerp(BALL_SCALE.min, BALL_SCALE.max, eased);
}

function progressToBallOpacity(progress: number): number {
  if (progress < DROP_OFF_START) return 1;
  const t = (progress - DROP_OFF_START) / (DROP_OFF_END - DROP_OFF_START);
  const eased = easeOutQuart(t);
  return lerp(1, DROP_OFF.opacityEnd, eased);
}

/* Per-rail darkness 0–1: increases as ball reaches/passes that rail */
function progressToRailDarkness(progress: number, railIndex: number): number {
  if (railIndex === 0) {
    const t = progress / RAIL1_END;
    return Math.min(1, easeOutQuart(Math.max(0, t)));
  }
  if (railIndex === 1) {
    const start = DROP1_END;
    const end = RAIL2_END;
    const t = (progress - start) / (end - start);
    return Math.min(1, easeOutQuart(Math.max(0, t)));
  }
  if (railIndex === 2) {
    const start = DROP2_END;
    const end = RAIL3_END;
    const t = (progress - start) / (end - start);
    return Math.min(1, easeOutQuart(Math.max(0, t)));
  }
  return 0;
}

function hexToRgb(hex: string): [number, number, number] {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return [0, 0, 0];
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");
}

function lerpColor(from: string, to: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(from);
  const [r2, g2, b2] = hexToRgb(to);
  return rgbToHex(lerp(r1, r2, t), lerp(g1, g2, t), lerp(b1, b2, t));
}

interface MarbleRailsAnimationProps {
  progress: number;
  reduced: boolean;
}

export default function MarbleRailsAnimation({ progress, reduced }: MarbleRailsAnimationProps) {
  const pos = useMemo(() => progressToPosition(progress), [progress]);
  const scale = useMemo(() => progressToScale(progress), [progress]);
  const ballOpacity = useMemo(() => progressToBallOpacity(progress), [progress]);
  const rail0Darkness = useMemo(() => progressToRailDarkness(progress, 0), [progress]);
  const rail1Darkness = useMemo(() => progressToRailDarkness(progress, 1), [progress]);
  const rail2Darkness = useMemo(() => progressToRailDarkness(progress, 2), [progress]);

  const trailPositions = useMemo(() => {
    if (reduced || progress <= 0) return [];
    const samples: { x: number; y: number }[] = [];
    const count = TRAIL.count;
    for (let i = count; i >= 0; i--) {
      const p = Math.max(0, progress - (i * 0.012));
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
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-blue-active" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-violet" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-violet-active" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-emerald-active" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="marble-ball-gloss" cx="32%" cy="32%" r="50%">
              <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
              <stop offset="55%" stopColor={BALL.baseColor} stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
            </radialGradient>
          </defs>
          <Rail
            line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
            baseColor={RAIL_COLORS.blue}
            darkness={1}
            filterBase="url(#marble-rail-glow-blue)"
            filterActive="url(#marble-rail-glow-blue-active)"
          />
          <Rail
            line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
            baseColor={RAIL_COLORS.violet}
            darkness={1}
            filterBase="url(#marble-rail-glow-violet)"
            filterActive="url(#marble-rail-glow-violet-active)"
          />
          <Rail
            line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
            baseColor={RAIL_COLORS.emerald}
            darkness={1}
            filterBase="url(#marble-rail-glow-emerald)"
            filterActive="url(#marble-rail-glow-emerald-active)"
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
              opacity={0.92}
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
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-blue-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-violet" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-violet-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-ball-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="marble-ball-gloss" cx="32%" cy="32%" r="50%">
            <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
            <stop offset="55%" stopColor={BALL.baseColor} stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
          </radialGradient>
        </defs>

        <Rail
          line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
          baseColor={RAIL_COLORS.blue}
          darkness={rail0Darkness}
          filterBase="url(#marble-rail-glow-blue)"
          filterActive="url(#marble-rail-glow-blue-active)"
        />
        <Rail
          line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
          baseColor={RAIL_COLORS.violet}
          darkness={rail1Darkness}
          filterBase="url(#marble-rail-glow-violet)"
          filterActive="url(#marble-rail-glow-violet-active)"
        />
        <Rail
          line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
          baseColor={RAIL_COLORS.emerald}
          darkness={rail2Darkness}
          filterBase="url(#marble-rail-glow-emerald)"
          filterActive="url(#marble-rail-glow-emerald-active)"
        />

        {trailPositions.map((p, i) => {
          const opacity =
            TRAIL.baseOpacity * Math.pow(TRAIL.fadeFactor, trailPositions.length - 1 - i);
          return (
            <circle
              key={`trail-${i}-${p.x.toFixed(0)}-${p.y.toFixed(0)}`}
              cx={p.x}
              cy={p.y}
              r={BALL.radius * 0.55}
              fill="rgba(255,255,255,0.65)"
              opacity={opacity}
              style={{ filter: "blur(3px)" }}
            />
          );
        })}

        <g
          style={{
            transformOrigin: "0 0",
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          }}
        >
          <circle
            cx={0}
            cy={0}
            r={BALL.radius}
            fill="url(#marble-ball-gloss)"
            filter="url(#marble-ball-glow)"
            opacity={ballOpacity}
          />
        </g>
      </svg>
    </div>
  );
}

function Rail({
  line,
  baseColor,
  darkness,
  filterBase,
  filterActive,
}: {
  line: { x1: number; y1: number; x2: number; y2: number };
  baseColor: string;
  darkness: number;
  filterBase: string;
  filterActive: string;
}) {
  const strokeColor = lerpColor(baseColor, RAIL_DARKENING.targetColor, darkness);
  const glowOpacity = lerp(RAIL_OPACITY.base, RAIL_OPACITY.active, darkness);
  const lineOpacity = lerp(RAIL_OPACITY.centerLine, RAIL_OPACITY.centerLineActive, darkness);
  const strokeWidth = lerp(RAIL_GLOW.strokeWidthBase, RAIL_GLOW.strokeWidthActive, darkness);
  const filter = darkness > 0.5 ? filterActive : filterBase;

  return (
    <g>
      {/* Sharp center core */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={lineOpacity}
        fill="none"
      />
      {/* Soft outer glow */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={glowOpacity}
        fill="none"
        style={{ filter }}
      />
    </g>
  );
}
