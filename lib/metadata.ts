import { Metadata } from "next";
import { siteConfig } from "./content";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    ...overrides,
  } as Metadata;
}
