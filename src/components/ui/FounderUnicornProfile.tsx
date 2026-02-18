"use client";
import UnicornScene from "unicornstudio-react/next";

export default function FounderUnicornProfile() {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: "768px",
        height: "1024px",
        borderRadius: "32px", // Optional: for rounded corners
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
