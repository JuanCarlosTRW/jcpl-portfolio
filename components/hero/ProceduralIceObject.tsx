"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  RoundedBox,
  MeshTransmissionMaterial,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════
   CONFIGURABLE CONSTANTS
   ═══════════════════════════════════════════════════ */
const ROTATION_SPEED = 0.12;
const ROTATION_AMPLITUDE = 0.06;
const MOUSE_INFLUENCE = 0.15;
const MONOLITH_COLOR = "#B0CDD8";
const RIM_COLOR = "#8FAE9D";
const KEY_COLOR = "#E4E8EC";

interface ProceduralIceObjectProps {
  scale?: number;
  reducedMotion?: boolean;
}

export default function ProceduralIceObject({
  scale = 1,
  reducedMotion = false,
}: ProceduralIceObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.elapsedTime;

    // Subtle autonomous rotation
    meshRef.current.rotation.y =
      Math.sin(t * ROTATION_SPEED) * ROTATION_AMPLITUDE;
    meshRef.current.rotation.x =
      Math.cos(t * ROTATION_SPEED * 0.7) * (ROTATION_AMPLITUDE * 0.5);

    // Mouse-reactive tilt (small amplitude)
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * MOUSE_INFLUENCE,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * MOUSE_INFLUENCE * 0.5,
        0.05
      );
    }
  });

  return (
    <>
      {/* Environment for realistic reflections */}
      <Environment preset="night" />

      <group ref={groupRef} scale={scale}>
        <Float
          speed={reducedMotion ? 0 : 1.5}
          rotationIntensity={0}
          floatIntensity={reducedMotion ? 0 : 0.4}
          floatingRange={[-0.08, 0.08]}
        >
          {/* Main ice monolith — tall rounded form */}
          <RoundedBox
            ref={meshRef}
            args={[1.1, 2.6, 0.9]}
            radius={0.18}
            smoothness={6}
            castShadow
          >
            <MeshTransmissionMaterial
              backside
              samples={8}
              resolution={256}
              transmission={0.92}
              roughness={0.12}
              thickness={2.0}
              ior={1.45}
              chromaticAberration={0.04}
              anisotropy={0.3}
              distortion={0.08}
              distortionScale={0.15}
              temporalDistortion={0.08}
              color={MONOLITH_COLOR}
              attenuationColor="#D4E8F0"
              attenuationDistance={1.2}
            />
          </RoundedBox>

          {/* Inner frosted core — smaller nested shape */}
          <RoundedBox
            args={[0.6, 1.8, 0.4]}
            radius={0.12}
            smoothness={4}
            position={[0, 0.1, 0]}
          >
            <meshPhysicalMaterial
              color="#C8DDE6"
              roughness={0.6}
              metalness={0.05}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
            />
          </RoundedBox>
        </Float>

        {/* Lighting rig */}

        {/* Key light — slightly warm, from top-left */}
        <directionalLight
          position={[-3, 4, 2]}
          intensity={0.5}
          color={KEY_COLOR}
        />

        {/* Rim light — emerald tint, from behind */}
        <pointLight
          position={[2.5, 1, -2]}
          intensity={0.8}
          color={RIM_COLOR}
          distance={10}
        />

        {/* Fill — cool, from right */}
        <pointLight
          position={[3, -1, 2]}
          intensity={0.3}
          color="#A8C4D4"
          distance={8}
        />

        {/* Top spot for specular highlight */}
        <spotLight
          position={[0, 5, 3]}
          angle={0.35}
          penumbra={0.8}
          intensity={0.4}
          color="#FFFFFF"
          distance={12}
        />

        {/* Low ambient fill */}
        <ambientLight intensity={0.08} color="#8FAEAD" />
      </group>
    </>
  );
}
