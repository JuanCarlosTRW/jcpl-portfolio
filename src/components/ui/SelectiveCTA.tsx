interface SelectiveCTAProps {
  label: string;
  href: string;
  note?: string;
}

export default function SelectiveCTA({ label, href, note }: SelectiveCTAProps) {
  return (
    <div className="text-center">
      <a
        href={href}
        className="inline-flex items-center px-8 py-4 min-h-[48px] bg-[var(--text-primary)] text-[var(--bg-base)] text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
      >
        {label}
      </a>
      {note && (
        <p className="mt-4 text-[13px] text-[var(--text-muted)]">{note}</p>
      )}
    </div>
  );
}
