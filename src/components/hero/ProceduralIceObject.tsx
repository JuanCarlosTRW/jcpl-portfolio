"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ProceduralIceObjectProps {
  scale?: number;
}

export default function ProceduralIceObject({
  scale = 1,
}: ProceduralIceObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Subtle rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.04;
  });

  return (
    <group scale={scale}>
      {/* Main ice monolith */}
      <RoundedBox
        ref={meshRef}
        args={[1.2, 2.4, 0.8]}
        radius={0.15}
        smoothness={4}
      >
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.95}
          roughness={0.15}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.03}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#A8C4D4"
        />
      </RoundedBox>

      {/* Soft rim light */}
      <pointLight
        position={[2, 1, 2]}
        intensity={0.6}
        color="#8FAE9D"
        distance={8}
      />

      {/* Directional light */}
      <directionalLight
        position={[-2, 3, 1]}
        intensity={0.4}
        color="#E9ECEF"
      />

      {/* Low ambient */}
      <ambientLight intensity={0.15} color="#8FAE9D" />
    </group>
  );
}
