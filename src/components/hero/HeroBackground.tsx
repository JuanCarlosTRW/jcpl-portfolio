import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Aurora from '../motion/Aurora';
import { usePrefersReducedMotionSafe } from '../motion/usePrefersReducedMotionSafe';

const HERO_AURORA = {
  colorStops: ['#0B3D2E', '#50C878', '#004B3B'],
  amplitude: 0.8,
  blend: 0.38,
  speed: 0.82,
};

const HeroBackground: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotionSafe();
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const sweep = sweepRef.current;
    if (sweep) {
      sweep.animate(
        [
          { opacity: 0, transform: 'translateX(-100%)' },
          { opacity: 0.22, transform: 'translateX(0)' },
          { opacity: 0, transform: 'translateX(100%)' },
        ],
        {
          duration: 900,
          delay: 120,
          easing: 'ease-out',
          fill: 'forwards',
        }
      );
    }
  }, [prefersReducedMotion]);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {!prefersReducedMotion && (
        <Aurora
          colorStops={HERO_AURORA.colorStops}
          amplitude={HERO_AURORA.amplitude}
          blend={HERO_AURORA.blend}
          speed={HERO_AURORA.speed}
        />
      )}
      {prefersReducedMotion && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #0B3D2E, #004B3B)',
          }}
        />
      )}
      <div
        className="heroOverlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 50% 35%, rgba(6,10,8,0.74) 0%, rgba(6,10,8,0.58) 44%, rgba(6,10,8,0.20) 100%), radial-gradient(circle at 20% 20%, rgba(80,200,120,0.10), transparent 60%), radial-gradient(circle at 80% 25%, rgba(11,61,46,0.12), transparent 60%)',
        }}
      />
      <div
        className="heroVignette"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 6,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.28) 100%)',
        }}
      />
      <motion.div
        ref={sweepRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 7,
          pointerEvents: 'none',
          background:
            'linear-gradient(90deg, transparent, rgba(80,200,120,0.20), rgba(0,75,59,0.18), transparent)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};

export default HeroBackground;