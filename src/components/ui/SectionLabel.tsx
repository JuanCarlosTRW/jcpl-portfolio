"use client";

interface Props {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
      {label}
    </div>
  );
}
