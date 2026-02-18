"use client";
import UnicornScene from "unicornstudio-react/next";

export default function FounderUnicornProfile() {
  return (
    <div
      className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-transparent flex items-center justify-center"
      style={{
        width: "160px",
        height: "160px",
        borderRadius: "9999px",
        overflow: "hidden",
        background: "transparent",
        position: "relative",
      }}
    >
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
