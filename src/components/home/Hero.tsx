"use client";

import Link from "next/link";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { 
  SplitText, 
  DecryptText, 
  RotatingText, 
  CountUpValue, 
  Reveal 
} from "@/components/motion";
import { MutableRefObject, useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

function AuroraEffect({ colorStops = ['#5227FF', '#7cff67', '#5227FF'], amplitude = 1.0, blend = 0.5 }: {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
}) {
  const propsRef: MutableRefObject<{
    colorStops: string[];
    amplitude: number;
    blend: number;
    time?: number;
    speed?: number;
  }> = useRef({ colorStops, amplitude, blend });

  const ctnDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program: Program | undefined;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }
    window.addEventListener("resize", resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const colorStopsArray = propsRef.current.colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    program = new Program(gl, {
      vertex: `#version 300 es
      in vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
      `,
      fragment: `#version 300 es
      precision highp float;

      uniform float uTime;
      uniform float uAmplitude;
      uniform vec3 uColorStops[3];
      uniform vec2 uResolution;
      uniform float uBlend;

      out vec4 fragColor;

      vec3 permute(vec3 x) {
        return mod(((x * 34.0) + 1.0) * x, 289.0);
      }

      float snoise(vec2 v) {
        const vec4 C = vec4(
          0.211324865405187, 0.366025403784439,
          -0.577350269189626, 0.024390243902439
        );
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);

        vec3 p = permute(
          permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
        );

        vec3 m = max(
          0.5 - vec3(
            dot(x0, x0),
            dot(x12.xy, x12.xy),
            dot(x12.zw, x12.zw)
          ),
          0.0
        );
        m = m * m;
        m = m * m;

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      struct ColorStop {
        vec3 color;
        float position;
      };

      #define COLOR_RAMP(colors, factor, finalColor) {              \
        int index = 0;                                            \
        for (int i = 0; i < 2; i++) {                               \
          ColorStop currentColor = colors[i];                    \
          bool isInBetween = currentColor.position <= factor;    \
          index = int(mix(float(index), float(i), float(isInBetween))); \
        }                                                         \
        ColorStop currentColor = colors[index];                   \
        ColorStop nextColor = colors[index + 1];                  \
        float range = nextColor.position - currentColor.position; \
        float lerpFactor = (factor - currentColor.position) / range; \
        finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;

        ColorStop colors[3];
        colors[0] = ColorStop(uColorStops[0], 0.0);
        colors[1] = ColorStop(uColorStops[1], 0.5);
        colors[2] = ColorStop(uColorStops[2], 1.0);

        vec3 rampColor;
        COLOR_RAMP(colors, uv.x, rampColor);

        float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
        height = exp(height);
        height = (uv.y * 2.0 - height + 0.2);
        float intensity = 0.6 * height;

        float midPoint = 0.20;
        float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

        vec3 auroraColor = intensity * rampColor;

        fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
      }
      `,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: propsRef.current.amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: propsRef.current.blend },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      const { time = t * 0.01, speed = 1.0 } = propsRef.current;
      program.uniforms.uTime.value = time * speed * 0.1;
      program.uniforms.uAmplitude.value = propsRef.current.amplitude;
      program.uniforms.uBlend.value = propsRef.current.blend;
      const stops = propsRef.current.colorStops;
      program.uniforms.uColorStops.value = stops.map((hex) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={ctnDom} className="aurora-container" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AuroraEffect />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)] animate-pulse" />
            <span className="text-sm text-[var(--text-muted)]">Building growth systems for</span>
            <RotatingText 
              items={hero.rotatingNiches} 
              className="text-sm font-semibold"
            />
          </div>
        </Reveal>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          <SplitText 
            text={hero.headline}
            delay={0.2}
          />
        </h1>

        <Reveal delay={0.6} className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          <DecryptText 
            text={hero.subheadline}
            delayMs={600}
            durationMs={1000}
          />
        </Reveal>

        <Reveal delay={0.9} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaCopy.href}
            onClick={() => trackEvent("hero_cta_click")}
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-[var(--bg-base)] transition-all duration-300 hover:bg-[var(--brand-strong)] hover:scale-[1.02]"
            style={{ boxShadow: 'var(--glow-accent)' }}
          >
            {ctaCopy.primary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white/5 px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--brand-accent)]/40 hover:bg-white/10"
          >
            See Results
          </Link>
        </Reveal>

        <Reveal delay={1.2} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={20000} prefix="$" suffix="K+" />
            </span>
            <span>generated for clients</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={3} suffix="+" />
            </span>
            <span>active growth systems</span>
          </div>
          <div className="h-4 w-px bg-[var(--border-soft)] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--brand-accent)]">
              <CountUpValue to={30} prefix="<" />
            </span>
            <span>days to first leads</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />
    </section>
  );
}
