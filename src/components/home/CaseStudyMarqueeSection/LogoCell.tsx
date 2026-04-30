"use client";

import type { LogoWithIndustry } from "@/components/hero/LogoLoopData";

type Props = {
  logo: LogoWithIndustry;
  ariaHidden?: boolean;
};

export default function LogoCell({ logo, ariaHidden }: Props) {
  return (
    <div
      className="csm-logo-cell"
      role={ariaHidden ? "presentation" : "listitem"}
      aria-hidden={ariaHidden || undefined}
    >
      <img
        src={logo.src}
        alt={ariaHidden ? "" : (logo.alt ?? logo.name)}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
