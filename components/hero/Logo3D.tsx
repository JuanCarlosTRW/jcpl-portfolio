"use client";

import { forwardRef, useRef, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

/* ── Tuning constants ──
 * Adjust these to change the 3D logo appearance quickly.
 */

// Extrusion depth & bevel
const EXTRUDE_DEPTH = 0.04;
const BEVEL_THICKNESS = 0.005;
const BEVEL_SIZE = 0.005;
const BEVEL_SEGMENTS = 2;

// Material: matte dark metal
const MAT_COLOR = "#1a2e24";
const MAT_ROUGHNESS = 0.75; // 0.65–0.85 range
const MAT_METALNESS = 0.3; // 0.2–0.4 range
const MAT_ENV_INTENSITY = 0.3;

// Lighting intensities
const KEY_LIGHT_INTENSITY = 0.8;
const RIM_LIGHT_INTENSITY = 0.4;
const AMBIENT_INTENSITY = 0.15;
const SWEEP_LIGHT_INTENSITY = 0.5;

// Sweep: one-shot light pass duration (seconds)
const SWEEP_DURATION = 1.2;
const SWEEP_X_START = -4;
const SWEEP_X_END = 4;

// Minimum shape area to keep (filters raster-trace artifacts)
const MIN_SHAPE_AREA = 50;

// Logo scale in world units
const LOGO_TARGET_WIDTH = 3.5;

/* ── Scene internals ── */

function computeShapeArea(shape: THREE.Shape): number {
  const pts = shape.getPoints(12);
  let area = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    area += (pts[j].x + pts[i].x) * (pts[j].y - pts[i].y);
  }
  return Math.abs(area / 2);
}

interface Logo3DSceneProps {
  svgUrl: string;
  animateIn: boolean;
  onReady?: () => void;
}

function Logo3DScene({ svgUrl, animateIn, onReady }: Logo3DSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const sweepRef = useRef<THREE.PointLight>(null);
  const sweepStarted = useRef(false);
  const sweepTime = useRef(0);
  const sweepDone = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    fetch(svgUrl)
      .then((r) => r.text())
      .then((text) => {
        const data = new SVGLoader().parse(text);
        const geometries: THREE.BufferGeometry[] = [];

        const extrudeSettings: THREE.ExtrudeGeometryOptions = {
          depth: EXTRUDE_DEPTH,
          bevelEnabled: true,
          bevelThickness: BEVEL_THICKNESS,
          bevelSize: BEVEL_SIZE,
          bevelSegments: BEVEL_SEGMENTS,
        };

        for (const path of data.paths) {
          const shapes = SVGLoader.createShapes(path);
          for (const shape of shapes) {
            if (computeShapeArea(shape) < MIN_SHAPE_AREA) continue;
            const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            geometries.push(geo);
          }
        }

        if (geometries.length === 0) return;

        // Merge all geometries into a single buffer for 1 draw call
        const merged = mergeGeometries(geometries, false);
        if (!merged) return;

        // Dispose individual geometries
        geometries.forEach((g) => g.dispose());

        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(MAT_COLOR),
          roughness: MAT_ROUGHNESS,
          metalness: MAT_METALNESS,
          envMapIntensity: MAT_ENV_INTENSITY,
        });

        const mesh = new THREE.Mesh(merged, material);
        group.add(mesh);

        // Center and scale
        const box = new THREE.Box3().setFromObject(group);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y);
        const s = LOGO_TARGET_WIDTH / maxDim;

        group.scale.set(s, -s, s); // Flip Y (SVG → Three.js)
        group.position.set(-center.x * s, center.y * s, 0);

        setLoaded(true);
        onReady?.();
      });
  }, [svgUrl, onReady]);

  // One-shot sweep light animation
  useFrame((_, delta) => {
    if (!animateIn || !loaded) return;

    // Start sweep on first frame after animateIn
    if (!sweepStarted.current) {
      sweepStarted.current = true;
      sweepTime.current = 0;
    }

    if (sweepDone.current) return;

    sweepTime.current += delta;
    const progress = Math.min(1, sweepTime.current / SWEEP_DURATION);

    if (sweepRef.current) {
      // Ease: smooth in-out
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      sweepRef.current.position.x = THREE.MathUtils.lerp(
        SWEEP_X_START,
        SWEEP_X_END,
        eased
      );

      // Fade out in last 30%
      if (progress > 0.7) {
        const fadeProgress = (progress - 0.7) / 0.3;
        sweepRef.current.intensity = SWEEP_LIGHT_INTENSITY * (1 - fadeProgress);
      }
    }

    if (progress >= 1) {
      sweepDone.current = true;
      if (sweepRef.current) sweepRef.current.intensity = 0;
    }
  });

  return (
    <>
      {/* Cool key light — angled front/side */}
      <directionalLight
        position={[2, 3, 4]}
        intensity={KEY_LIGHT_INTENSITY}
        color="#c8d8e8"
      />

      {/* Emerald rim light — subtle edge highlight */}
      <pointLight
        position={[-3, 1, -2]}
        intensity={RIM_LIGHT_INTENSITY}
        color="#50C878"
        distance={12}
      />

      {/* Soft ambient fill */}
      <ambientLight intensity={AMBIENT_INTENSITY} color="#0B3D2E" />

      {/* One-shot sweep light */}
      <pointLight
        ref={sweepRef}
        position={[SWEEP_X_START, 0.5, 3]}
        intensity={SWEEP_LIGHT_INTENSITY}
        color="#ffffff"
        distance={10}
        decay={2}
      />

      {/* Faint environment for subtle reflections */}
      <Environment preset="night" />

      {/* Logo mesh group */}
      <group ref={groupRef} />
    </>
  );
}

/* ── Exported wrapper ── */

interface Logo3DProps {
  animateIn?: boolean;
  onReady?: () => void;
}

const Logo3D = forwardRef<HTMLDivElement, Logo3DProps>(
  ({ animateIn = false, onReady }, ref) => {
    const stableOnReady = useCallback(() => {
      onReady?.();
    }, [onReady]);

    return (
      <div ref={ref} className="logo-3d-container">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <Logo3DScene
            svgUrl="/jcpl-signature.svg"
            animateIn={animateIn}
            onReady={stableOnReady}
          />
        </Canvas>
      </div>
    );
  }
);

Logo3D.displayName = "Logo3D";
export default Logo3D;
