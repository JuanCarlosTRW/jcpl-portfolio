import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-alt)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] ph-cta-prominent";

  const variants = {
    solid:
      "bg-[var(--brand-alt)] text-[var(--bg-base)] hover:bg-[var(--brand-accent)] hover:text-[var(--bg-base)] ring-2 ring-[var(--brand-accent)]",
    outline:
      "border border-[var(--border-subtle)] text-[var(--text-main)] bg-[var(--bg-base)] ring-2 ring-[var(--brand-accent)] hover:border-[var(--brand-accent)] hover:bg-[rgba(255,255,255,0.04)] ph-cta-prominent",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
