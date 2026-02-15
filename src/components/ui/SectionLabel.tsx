"use client";

interface Props {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-alt)] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
      {label}
    </div>
  );
}
