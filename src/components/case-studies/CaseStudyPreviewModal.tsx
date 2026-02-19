"use client";
import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "./CaseStudies";
import { Button } from "@/components/ui/Button";

type Props = {
  caseStudy: CaseStudy;
  open: boolean;
  onClose: () => void;
};

export default function CaseStudyPreviewModal({ caseStudy, open, onClose }: Props) {
  const [armed, setArmed] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [fallback, setFallback] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Focus management
  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [open]);

  // ESC/backdrop close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Fallback detection
  useEffect(() => {
    if (!open) return;
    setIframeLoaded(false);
    setFallback(false);
    const timer = setTimeout(() => {
      if (!iframeLoaded) setFallback(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [open, iframeLoaded]);

  // Restore focus to trigger
  useEffect(() => {
    if (!open && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-[#050B1A] border border-white/10 rounded-2xl shadow-lg max-w-[1100px] w-full mx-4 my-8 flex flex-col"
        style={{ minHeight: 420, maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-[#2563EB]/30 px-6 py-4">
          <div>
            <div className="text-lg font-bold text-white">{caseStudy.title}</div>
            <div className="text-xs text-[#8899BB]">{caseStudy.previewUrl}</div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
              Open Live Site
            </Button>
            <button
              ref={closeBtnRef}
              className="bg-[#0A1628] text-white rounded-lg px-3 py-2 font-semibold text-sm border border-white/10 hover:bg-[#2563EB]/10 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              onClick={onClose}
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
        {/* Modal content */}
        <div className="relative flex-1 flex flex-col items-center justify-center bg-[#0A1628]">
          {!fallback ? (
            <>
              {/* Arming layer */}
              {!armed && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 rounded-b-2xl cursor-pointer"
                  onClick={() => setArmed(true)}
                  tabIndex={0}
                  aria-label="Click to interact"
                >
                  <div className="bg-[#2563EB] text-white rounded-full px-4 py-2 font-semibold mb-4 shadow-sm">Click to interact</div>
                  <div className="text-xs text-[#E8EDF5]">This preview is interactive. Click to enable controls.</div>
                </div>
              )}
              {/* Iframe */}
              <iframe
                src={caseStudy.previewUrl}
                title={caseStudy.title}
                className="w-full h-[60vh] sm:h-[70vh] rounded-b-2xl transition-all"
                style={{
                  pointerEvents: armed ? "auto" : "none",
                  border: "none",
                  background: "#0A1628",
                }}
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setFallback(true)}
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-[60vh] sm:h-[70vh] p-8">
              {caseStudy.screenshotUrl && (
                <img
                  src={caseStudy.screenshotUrl}
                  alt="Site screenshot"
                  className="rounded-xl mb-6 max-w-xs border border-white/10"
                />
              )}
              <div className="text-white text-lg font-bold mb-2">Preview unavailable (site blocks embedding).</div>
              <div className="text-[#8899BB] text-sm mb-6">This site does not allow embedding. You can still open the live site below.</div>
              <div className="flex gap-2">
                <Button variant="primary" href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                  Open Live Site
                </Button>
                <Button variant="secondary" href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                  Open in new tab
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
