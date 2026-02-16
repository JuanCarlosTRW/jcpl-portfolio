interface CaseCardProps {
  client: string;
  metric: string;
  summary: string;
  bullets: string[];
}

export default function CaseCard({ client, metric, summary, bullets }: CaseCardProps) {
  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-6 flex flex-col h-full">
      <div className="mb-2 text-[13px] font-semibold text-[var(--brand-accent)] uppercase tracking-wider">
        {client}
      </div>
      <div className="mb-2 text-2xl font-bold text-[var(--text-primary)]">{metric}</div>
      <div className="mb-3 text-sm text-[var(--text-secondary)]">{summary}</div>
      <ul className="mb-4 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-[var(--text-secondary)]">• {b}</li>
        ))}
      </ul>
    </div>
  );
}
