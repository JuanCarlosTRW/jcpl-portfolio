"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PILL_AVATAR_SIZE = 68;

interface PillItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  hoverAccentColor: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  reducedMotion: boolean;
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

export default function PillItem({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  accentColor,
  hoverAccentColor,
  isActive,
  index,
  onClick,
  onKeyDown,
  reducedMotion,
}: PillItemProps) {
  const rgb = hexToRgb(accentColor);
  const hoverRgb = hexToRgb(hoverAccentColor);

  return (
    <motion.button
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      id={`services-tab-${index}`}
      aria-controls={`services-panel-${index}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      whileHover={reducedMotion ? undefined : { y: -1 }}
      className={cn(
        "group relative w-full text-left rounded-full border transition-all duration-200 ease-out",
        "flex items-center gap-4 md:gap-5 px-5 md:px-6 py-3 md:py-4 pr-10 min-h-[72px] md:min-h-[92px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sv-base",
        isActive
          ? "bg-[#0f2640]"
          : "border-white/[0.08] bg-sv-surface/80 hover:bg-sv-surface"
      )}
      style={
        isActive
          ? {
              borderColor: `${accentColor}99`,
              boxShadow: `0 0 28px rgba(${rgb},0.1)`,
              ["--tw-ring-color" as string]: `${accentColor}80`,
            }
          : {
              ["--tw-ring-color" as string]: `${hoverAccentColor}80`,
            }
      }
    >
      {/* Hover border tint for inactive pills */}
      {!isActive && (
        <span
          className="absolute -inset-px rounded-full border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            borderColor: `rgba(${hoverRgb},0.35)`,
          }}
          aria-hidden
        />
      )}

      {/* Avatar */}
      <div
        className="shrink-0 rounded-full overflow-hidden ring-2 transition-all duration-200"
        style={{
          ["--tw-ring-color" as string]: isActive ? `${accentColor}99` : "rgba(255,255,255,0.08)",
        }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={PILL_AVATAR_SIZE}
          height={PILL_AVATAR_SIZE}
          sizes="(max-width: 767px) 56px, (max-width: 1023px) 60px, 68px"
          className="h-14 w-14 md:h-[60px] md:w-[60px] lg:h-[68px] lg:w-[68px] object-cover rounded-full"
        />
      </div>

      {/* Text block */}
      <div className="flex-1 min-w-0">
        <h3
          className={cn(
            "text-[15px] md:text-base font-semibold text-white transition-colors relative z-[1] leading-tight",
            isActive && "text-white"
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[13px] md:text-sm text-sv-text-sub opacity-80 line-clamp-2 relative z-[1]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Status dot (active only) */}
      {isActive && (
        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-[1] shrink-0"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}
