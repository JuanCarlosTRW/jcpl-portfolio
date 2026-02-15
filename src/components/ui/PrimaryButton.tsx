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
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33ccff] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-ink)]";

  const variants = {
    solid:
      "bg-[var(--text-main)] text-[var(--bg-ink)] hover:bg-[var(--accent-emerald)] hover:text-[var(--bg-ink)]",
    outline:
      "border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.04)]",
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
