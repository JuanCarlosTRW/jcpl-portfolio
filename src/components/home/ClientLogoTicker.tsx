"use client";

import Image from "next/image";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import LogoLoop from "@/components/home/LogoLoop";

export default function ClientLogoTicker() {
  return (
    <div
      style={{
        background: "#181410",
        paddingTop: 64,
        paddingBottom: 48,
        borderTop: "1px solid #2A2318",
        overflow: "hidden",
      }}
    >
      <p
        className="text-center uppercase"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#D4A853",
          marginBottom: 32,
        }}
      >
        CURRENT CLIENTS GENERATING QUALIFIED CALLS RIGHT NOW
      </p>

      {/* Edge-fade mask so logos fade in/out at the edges */}
      <div
        style={{
          position: "relative",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <LogoLoop
          logos={caseStudyLogos}
          speed={45}
          pauseOnHover
          logoHeight={44}
          gap={72}
          ariaLabel="Client logos"
          renderItem={(item, key) => {
            const logoItem = item as { src: string; alt?: string; industryLabel?: string };
            return (
              <div key={key} className="flex flex-col items-center gap-2">
                <Image
                  src={logoItem.src}
                  alt={logoItem.alt ?? ""}
                  width={160}
                  height={44}
                  quality={80}
                  sizes="(max-width: 768px) 120px, 160px"
                  loading="lazy"
                  draggable={false}
                  className="object-contain"
                  style={{
                    height: 44,
                    width: "auto",
                    maxWidth: 160,
                    /* Override the default brightness/invert filter — show logos as-is */
                    filter: "none",
                    opacity: 1,
                    transition: "opacity 250ms ease",
                  }}
                />
                {logoItem.industryLabel && (
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "#504840",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {logoItem.industryLabel}
                  </span>
                )}
              </div>
            );
          }}
        />
      </div>

      <p
        className="text-center"
        style={{ fontSize: "0.85rem", color: "#6B6360", marginTop: 32, marginBottom: 0 }}
      >
        Five industries. One growth system.
      </p>
    </div>
  );
}
