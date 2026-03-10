"use client";
import { useRouter } from "next/navigation";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

function PulseDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full bg-sv-primary"
      style={{
        width: size,
        height: size,
        animation: "pulseDot 2s ease-in-out infinite",
      }}
    />
  );
}

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/results/${cs.caseStudySlug}`);
  };

  return (
    <div
      className="bg-sv-surface border border-[rgba(212,168,83,0.12)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(212,168,83,0.35)] hover:-translate-y-[2px]"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick();
      }}
    >
      {/* Preview */}
      <div className="border-b border-[rgba(212,168,83,0.08)]">
        <FrozenWebsitePreview
          logoUrl={cs.logoUrl}
          websiteUrl={cs.websiteUrl}
          title={cs.title}
          metricsImageUrl={cs.metricsImageUrl}
          onClickOverride={handleCardClick}
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Industry overline */}
        <div className="text-[10px] uppercase tracking-[0.12em] text-sv-text-sub mb-2">
          {cs.industry}
        </div>

        {/* Title */}
        <div className="text-[18px] font-bold text-white mb-2 tracking-[-0.01em]">
          {cs.title}
        </div>

        {/* Outcome */}
        <div className="text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.55] mb-3">
          {cs.inProgress
            ? "System live. Performance data being collected."
            : cs.outcome}
        </div>

        {/* Result tag pill */}
        {cs.resultTag && (
          <div className="mb-5 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/30 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-zinc-400">{cs.resultTag}</span>
          </div>
        )}

        {/* Metrics pills or In-Progress badge */}
        {/* Absolute Painting: System live tag */}
        {cs.inProgress && cs.id === "absolute-painting" && (
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.2)] rounded-full px-[14px] py-[5px]">
              <PulseDot />
              <span className="text-[12px] text-sv-primary font-medium">
                System live
              </span>
            </span>
          </div>
        )}
        {/* Metrics pills */}
        {!cs.inProgress && cs.metrics.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {cs.metrics.map((m) => (
              <span
                key={m.label}
                className="bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.18)] rounded-full px-3 py-[3px] flex items-center"
              >
                <span className="text-[12px] font-bold text-white">
                  {m.value}
                </span>
                <span className="text-[11px] text-sv-text-sub ml-1.5">
                  {m.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* CTA row */}
        <div className="flex gap-2.5 flex-wrap items-center">
          {cs.websiteUrl && cs.title !== "Triple W Rentals" && (
            <button
              type="button"
              className="bg-sv-primary text-white px-4 py-2 rounded-md text-[13px] font-semibold hover:bg-sv-primary-hov transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                window.open(cs.websiteUrl!, "_blank", "noopener,noreferrer");
              }}
            >
              View Live Website →
            </button>
          )}
          {cs.id === "triple-w-rentals" && (
            <button
              type="button"
              disabled
              className="border border-[rgba(255,255,255,0.15)] text-[#D2C9B8] bg-transparent px-4 py-2 rounded-md text-[13px] font-medium cursor-default"
              style={{ opacity: 1 }}
            >
              Project is still going
            </button>
          )}
          {/* Absolute Painting: Case study coming button */}
          {cs.id === "absolute-painting" ? (
            <button
              type="button"
              disabled
              className="border border-[rgba(255,255,255,0.15)] text-[#D2C9B8] bg-transparent px-4 py-2 rounded-md text-[13px] font-medium cursor-default"
              style={{ opacity: 1 }}
            >
              Case study coming
            </button>
          ) : (
            <button
              type="button"
              className="border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.6)] bg-transparent px-4 py-2 rounded-md text-[13px] font-medium hover:border-[rgba(212,168,83,0.4)] hover:text-white transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/results/${cs.caseStudySlug}`);
              }}
            >
              View Case Study
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
