"use client";

interface Props {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: Props) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-cg-muted ${className}`}
    >
      {label}
    </p>
  );
}
