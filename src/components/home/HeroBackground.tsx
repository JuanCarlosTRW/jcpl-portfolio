import { useRef, useEffect } from "react";
import UnicornScene from "unicornstudio-react/next";

// Placeholder for WebGL/GLSL canvas effect
export default function HeroBackground() {
  // For now, render a premium dark gradient background
  return (
    <div className="absolute inset-0 z-0">
      <UnicornScene
        projectId="UykNLkYklTyqyIZODvIi"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
        width="100%"
        height="100vh"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        production
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={true}
      />
    </div>
  );
}
