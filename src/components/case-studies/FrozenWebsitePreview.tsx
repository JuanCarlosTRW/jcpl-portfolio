"use client";
import Image from "next/image";

interface FrozenWebsitePreviewProps {
  logoUrl: string;
  websiteUrl: string | null;
  title: string;
  metricsImageUrl?: string;
}

export default function FrozenWebsitePreview({
  logoUrl,
  websiteUrl,
  title,
  metricsImageUrl,
}: FrozenWebsitePreviewProps) {
  const hostname = websiteUrl
    ? (() => {
        try {
          return new URL(websiteUrl).hostname.replace(/^www\./, "");
        } catch {
          return "clientgrowth.ca";
        }
      })()
    : "clientgrowth.ca";

  const handleClick = () => {
    if (websiteUrl) {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    } else if (metricsImageUrl) {
      window.open(metricsImageUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      aria-label={websiteUrl ? `View ${title} website` : `View ${title} metrics`}
      onClick={handleClick}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#080F1F] cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2 transition"
    >
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 h-9 flex items-center px-3 bg-[#0D1526] border-b border-[rgba(255,255,255,0.06)] z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] ml-1.5" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] ml-1.5" />
        <span className="ml-3 bg-[rgba(255,255,255,0.06)] rounded px-2.5 py-0.5 text-[11px] font-mono text-[rgba(255,255,255,0.35)]">
          {hostname}
        </span>
      </div>

      {/* Main preview area with grid */}
      <div
        className="absolute inset-0 top-9 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #060D1F 0%, #0A1628 100%)",
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative w-[55%] h-[55%]">
          <Image
            src={logoUrl}
            alt={`${title} logo`}
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.15)] brightness-105"
            sizes="280px"
            priority={false}
          />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[rgba(6,13,31,0.75)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none">
        {websiteUrl ? "View Live →" : "View Metrics →"}
      </span>
    </button>
  );
}
