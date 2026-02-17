"use client";
import React, { useEffect, useRef, useState } from "react";

const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

// DO NOT MODIFY: Provided JSON config
const UNICORN_JSON = {"history":[{"breakpoints":[],"visible":true,"aspectRatio":1,"userDownsample":0.25,"layerType":"effect","type":"gradient","usesPingPong":false,"speed":0.25,"trackMouse":0,"trackAxes":"xy","mouseMomentum":0,"texture":false,"animating":false,"isMask":0,"compiledFragmentShaders":["#version 300 es\nprecision highp float;in vec2 vTextureCoord;uniform vec2 uMousePos;const float PI = 3.14159265;vec2 rotate(vec2 coord, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(\ncoord.x * c - coord.y * s,\ncoord.x * s + coord.y * c\n);\n}out vec4 fragColor;vec3 getBgColor(vec2 uv) {return vec3(0, 0, 0);\n}void main() {vec2 uv = vTextureCoord;\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nuv -= pos;\nuv /= max(0.5000*2., 1e-5);\nuv = rotate(uv, (0.0000 - 0.5) * 2. * PI);\nvec4 color = vec4(getBgColor(uv), 1.0000);\nfragColor = color;\n}"],"compiledVertexShaders":["#version 300 es\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = aTextureCoord;\n}"],"data":{"downSample":0.5,"depth":false,"uniforms":{},"isBackground":true},"id":"gradient"},{"breakpoints":[],"visible":true,"aspectRatio":1,"userDownsample":1,"states":{"appear":[{"local":{"pendingChanges":{},"changeDebouncer":null,"dragSession":null},"type":"appear","id":"66851a5d-e0a1-4fb8-85a0-e4f6e64e4c42","prop":"radius","transition":{"delay":1000,"duration":1000,"ease":"easeInOutQuart"},"complete":false,"progress":0,"value":0,"endValue":0.2,"initialized":false,"breakpoints":[],"loop":"none","loopDelay":0,"uniformData":{"type":"1f","name":"uRadius"}}],"scroll":[],"hover":[],"mousemove":[]},"layerType":"effect","type":"beam","usesPingPong":false,"radius":0.2,"speed":0.25,"trackMouse":0,"trackAxes":"xy","mouseMomentum":0,"texture":false,"animating":false,"isMask":0,"compiledFragmentShaders":["#version 300 es\nprecision highp float;\nprecision highp int;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform float uRadius;uniform vec2 uMousePos;\nuniform vec2 uResolution;\nvec3 blend (int blendMode, vec3 src, vec3 dst) {\nreturn 1. - (1. - src) * (1. - dst);\n}uvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}const float TAU = 6.28318530718;vec3 Tonemap_tanh(vec3 x) {\nx = clamp(x, -40.0, 40.0);\nreturn (exp(x) - exp(-x)) / (exp(x) + exp(-x));\n}out vec4 fragColor;const float PI = 3.14159265359;\nconst float TWO_PI = 2.0 * PI;mat2 rot(float a) {\nreturn mat2(cos(a),-sin(a),sin(a),cos(a));\n}vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {\nreturn a + b*cos( TAU*(c*t+d) );\n}float drawPoint(vec2 uv, vec2 center, float scale) {\nuv.x *= uResolution.x/uResolution.y;\ncenter.x *= uResolution.x/uResolution.y;\nvec2 skew = vec2(0.3400, 1. - 0.3400) * 2.;\nuv = uv * rot(0.0000 * TWO_PI) * skew;\ncenter = center * rot(0.0000 * TWO_PI) * skew;\nfloat dist = distance(uv, center);\nfloat radius = scale * 0.25;float brightness = radius / max(0.0001, dist);\nbrightness = mix(brightness, brightness*brightness, 1.0000);\nreturn brightness;\n}float getBeam(vec2 uv) {\nvec2 pos = vec2(0.5, -0.009756097560975618) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nreturn drawPoint(uv, pos, uRadius);\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 bg = texture(uTexture, uv);float beam = getBeam(uv);\nfloat ssBeam = smoothstep(0.0, 1.0, beam);\nfloat chroma = 0.4;vec3 beamColor = pal(beam,\n(vec3(0.3176470588235294, 0.3137254901960784, 0.9686274509803922) + vec3(0.5)) * 0.5,\nvec3(0.5) - vec3(0.3176470588235294, 0.3137254901960784, 0.9686274509803922),\nvec3(1.0 - chroma, 1.0, 1. + chroma),\nvec3(chroma, 0., -chroma)\n);beamColor = mix(beamColor, vec3(0.3176470588235294, 0.3137254901960784, 0.9686274509803922), mix(1.0, ssBeam, 0.5000)) * beam;\nfloat dither = (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;vec3 blended = blend(4, Tonemap_tanh(beamColor), bg.rgb);\nvec3 result = mix(bg.rgb, blended, 1.0000);\nresult += dither;vec4 color = vec4(result, max(bg.a, beam));\nfragColor = color;}"],"compiledVertexShaders":["#version 300 es\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],"data":{"depth":false,"uniforms":{}},"id":"beam"}, ...existing JSON...],"options":{"name":"Huly Laser (Remix)","fps":60,"dpi":1.5,"scale":1,"includeLogo":false,"isProduction":false},"version":"2.0.5","id":"fSdFsn2BDZ3UDERv6Wix"};


export default function UnicornHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFailed(true);
      return;
    }

    let unicornInstance: any = null;
    let script: HTMLScriptElement | null = null;
    let destroyed = false;

    const init = () => {
      if (window.UnicornStudio && containerRef.current) {
        try {
          unicornInstance = window.UnicornStudio.init({
            container: containerRef.current,
            config: UNICORN_JSON,
            ...(window.innerWidth < 768 ? { dpi: 1 } : {})
          });
        } catch (e) {
          setFailed(true);
        }
      } else {
        setFailed(true);
      }
    };

    const loadScript = () => {
      if (window.UnicornStudio) {
        requestIdleCallback ? requestIdleCallback(init) : setTimeout(init, 100);
        return;
      }
      script = document.createElement("script");
      script.src = UNICORN_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        if (destroyed) return;
        requestIdleCallback ? requestIdleCallback(init) : setTimeout(init, 100);
      };
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      destroyed = true;
      if (unicornInstance && typeof unicornInstance.destroy === "function") {
        unicornInstance.destroy();
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (failed) {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/60 to-black/90"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
