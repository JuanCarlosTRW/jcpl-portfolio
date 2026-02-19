"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaseStudy } from "@/content/caseStudies";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
};

export default function PreviewModal({ isOpen, onClose, caseStudy }: Props) {
  const [armed, setArmed] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setArmed(false);
      setIframeError(false);
      closeBtnRef.current?.focus();
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (triggerRef.current) triggerRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  const showIframe =
    caseStudy.preview.type === "iframe" &&
    caseStudy.liveUrl &&
    !iframeError;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-[#050B1A] border border-white/10 rounded-3xl shadow-lg max-w-5xl w-full mx-4 my-8 flex flex-col"
        style={{ minHeight: 420, maxHeight: "85vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2D5BFF]/30 px-6 py-4">
          <div>
            <div className="text-lg font-bold text-white">{caseStudy.title}</div>
            <div className="text-xs text-[#8899BB]">{caseStudy.liveUrl}</div>
          </div>
          <div className="flex gap-2">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D5BFF] text-white rounded-lg px-4 py-2 font-semibold text-sm transition-colors duration-200 hover:bg-[#1D4ED8]"
              >
                Open Live Site
              </a>
            )}
            <button
              ref={closeBtnRef}
              className="bg-[#0A1628] text-white rounded-lg px-3 py-2 font-semibold text-sm border border-white/10 hover:bg-[#2D5BFF]/10 focus-visible:ring-2 focus-visible:ring-[#2D5BFF]"
              onClick={onClose}
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
        {/* Body */}
        <div className="relative flex-1 flex flex-col items-center justify-center bg-[#0A1628]">
          {showIframe ? (
            <>
              {!armed && (
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 rounded-b-3xl cursor-pointer"
                  onClick={() => setArmed(true)}
                  tabIndex={0}
                  aria-label="Click to interact"
                >
                  <div className="bg-[#2D5BFF] text-white rounded-full px-4 py-2 font-semibold mb-4 shadow-sm">
                    Click to interact
                  </div>
                  <div className="text-xs text-[#E8EDF5]">
                    This preview is interactive. Click to enable controls.
                  </div>
                </div>
              )}
              <iframe
                src={caseStudy.liveUrl}
                title={caseStudy.title}
                className="w-full h-[60vh] sm:h-[70vh] rounded-b-3xl transition-all"
                style={{
                  pointerEvents: armed ? "auto" : "none",
                  border: "none",
                  background: "#0A1628",
                }}
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => setIframeError(true)}
              />
              {/* Poster fallback if iframe fails */}
              {iframeError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1628]">
                  <Image
                    src={caseStudy.preview.poster}
                    alt="Preview"
                    width={600}
                    height={375}
                    className="rounded-xl mb-6 object-cover"
                  />
                  <div className="text-white text-lg font-bold mb-2">
                    Preview unavailable
                  </div>
                  <div className="text-[#8899BB] text-sm mb-6">
                    This website blocks embedding. Open it in a new tab.
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-[60vh] sm:h-[70vh] p-8">
              <Image
                src={caseStudy.preview.poster}
                alt="Preview"
                width={600}
                height={375}
                className="rounded-xl mb-6 object-cover"
              />
              <div className="text-white text-lg font-bold mb-2">
                Preview unavailable
              </div>
              <div className="text-[#8899BB] text-sm mb-6">
                This website blocks embedding. Open it in a new tab.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
