import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
}

export const Button = ({
  variant = "primary",
  children,
  href,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "h-14 sm:h-[56px] w-full sm:w-auto px-6 rounded-[16px] font-semibold text-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 flex items-center justify-center gap-2";
  const primary =
    "bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_2px_12px_rgba(124,58,237,0.12)] border border-white/10 text-white relative";
  const secondary =
    "bg-white/5 border border-white/14 text-white/90 hover:bg-white/10 hover:border-white/20";
  const hover =
    variant === "primary"
      ? "hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(124,58,237,0.18)] active:translate-y-1"
      : "hover:-translate-y-1 active:translate-y-1";
  const arrow =
    variant === "primary"
      ? (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        )
      : null;

  const btnClass = clsx(
    base,
    variant === "primary" ? primary : secondary,
    hover,
    className,
    "group"
  );

  return (
    <a href={href} className={btnClass} {...props}>
      {children}
      {arrow}
    </a>
  );
};
