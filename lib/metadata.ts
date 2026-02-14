import { Metadata } from "next";
import { siteConfig } from "./content";

// Accept arbitrary overrides (some pages pass non-standard keys like `path`)
export function buildMetadata(overrides?: Record<string, any>): Metadata {
  const base: Record<string, any> = {
    title: siteConfig.title,
    description: siteConfig.description,
  };
  return { ...(base as any), ...(overrides || {}) } as Metadata;
}
