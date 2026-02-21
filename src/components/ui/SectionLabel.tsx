interface Props {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: Props) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase tracking-[0.14em] text-cg-muted ${className}`}
    >
      {label}
    </p>
  );
}
