interface BeforeAfterStripProps {
  data: { before: string; after: string };
}

export default function BeforeAfterStrip({ data }: BeforeAfterStripProps) {
  return (
    <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <span className="text-xs uppercase text-[var(--text-muted)] mb-1">Before</span>
        <span className="text-lg font-semibold text-[var(--text-secondary)] bg-[var(--bg-surface)] px-4 py-2 rounded">
          {data.before}
        </span>
      </div>
      <span className="text-2xl text-[var(--brand-accent)] font-bold">→</span>
      <div className="flex flex-col items-center">
        <span className="text-xs uppercase text-[var(--text-muted)] mb-1">After</span>
        <span className="text-lg font-semibold text-[var(--text-primary)] bg-[var(--bg-surface)] px-4 py-2 rounded">
          {data.after}
        </span>
      </div>
    </div>
  );
}
