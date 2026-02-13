import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';

import './Hyperspeed.css';

// Define distortions and App here
const distortions = {
  turbulentDistortion: {
    uniforms: {
      uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
      uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
    },
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `
  }
};

// Update AppOptions to accept the correct type for distortion
interface AppOptions {
  fov: number;
  colors: {
    background: number;
  };
  length: number;
  distortion: {
    uniforms: {
      uFreq: { value: THREE.Vector4 };
      uAmp: { value: THREE.Vector4 };
    };
    getDistortion: string;
  };
}

class App {
  container: HTMLElement;
  options: AppOptions;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  fogUniforms: any;
  clock: THREE.Clock;
  assets: any;
  disposed: boolean;
  renderPass: RenderPass | null = null;
  bloomPass: EffectPass | null = null;

  constructor(container: HTMLElement, options: AppOptions) {
    this.container = container;
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.composer = new EffectComposer(this.renderer);
    container.append(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      options.fov,
      container.offsetWidth / container.offsetHeight,
      0.1,
      10000
    );
    this.camera.position.z = -5;
    this.camera.position.y = 8;
    this.camera.position.x = 0;
    this.scene = new THREE.Scene();
    this.scene.background = null;

    let fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
    this.scene.fog = fog;
    this.fogUniforms = {
      fogColor: { value: fog.color },
      fogNear: { value: fog.near },
      fogFar: { value: fog.far }
    };
    this.clock = new THREE.Clock();
    this.assets = {};
    this.disposed = false;

    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);
    this.setSize = this.setSize.bind(this);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
  }

  init() {
    this.initPasses();
    this.tick();
  }

  initPasses() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new EffectPass(
      this.camera,
      new BloomEffect({
        luminanceThreshold: 0.2,
        luminanceSmoothing: 0,
        resolutionScale: 1
      })
    );

    const smaaPass = new EffectPass(
      this.camera,
      new SMAAEffect({
        preset: SMAAPreset.MEDIUM
      })
    );
    this.renderPass.renderToScreen = false;
    this.bloomPass.renderToScreen = false;
    smaaPass.renderToScreen = true;
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(smaaPass);
  }

  tick() {
    if (this.disposed || !this) return;
    const delta = this.clock.getDelta();
    this.composer.render(delta);
    requestAnimationFrame(this.tick);
  }

  setSize(width: number, height: number, updateStyles: boolean) {
    this.composer.setSize(width, height, updateStyles);
  }

  loadAssets() {
    return new Promise<void>((resolve) => {
      // Simulate asset loading
      setTimeout(() => resolve(), 1000);
    });
  }

  dispose() {
    this.disposed = true;
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.composer) {
      this.composer.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }
}

const Hyperspeed = ({
  effectOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  }
}) => {
  const hyperspeed = useRef(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
      const container = document.getElementById('lights');
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    }

    const container = document.getElementById('lights');
    if (!container) return;

    const options: AppOptions = {
      fov: effectOptions.fov,
      colors: effectOptions.colors,
      length: effectOptions.length,
      distortion: distortions[effectOptions.distortion as keyof typeof distortions]
    };

    const myApp = new App(container, options);
    appRef.current = myApp;
    myApp.loadAssets().then(myApp.init);

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, [effectOptions]);

  return <div id="lights" ref={hyperspeed}></div>;
};

export default Hyperspeed;