import { Metadata } from "next";
import { siteConfig } from "./content";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
  };
}
