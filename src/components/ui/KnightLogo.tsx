"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

const SHAPE_POINTS: Array<[number, number]> = [
  [-0.0420, -1.0000], [-0.0496, -0.9288], [-0.1024, -0.7985], [-0.3191, -0.6071],
  [-0.4857, -0.4189], [-0.4787, -0.3560], [-0.3687, -0.2384], [-0.2893, -0.2384],
  [-0.2511, -0.2797], [-0.2130, -0.3210], [-0.0960, -0.3210], [0.0903, -0.3586],
  [0.1125, -0.3751], [0.1004, -0.3560], [-0.1322, -0.0636], [-0.4882, 0.4139],
  [-0.5308, 0.7947], [-0.4406, 0.9841], [0.0083, 0.4641], [0.1316, 0.3350],
  [0.2460, 0.2320], [0.1583, 0.3687], [0.0184, 0.5734], [-0.1863, 0.8748],
  [-0.2486, 0.9873], [-0.2314, 1.0000], [-0.0381, 0.9415], [0.3312, 0.8239],
  [0.5308, 0.7546], [0.5238, 0.6828], [0.4863, 0.3783], [0.4933, 0.2289],
  [0.5168, 0.0509], [0.5289, -0.4539], [0.3922, -0.7565], [0.0292, -0.9975],
  [-0.0420, -1.0000],
];

interface KnightLogoProps {
  size?: number;
  spinInterval?: number;
}

const SPIN_DURATION_MS = 1800;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function KnightLogo({ size = 36, spinInterval = 8000 }: KnightLogoProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotionSafe();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size, false);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    mount.appendChild(renderer.domElement);

    const shape = new THREE.Shape();
    SHAPE_POINTS.forEach(([x, y], i) => {
      const fy = -y;
      if (i === 0) shape.moveTo(x, fy);
      else shape.lineTo(x, fy);
    });
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
      steps: 2,
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.018,
      bevelSize: 0.012,
      bevelSegments: 12,
    });
    geometry.center();
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0xd4a030,
      emissive: 0x7a4a00,
      emissiveIntensity: 0.55,
      metalness: 1.0,
      roughness: 0.12,
    });

    const knight = new THREE.Mesh(geometry, material);
    knight.scale.set(1.4, 1.4, 1.4);
    scene.add(knight);

    const ambient = new THREE.AmbientLight(0xffcc55, 1.8);
    const keyLight = new THREE.DirectionalLight(0xfff5d0, 5.0);
    keyLight.position.set(-3, 5, 4);
    const rimLight = new THREE.DirectionalLight(0xddeeff, 3.0);
    rimLight.position.set(4, 2, -3);
    const fillLight = new THREE.DirectionalLight(0xffd580, 2.5);
    fillLight.position.set(0, 1, 6);
    const sparkle = new THREE.PointLight(0xffe090, 5.0, 8);
    scene.add(ambient, keyLight, rimLight, fillLight, sparkle);

    let rafId = 0;
    let lastSpinAt = performance.now();
    let spinning = false;
    let spinStart = 0;
    let spinFrom = 0;
    let baseRotY = 0;
    let t = 0;

    const tick = (now: number) => {
      t += 0.012;

      if (!reducedMotion) {
        if (!spinning && now - lastSpinAt >= spinInterval) {
          spinning = true;
          spinStart = now;
          spinFrom = baseRotY;
          lastSpinAt = now;
        }
        if (spinning) {
          const progress = Math.min((now - spinStart) / SPIN_DURATION_MS, 1);
          baseRotY = spinFrom + easeInOutQuad(progress) * Math.PI * 2;
          if (progress >= 1) {
            baseRotY = spinFrom + Math.PI * 2;
            spinning = false;
          }
        }
        knight.rotation.y = baseRotY;
        knight.rotation.x = Math.sin(t * 0.4) * 0.03;
        sparkle.position.set(
          Math.sin(t * 0.7) * 2.5,
          1.5 + Math.sin(t * 0.4) * 0.8,
          Math.cos(t * 0.7) * 2.5 + 1
        );
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size, spinInterval, reducedMotion]);

  return (
    <div
      ref={mountRef}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
