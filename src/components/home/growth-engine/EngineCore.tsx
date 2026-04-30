"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMotionValueEvent, type MotionValue } from "motion/react";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene1: Scene;
  scene7: Scene;
  progress: MotionValue<number>;
}

// Drives R3F invalidate on every progress change so frameloop="demand" stays in sync
function ProgressBridge({ progress }: { progress: MotionValue<number> }) {
  const invalidate = useThree((s) => s.invalidate);
  useMotionValueEvent(progress, "change", () => invalidate());
  return null;
}

interface CoreProps {
  scene1: Scene;
  scene7: Scene;
  progress: MotionValue<number>;
}

function Core({ scene1, scene7, progress }: CoreProps) {
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const inner = useMemo(() => new THREE.IcosahedronGeometry(0.85, 1), []);
  const wire = useMemo(() => new THREE.IcosahedronGeometry(1.4, 2), []);

  useFrame((_state, delta) => {
    if (!groupRef.current || !wireframeRef.current) return;
    const p = progress.get();
    // Visibility: visible during scene 1 with full alpha and during scene 7 at lower alpha
    const s1Center = (scene1.start + scene1.end) / 2;
    const s7Center = (scene7.start + scene7.end) / 2;
    const distFromS1 = Math.abs(p - s1Center);
    const distFromS7 = Math.abs(p - s7Center);

    const w1 = Math.max(0, 1 - distFromS1 / 0.18);
    const w7 = Math.max(0, 1 - distFromS7 / 0.12);
    const visibility = Math.max(w1, w7 * 0.85);

    groupRef.current.visible = visibility > 0.01;
    if (!groupRef.current.visible) return;

    // Smooth slow rotation
    groupRef.current.rotation.y += delta * 0.1;
    groupRef.current.rotation.x = Math.sin(p * Math.PI * 2) * 0.15;

    // Scale breathes with hero progress
    const scale = 0.8 + 0.4 * w1 + 0.25 * w7;
    groupRef.current.scale.setScalar(scale);

    if (innerRef.current?.material instanceof THREE.MeshBasicMaterial) {
      innerRef.current.material.opacity = 0.6 * visibility;
    }
    if (wireframeRef.current.material instanceof THREE.LineBasicMaterial) {
      wireframeRef.current.material.opacity = 0.6 * visibility;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner glowing core */}
      <mesh ref={innerRef} geometry={inner}>
        <meshBasicMaterial color={ACCENT_HEX.gold} transparent opacity={0.6} />
      </mesh>
      {/* Wireframe halo */}
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[wire]} />
        <lineBasicMaterial color={ACCENT_HEX.cyan} transparent opacity={0.6} />
      </lineSegments>
      {/* Outer faint shell */}
      <mesh>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial color={ACCENT_HEX.cyan} transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export default function EngineCore({ scene1, scene7, progress }: Props) {
  return (
    <div className="absolute inset-0 z-20" aria-hidden="true">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ProgressBridge progress={progress} />
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 4]} intensity={0.8} color={ACCENT_HEX.gold} />
        <pointLight position={[-3, -2, 4]} intensity={0.5} color={ACCENT_HEX.cyan} />
        <Core scene1={scene1} scene7={scene7} progress={progress} />
      </Canvas>
    </div>
  );
}
