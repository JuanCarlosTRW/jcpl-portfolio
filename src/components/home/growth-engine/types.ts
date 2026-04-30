export type AccentColor = "gold" | "cyan" | "duo";

export type VisualType =
  | "engine-core"
  | "market-grid"
  | "ads-flow"
  | "website-wireframe"
  | "automation-pipeline"
  | "authority-compound"
  | "system-diagram";

export interface Scene {
  id: string;
  index: number;
  headline: string;
  subheadline: string;
  visualType: VisualType;
  accent: AccentColor;
  start: number;
  end: number;
  cta?: { label: string; href: string };
}

export const ACCENT_HEX = {
  gold: "#D4A853",
  cyan: "#5AD7FF",
  cream: "#F5F0E8",
  base: "#0D0B09",
} as const;
