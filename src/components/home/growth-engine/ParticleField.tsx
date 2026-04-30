"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: "gold" | "cyan" | "cream";
  alpha: number;
  twinkle: number;
}

interface Props {
  active: boolean;
  density?: "desktop" | "tablet";
}

const HUE_RGB = {
  gold: "212, 168, 83",
  cyan: "90, 215, 255",
  cream: "245, 240, 232",
};

export default function ParticleField({ active, density = "desktop" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = density === "desktop" ? 60 : 25;

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      particlesRef.current = Array.from({ length: count }, () => {
        const huePool: Particle["hue"][] = ["cream", "cream", "cream", "gold", "cyan"];
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.06 - 0.02,
          r: 0.6 + Math.random() * 1.6,
          hue: huePool[Math.floor(Math.random() * huePool.length)],
          alpha: 0.18 + Math.random() * 0.42,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    resize();
    init();

    let last = performance.now();

    const tick = (t: number) => {
      const dt = Math.min(50, t - last);
      last = t;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.twinkle += dt * 0.0012;
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;

        const tw = 0.55 + 0.45 * Math.sin(p.twinkle);
        const a = p.alpha * tw;
        const rgb = HUE_RGB[p.hue];

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb}, ${a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.r > 1.4) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb}, ${a * 0.18})`;
          ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (active) rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [active, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-10 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
