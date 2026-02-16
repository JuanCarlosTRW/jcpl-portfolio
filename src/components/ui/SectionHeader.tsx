interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[var(--text-primary)] mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
