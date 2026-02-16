interface EvidenceArtifactsProps {
  artifacts: { type: string; src: string; alt: string }[];
}

export default function EvidenceArtifacts({ artifacts }: EvidenceArtifactsProps) {
  return (
    <div className="my-12">
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-4">
        Evidence Artifacts
      </h3>
      <div className="flex flex-wrap gap-4">
        {artifacts.map((a, i) => (
          <div
            key={i}
            className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-3 w-40 h-28 flex items-center justify-center"
          >
            {/* Replace with real images/screenshots if available */}
            <span className="text-xs text-[var(--text-muted)] text-center">{a.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
