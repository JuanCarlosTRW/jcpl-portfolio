import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/caseStudiesContent";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudySituation from "@/components/case-studies/CaseStudySituation";
import CaseStudyDiagnosis from "@/components/case-studies/CaseStudyDiagnosis";
import CaseStudyArchitecture from "@/components/case-studies/CaseStudyArchitecture";
import CaseStudyResults from "@/components/case-studies/CaseStudyResults";
import CaseStudyInsight from "@/components/case-studies/CaseStudyInsight";
import CaseStudyFinalCTA from "@/components/case-studies/CaseStudyFinalCTA";
import ClientScrollToTop from "@/components/case-studies/ClientScrollToTop";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const title = `${study.headline} | Case Study`;
  const description = study.subtext;
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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <ClientScrollToTop>
      <main className="bg-[#0E0E0F]">
        {/* 1️⃣ Hero — Outcome Dominance */}
        <CaseStudyHero study={study} />

        {/* 2️⃣ The Situation */}
        <CaseStudySituation study={study} />

        {/* 3️⃣ Strategic Diagnosis */}
        <CaseStudyDiagnosis study={study} />

        {/* 4️⃣ Growth Architecture */}
        <CaseStudyArchitecture study={study} />

        {/* 5️⃣ Results */}
        <CaseStudyResults study={study} />

        {/* 6️⃣ Strategic Insight */}
        <CaseStudyInsight study={study} />

        {/* 7️⃣ Final CTA */}
        <CaseStudyFinalCTA study={study} />
      </main>
    </ClientScrollToTop>
  );
}
