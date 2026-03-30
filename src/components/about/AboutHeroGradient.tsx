"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function AboutHeroGradient() {
  return (
    <ShaderGradientCanvas
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={3.6}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#ffe18f"
        color2="#dbaf63"
        color3="#e1b16e"
        envPreset="city"
        grain="on"
        lightType="3d"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        type="plane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.4}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
