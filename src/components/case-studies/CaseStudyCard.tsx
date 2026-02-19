import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import PreviewFrame from "./PreviewFrame";

type Props = {
  caseStudy: CaseStudy;
  onOpenPreview: () => void;
};

export default function CaseStudyCard({ caseStudy, onOpenPreview }: Props) {
  const domain =
    caseStudy.liveUrl && caseStudy.preview.type === "iframe"
      ? new URL(caseStudy.liveUrl).hostname.replace(/^www\./, "")
      : undefined;

  return (
    <div className="bg-[#0A1628] border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
      <PreviewFrame
        title={caseStudy.title}
        domain={domain || ""}
        screenshotUrl={caseStudy.preview.poster}
        onOpen={onOpenPreview}
      />
      <div className="text-xs uppercase tracking-[0.12em] text-[#2563EB] font-semibold mt-2">
        {caseStudy.industry}
      </div>
      <div className="text-lg font-bold text-white">{caseStudy.title}</div>
      <div className="text-sm text-[#E8EDF5]">{caseStudy.summary}</div>
      <div className="flex gap-4 mb-2">
        {caseStudy.metrics.map((m) => (
          <div key={m.label} className="text-xs text-[#8899BB] font-medium">
            <span className="text-white font-bold">{m.value}</span> {m.label}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="bg-[#2D5BFF] text-white rounded-lg px-4 py-2 font-semibold text-sm transition-colors duration-200 hover:bg-[#1D4ED8]"
        >
          Read Case Study
        </Link>
        <button
          type="button"
          className="bg-[#0A1628] text-[#2D5BFF] border border-[#2D5BFF]/30 rounded-lg px-4 py-2 font-semibold text-sm transition-colors duration-200 hover:bg-[#2D5BFF]/10"
          onClick={onOpenPreview}
        >
          Interactive Preview
        </button>
      </div>
    </div>
  );
}
