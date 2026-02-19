import { useState } from "react";
import CaseStudyPreviewModal from "./CaseStudyPreviewModal";
import { Button } from "@/components/ui/Button";

export type CaseStudy = {
  id: string;
  overline: string;
  title: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  previewUrl: string;
  liveUrl: string;
  screenshotUrl?: string;
  caseStudyUrl?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "barbershop-90-clients",
    overline: "Barbershop",
    title: "90 Clients in 30 Days",
    outcome: "Booked out with paid ads + premium site.",
    metrics: [
      { label: "Booked Calls", value: "90" },
      { label: "Ad Spend", value: "$350" },
    ],
    previewUrl: "https://barbershop.clientgrowth.ca",
    liveUrl: "https://barbershop.clientgrowth.ca",
    screenshotUrl: "/screenshots/barbershop.png",
    caseStudyUrl: "/case-studies/barbershop-90-clients",
  },
  // Add more case studies here...
];

export default function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-[#050B1A] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Case Studies</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map(cs => (
            <div key={cs.id} className="bg-[#0A1628] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.12em] text-[#2563EB] font-semibold mb-1">{cs.overline}</div>
              <div className="text-lg font-bold text-white mb-1">{cs.title}</div>
              <div className="text-sm text-[#E8EDF5] mb-2">{cs.outcome}</div>
              <div className="flex gap-4 mb-2">
                {cs.metrics.map(m => (
                  <div key={m.label} className="text-xs text-[#8899BB] font-medium">
                    <span className="text-white font-bold">{m.value}</span> {m.label}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <button
                  className="bg-[#2563EB] text-white rounded-lg px-4 py-2 font-semibold text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  onClick={() => setOpenId(cs.id)}
                >
                  Live Preview
                </button>
                <Button variant="secondary" href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                  Open Live Site
                </Button>
                {cs.caseStudyUrl && (
                  <a
                    href={cs.caseStudyUrl}
                    className="text-[#2563EB] text-xs underline ml-auto"
                  >
                    View Breakdown
                  </a>
                )}
              </div>
              {openId === cs.id && (
                <CaseStudyPreviewModal
                  caseStudy={cs}
                  open={true}
                  onClose={() => setOpenId(null)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
