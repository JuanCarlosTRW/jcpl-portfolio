import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";
import { caseStudies as libCaseStudies } from "@/lib/caseStudiesContent";
import { caseStudies as contentCaseStudies } from "@/content/caseStudies";

const LAST_MODIFIED = new Date("2026-02-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/results", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/apply", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const resultsSlugs = contentCaseStudies.map((cs) => ({
    url: `${baseUrl}/results/${cs.caseStudySlug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudySlugs = libCaseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...resultsSlugs,
    ...caseStudySlugs,
  ];
}
