import { notFound } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.caseStudySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.caseStudySlug === slug);
  if (!cs) return {};
  const title = `${cs.title} | Client Growth Results`;
  const description = cs.outcome;
  const ogImage = "https://clientgrowth.ca/og.png";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.caseStudySlug === slug);
  if (!cs) notFound();
  return <CaseStudyDetail caseStudy={cs} />;
}
