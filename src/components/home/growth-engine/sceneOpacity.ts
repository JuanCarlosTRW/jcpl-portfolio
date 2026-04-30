/**
 * Clean piecewise opacity for one of N evenly-spaced cinematic scenes.
 *
 *   |--fade--|---hold-1---|--fade--|
 *   start    inEnd        outStart end
 *
 * Returns 0 outside [start, end], so adjacent scenes hand off cleanly at
 * the segment boundary without ever both being visible at full opacity.
 */
export function getSceneOpacity(
  progress: number,
  index: number,
  totalScenes: number,
  fade = 0.035
): number {
  const segment = 1 / totalScenes;
  const start = index * segment;
  const end = (index + 1) * segment;
  const fadeInEnd = start + fade;
  const fadeOutStart = end - fade;

  if (progress < start || progress > end) return 0;
  if (progress < fadeInEnd) return clamp01((progress - start) / fade);
  if (progress > fadeOutStart) return clamp01((end - progress) / fade);
  return 1;
}

/**
 * Local progress within a scene's segment, clamped to [0, 1]. Useful for
 * driving sub-element timings inside a scene visual without depending on
 * the scene's fade state.
 */
export function getSceneLocalProgress(
  progress: number,
  index: number,
  totalScenes: number
): number {
  const segment = 1 / totalScenes;
  const start = index * segment;
  return clamp01((progress - start) / segment);
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
