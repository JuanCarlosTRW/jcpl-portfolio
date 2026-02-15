"use client";

import StarBorder from "@/components/ui/StarBorder";

/**
 * FounderCard — premium fallback card for founder photo.
 * Uses StarBorder + brand gradient when no photo is available.
 * When a photo becomes available, simply swap the inner content.
 */
export default function FounderCard() {
  return (
    <StarBorder variant="alt" speed="7s" className="rounded-2xl">
      <div className="relative rounded-2xl bg-[var(--bg-surface)] overflow-hidden aspect-[3/4] flex flex-col items-center justify-center">
        {/* Ambient gradient background */}
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(127,95,255,0.15), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(51,204,255,0.10), transparent 60%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
          {/* Monogram */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20">
            <span className="text-3xl font-bold text-[var(--brand-accent)]">
              JC
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white">Juan Carlos</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Growth Systems Partner
            </p>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] px-4 py-1.5 mt-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              Accepting clients
            </span>
          </div>
        </div>
      </div>
    </StarBorder>
  );
}
