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
  return {
    title: `${cs.title} | Client Growth Results`,
    description: cs.outcome,
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
