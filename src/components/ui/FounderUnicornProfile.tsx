"use client";
import UnicornScene from "unicornstudio-react/next";

export default function FounderUnicornProfile() {
  return (
    <div
      className="overflow-hidden w-full max-w-[768px] aspect-[3/4] mx-auto"
      style={{
        borderRadius: "32px",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
    </div>
  );
}
