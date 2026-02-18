"use client";
import UnicornScene from "unicornstudio-react/next";

export default function FounderUnicornProfile() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full overflow-hidden border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/10">
      <UnicornScene
        projectId="BfUPDU4SyzVD3w4unVC6"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        production={true}
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={true}
      />
    </div>
  );
}
