import React, { useRef, useEffect, MutableRefObject } from "react";

type PrismProps = {
  height: number;
  baseWidth: number;
  animationType: string;
  glow: number;
  noise: number;
  offset: { x: number; y: number };
  scale: number;
  transparent: boolean;
  hueShift: number;
  colorFrequency: number;
  timeScale: number;
  hoverStrength: number;
  inertia: number;
  bloom: number;
  suspendWhenOffscreen: boolean;
};

declare const renderer: any;
declare const gl: any;
declare const program: any;
declare const mesh: any;
declare const dpr: number;
declare const iResBuf: number[];
declare const offsetPxBuf: number[];
declare const RSX: number;
declare const RSY: number;
declare const RSZ: number;
declare const TS: number;

let raf = 0;

declare const t0: number;
declare const startRAF: () => void;
declare const stopRAF: () => void;
declare const pointer: { x: number; y: number; inside: boolean };
declare const onPointerMove: ((e: any) => void) | null;
declare const onLeave: () => void;
declare const onBlur: () => void;
declare const lerp: (a: number, b: number, t: number) => number;
declare const wX: number;
declare const wY: number;
declare const wZ: number;
declare const phX: number;
declare const phZ: number;

declare const setMat3FromEuler: (
  yawY: number,
  pitchX: number,
  rollZ: number,
  out: Float32Array
) => Float32Array;

const Prism = ({
  height,
  baseWidth,
  animationType,
  glow,
  noise,
  offset,
  scale,
  transparent,
  hueShift,
  colorFrequency,
  timeScale,
  hoverStrength,
  inertia,
  bloom,
  suspendWhenOffscreen,
}: PrismProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h);
      iResBuf[0] = gl.drawingBufferWidth;
      iResBuf[1] = gl.drawingBufferHeight;
      offsetPxBuf[0] = offset?.x * dpr;
      offsetPxBuf[1] = offset?.y * dpr;
      program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * scale);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const rotBuf = new Float32Array(9);

    const render = (t: number) => {
      const time = (t - t0) * 0.001;
      program.uniforms.iTime.value = time;

      let continueRAF = true;

      if (animationType === "hover") {
        const maxPitch = 0.6 * hoverStrength;
        const maxYaw = 0.6 * hoverStrength;
        const targetYaw = (pointer.inside ? -pointer.x : 0) * maxYaw;
        const targetPitch = (pointer.inside ? pointer.y : 0) * maxPitch;
        const prevYaw = yaw;
        const prevPitch = pitch;
        const prevRoll = roll;
        yaw = lerp(prevYaw, targetYaw, inertia);
        pitch = lerp(prevPitch, targetPitch, inertia);
        roll = lerp(prevRoll, 0, 0.1);
        program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);

        if (NOISE_IS_ZERO) {
          const settled =
            Math.abs(yaw - targetYaw) < 1e-4 &&
            Math.abs(pitch - targetPitch) < 1e-4 &&
            Math.abs(roll) < 1e-4;
          if (settled) continueRAF = false;
        }
      } else if (animationType === "3drotate") {
        const tScaled = time * timeScale;
        yaw = tScaled * wY;
        pitch = Math.sin(tScaled * wX + phX) * 0.6;
        roll = Math.sin(tScaled * wZ + phZ) * 0.5;
        program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);
        if (timeScale < 1e-6) continueRAF = false;
      } else {
        rotBuf[0] = 1;
        rotBuf[1] = 0;
        rotBuf[2] = 0;
        rotBuf[3] = 0;
        rotBuf[4] = 1;
        rotBuf[5] = 0;
        rotBuf[6] = 0;
        rotBuf[7] = 0;
        rotBuf[8] = 1;
        program.uniforms.uRot.value = rotBuf;
        if (timeScale < 1e-6) continueRAF = false;
      }

      renderer.render({ scene: mesh });
      if (continueRAF) {
        raf = requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    if (suspendWhenOffscreen) {
      const io = new IntersectionObserver((entries) => {
        const vis = entries.some((e) => e.isIntersecting);
        if (vis) startRAF();
        else stopRAF();
      });
      io.observe(container);
      startRAF();
      const extendedContainer = container as ExtendedHTMLDivElement;
      extendedContainer.__prismIO = io;
    } else {
      startRAF();
    }

    return () => {
      stopRAF();
      ro.disconnect();
      if (animationType === "hover") {
        if (onPointerMove) window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("blur", onBlur);
      }
      if (suspendWhenOffscreen) {
        const extendedContainer = container as ExtendedHTMLDivElement;
        const io = extendedContainer.__prismIO;
        if (io) io.disconnect();
        delete extendedContainer.__prismIO;
      }
      if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
    };
  }, [
    height,
    baseWidth,
    animationType,
    glow,
    noise,
    offset?.x,
    offset?.y,
    scale,
    transparent,
    hueShift,
    colorFrequency,
    timeScale,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
  ]);

  let yaw = 0;
  let pitch = 0;
  let roll = 0;
  let targetYaw = 0;
  let targetPitch = 0;
  const NOISE_IS_ZERO = NOISE < 1e-6;

  return <div className="prism-container" ref={containerRef} />;
};

export default Prism;

interface ExtendedHTMLDivElement extends HTMLDivElement {
  __prismIO?: IntersectionObserver;
}

const NOISE = 0.5; // Default value for NOISE, adjust as needed