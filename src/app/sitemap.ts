import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

const LAST_MODIFIED = new Date("2026-04-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
