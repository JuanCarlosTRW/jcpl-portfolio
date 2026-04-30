"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { ReactNode } from "react";
import { getSceneOpacity } from "./sceneOpacity";
import { SCENE_FADE, TOTAL_SCENES } from "./sceneData";

interface Props {
  index: number;
  progress: MotionValue<number>;
  /**
   * Visual scenes are allowed a slightly wider fade than text so the
   * background motion feels continuous. Defaults to text fade.
   */
  fade?: number;
  children: ReactNode;
}

/**
 * Single source of truth for a scene visual's lifecycle: opacity,
 * visibility, and pointer-events. Replaces the per-scene useTransform
 * opacity logic each visual previously baked in itself.
 */
export default function SceneVisualGate({
  index,
  progress,
  fade = SCENE_FADE,
  children,
}: Props) {
  const opacity = useTransform(progress, (p) =>
    getSceneOpacity(p, index, TOTAL_SCENES, fade)
  );
  const visibility = useTransform(opacity, (o) => (o < 0.01 ? "hidden" : "visible"));

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        opacity,
        visibility,
        pointerEvents: "none",
        willChange: "opacity",
        contain: "layout paint",
      }}
    >
      {children}
    </motion.div>
  );
}
