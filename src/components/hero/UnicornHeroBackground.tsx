"use client";
import UnicornScene from "unicornstudio-react/next";

export default function UnicornHeroBackground() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <UnicornScene
        projectId="fSdFsn2BDZ3UDERv6Wix"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        production={true}
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={false}
      />
    </div>
  );
}
