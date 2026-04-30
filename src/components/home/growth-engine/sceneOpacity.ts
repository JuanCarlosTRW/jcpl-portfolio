import type { Scene } from "./types";

const FADE = 0.05;

export function sceneOpacity(progress: number, scene: Scene): number {
  const { start, end } = scene;
  if (progress < start - FADE || progress > end + FADE) return 0;
  if (progress < start) {
    return (progress - (start - FADE)) / FADE;
  }
  if (progress > end) {
    return 1 - (progress - end) / FADE;
  }
  return 1;
}

export function sceneTextProgress(progress: number, scene: Scene): number {
  const { start, end } = scene;
  if (progress < start) return 0;
  if (progress > end) return 1;
  return (progress - start) / (end - start);
}
