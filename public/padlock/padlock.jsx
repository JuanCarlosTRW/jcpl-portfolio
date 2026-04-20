// padlock.jsx — cinematic padlock + golden key animation

// ── Padlock SVG (metallic, slightly aged) ──────────────────────────────────
// Separate <Shackle /> so we can animate it independently.

function Shackle({ lift = 0, rotate = 0 }) {
  // lift: 0..1  (0 = seated, 1 = fully raised ~70px)
  // rotate: degrees — subtle tilt as it lifts
  return (
    <g
      style={{
        transform: `translateY(${-lift * 72}px) rotate(${rotate}deg)`,
        transformOrigin: '250px 200px',
        transformBox: 'fill-box',
      }}
    >
      {/* Outer shadow pass */}
      <path
        d="M 170 240 L 170 150 A 80 80 0 0 1 330 150 L 330 240"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="52"
        strokeLinecap="round"
        opacity="0.6"
        transform="translate(3,3)"
      />
      {/* Main shackle body */}
      <path
        d="M 170 240 L 170 150 A 80 80 0 0 1 330 150 L 330 240"
        fill="none"
        stroke="url(#shackleGrad)"
        strokeWidth="46"
        strokeLinecap="round"
      />
      {/* Inner darker core for depth */}
      <path
        d="M 170 240 L 170 150 A 80 80 0 0 1 330 150 L 330 240"
        fill="none"
        stroke="url(#shackleCore)"
        strokeWidth="38"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Top highlight strip */}
      <path
        d="M 178 152 A 72 72 0 0 1 322 152"
        fill="none"
        stroke="url(#shackleHighlight)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Left edge micro-highlight */}
      <path
        d="M 153 240 L 153 160 A 97 97 0 0 1 180 105"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* subtle wear scratches */}
      <path d="M 250 85 L 262 88" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <path d="M 215 100 L 224 104" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
    </g>
  );
}

function PadlockBody({ unlocked = 0 }) {
  // subtle glow intensifies on unlock
  return (
    <g>
      {/* Drop shadow under body */}
      <ellipse cx="250" cy="525" rx="150" ry="14" fill="rgba(0,0,0,0.55)" filter="url(#softBlur)"/>

      {/* Outer body */}
      <rect
        x="120" y="230"
        width="260" height="290"
        rx="34" ry="34"
        fill="url(#bodyGrad)"
        stroke="#0a0a0a"
        strokeWidth="2"
      />
      {/* Inner bevel */}
      <rect
        x="128" y="238"
        width="244" height="274"
        rx="28" ry="28"
        fill="none"
        stroke="url(#bevelGrad)"
        strokeWidth="1.5"
      />
      {/* Top inner shadow (where shackle meets body) */}
      <rect
        x="120" y="230"
        width="260" height="44"
        rx="34" ry="34"
        fill="url(#topShadow)"
      />
      {/* Shackle sockets */}
      <circle cx="170" cy="240" r="20" fill="#0a0a0a"/>
      <circle cx="330" cy="240" r="20" fill="#0a0a0a"/>
      <circle cx="170" cy="240" r="17" fill="url(#socketGrad)"/>
      <circle cx="330" cy="240" r="17" fill="url(#socketGrad)"/>

      {/* Left highlight column */}
      <rect
        x="128" y="250"
        width="12" height="254"
        rx="6" ry="6"
        fill="url(#leftGleam)"
        opacity="0.55"
      />
      {/* Right dark column */}
      <rect
        x="360" y="250"
        width="12" height="254"
        rx="6" ry="6"
        fill="url(#rightShade)"
        opacity="0.8"
      />

      {/* Rivets */}
      {[[155, 265], [345, 265], [155, 490], [345, 490]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#0a0a0a"/>
          <circle cx={cx} cy={cy} r="4.5" fill="url(#rivetGrad)"/>
          <circle cx={cx - 1} cy={cy - 1} r="1.2" fill="rgba(255,255,255,0.55)"/>
        </g>
      ))}

      {/* Subtle brushed texture lines */}
      <g opacity="0.08" stroke="#fff" strokeWidth="0.6">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="140" y1={280 + i * 9.5} x2="360" y2={280 + i * 9.5 + 1}/>
        ))}
      </g>
      {/* micro-scratches */}
      <path d="M 200 320 L 235 324" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <path d="M 290 410 L 320 413" stroke="rgba(0,0,0,0.35)" strokeWidth="1"/>
      <path d="M 180 460 L 205 462" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

      {/* Keyhole glow during unlock */}
      {unlocked > 0 && (
        <circle
          cx="250" cy="395"
          r={30 + unlocked * 90}
          fill="url(#unlockGlow)"
          opacity={unlocked * 0.85}
          style={{ mixBlendMode: 'screen' }}
        />
      )}
    </g>
  );
}

// Classic skeleton-key-style keyhole (circle + tapered slot)
function Keyhole({ keyInsert = 0 }) {
  // keyInsert 0..1 — darkens as key fills it
  const darken = 0.55 + keyInsert * 0.35;
  return (
    <g>
      {/* Recessed plate */}
      <circle cx="250" cy="395" r="36" fill="url(#keyholePlate)"/>
      <circle cx="250" cy="395" r="36" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5"/>
      <circle cx="250" cy="395" r="36" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" transform="translate(0,-1)"/>

      {/* Keyhole shape: circle + trapezoid slot */}
      <path
        d="M 250 380
           m -11 0
           a 11 11 0 1 0 22 0
           a 11 11 0 1 0 -22 0
           M 243 388
           L 239 418
           L 261 418
           L 257 388 Z"
        fill="#000"
        opacity={darken}
      />
      {/* inner shine on the rim */}
      <path
        d="M 232 388 A 18 18 0 0 1 268 388"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
    </g>
  );
}

// ── Golden key ──────────────────────────────────────────────────────────────
// Drawn vertically with the bit pointing UP at (0,0) so rotate + translate
// from the key's <g> places it near the keyhole.
//
// Key geometry (local coords, bit tip at y=0, bow centered below):
//   bit teeth top:        y = 0 .. 22
//   shaft:                y = 22 .. 120
//   collar:               y = 120 .. 132
//   bow (oval ring):      y = 132 .. 220, centered x=0
function GoldenKey() {
  return (
    <g>
      {/* Soft cast shadow */}
      <g transform="translate(3,4)" opacity="0.55">
        <rect x="-4" y="0" width="8" height="120" fill="#000"/>
        <ellipse cx="0" cy="176" rx="38" ry="44" fill="#000"/>
      </g>

      {/* Bit (teeth) — classic warded pattern */}
      <path
        d="
          M -4 0
          L -4 6
          L -14 6
          L -14 14
          L -4 14
          L -4 22
          L -10 22
          L -10 30
          L -4 30
          L -4 40
          L 4 40
          L 4 30
          L 10 30
          L 10 22
          L 4 22
          L 4 14
          L 14 14
          L 14 6
          L 4 6
          L 4 0
          Z
        "
        fill="url(#goldGrad)"
        stroke="#3a2a07"
        strokeWidth="0.5"
      />
      {/* shaft */}
      <rect x="-3.2" y="40" width="6.4" height="80" fill="url(#goldShaft)" stroke="#3a2a07" strokeWidth="0.5"/>
      {/* collar (decorative ring) */}
      <rect x="-7" y="120" width="14" height="6" rx="1" fill="url(#goldGrad)" stroke="#3a2a07" strokeWidth="0.5"/>
      <rect x="-7" y="127" width="14" height="2.5" fill="#3a2a07"/>

      {/* Bow (ornate ring) */}
      <ellipse cx="0" cy="172" rx="34" ry="42" fill="url(#goldBow)" stroke="#3a2a07" strokeWidth="0.8"/>
      <ellipse cx="0" cy="172" rx="24" ry="30" fill="url(#bowHole)" stroke="#2a1d05" strokeWidth="0.6"/>
      {/* decorative flourish on bow */}
      <path
        d="M -30 150 Q -38 172 -30 194 M 30 150 Q 38 172 30 194"
        fill="none"
        stroke="#2a1d05"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <circle cx="0" cy="130" r="4" fill="url(#goldGrad)" stroke="#3a2a07" strokeWidth="0.5"/>
      <circle cx="-26" cy="172" r="3" fill="#2a1d05" opacity="0.5"/>
      <circle cx="26" cy="172" r="3" fill="#2a1d05" opacity="0.5"/>

      {/* Specular highlight */}
      <rect x="-1.4" y="42" width="1.4" height="76" fill="rgba(255,245,200,0.75)" opacity="0.9"/>
      <path
        d="M -30 155 Q -36 170 -30 190"
        stroke="rgba(255,245,200,0.7)"
        strokeWidth="1.2"
        fill="none"
      />
    </g>
  );
}

// ── SVG defs (gradients, filters) ──────────────────────────────────────────
function Defs() {
  return (
    <defs>
      {/* Shackle steel */}
      <linearGradient id="shackleGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2a2d32"/>
        <stop offset="25%" stopColor="#6b6f77"/>
        <stop offset="50%" stopColor="#8a8f97"/>
        <stop offset="75%" stopColor="#4a4d53"/>
        <stop offset="100%" stopColor="#1c1e22"/>
      </linearGradient>
      <linearGradient id="shackleCore" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1a1c20" stopOpacity="0.7"/>
        <stop offset="50%" stopColor="#3a3d44" stopOpacity="0"/>
        <stop offset="100%" stopColor="#0f1013" stopOpacity="0.8"/>
      </linearGradient>
      <linearGradient id="shackleHighlight" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255,255,255,0)"/>
        <stop offset="40%" stopColor="rgba(255,255,255,0.55)"/>
        <stop offset="60%" stopColor="rgba(255,255,255,0.55)"/>
        <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>

      {/* Body */}
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3d4047"/>
        <stop offset="25%" stopColor="#5a5e67"/>
        <stop offset="55%" stopColor="#464a52"/>
        <stop offset="100%" stopColor="#1c1e22"/>
      </linearGradient>
      <linearGradient id="bevelGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/>
        <stop offset="50%" stopColor="rgba(255,255,255,0.05)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,0.5)"/>
      </linearGradient>
      <linearGradient id="topShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(0,0,0,0.65)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
      </linearGradient>
      <radialGradient id="socketGrad" cx="0.5" cy="0.3" r="0.8">
        <stop offset="0%" stopColor="#050506"/>
        <stop offset="70%" stopColor="#1a1c20"/>
        <stop offset="100%" stopColor="#2a2d32"/>
      </radialGradient>
      <linearGradient id="leftGleam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
        <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>
      <linearGradient id="rightShade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,0.7)"/>
      </linearGradient>
      <radialGradient id="rivetGrad" cx="0.35" cy="0.35" r="0.7">
        <stop offset="0%" stopColor="#aab0b8"/>
        <stop offset="60%" stopColor="#4a4d53"/>
        <stop offset="100%" stopColor="#1c1e22"/>
      </radialGradient>

      {/* Keyhole plate */}
      <radialGradient id="keyholePlate" cx="0.5" cy="0.4" r="0.7">
        <stop offset="0%" stopColor="#1a1c20"/>
        <stop offset="60%" stopColor="#2e3138"/>
        <stop offset="100%" stopColor="#14161a"/>
      </radialGradient>

      {/* Gold */}
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7a5a12"/>
        <stop offset="40%" stopColor="#f6cf6a"/>
        <stop offset="55%" stopColor="#fff1b8"/>
        <stop offset="75%" stopColor="#c9941e"/>
        <stop offset="100%" stopColor="#5a3d08"/>
      </linearGradient>
      <linearGradient id="goldShaft" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#5a3d08"/>
        <stop offset="35%" stopColor="#e3b34a"/>
        <stop offset="50%" stopColor="#fff3c0"/>
        <stop offset="70%" stopColor="#b8881a"/>
        <stop offset="100%" stopColor="#3a2505"/>
      </linearGradient>
      <radialGradient id="goldBow" cx="0.35" cy="0.3" r="0.9">
        <stop offset="0%" stopColor="#fff3c0"/>
        <stop offset="20%" stopColor="#f6cf6a"/>
        <stop offset="55%" stopColor="#c9941e"/>
        <stop offset="100%" stopColor="#4a2f07"/>
      </radialGradient>
      <radialGradient id="bowHole" cx="0.5" cy="0.5" r="0.7">
        <stop offset="0%" stopColor="#0a0806"/>
        <stop offset="100%" stopColor="#1e1608"/>
      </radialGradient>

      {/* Unlock glow */}
      <radialGradient id="unlockGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="rgba(255,235,170,1)"/>
        <stop offset="30%" stopColor="rgba(255,210,120,0.7)"/>
        <stop offset="70%" stopColor="rgba(255,180,80,0.15)"/>
        <stop offset="100%" stopColor="rgba(255,180,80,0)"/>
      </radialGradient>

      {/* Soft blur for drop shadow */}
      <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6"/>
      </filter>
      <filter id="goldBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4"/>
      </filter>
    </defs>
  );
}

// ── Background (cinematic dark with vignette + dust motes) ─────────────────
function Background() {
  const t = useTime();
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `
        radial-gradient(ellipse 70% 55% at 50% 45%, #2a2520 0%, #141210 35%, #08070a 70%, #020204 100%)
      `,
      overflow: 'hidden',
    }}>
      {/* ambient warm wash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 40% 40% at 50% 55%, rgba(210,150,60,0.08), transparent 70%)',
        mixBlendMode: 'screen',
      }}/>
      {/* subtle moving light sweep */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: `${-20 + (t * 2) % 140}%`,
        width: '50%', height: '140%',
        background: 'linear-gradient(100deg, transparent, rgba(255,220,170,0.04), transparent)',
        filter: 'blur(40px)',
      }}/>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.75  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
        )}")`,
        opacity: 0.35,
        mixBlendMode: 'overlay',
      }}/>
      {/* heavy vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 85% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)',
        pointerEvents: 'none',
      }}/>
    </div>
  );
}

// ── Dust motes drifting through light ──────────────────────────────────────
function DustMotes() {
  const t = useTime();
  const motes = React.useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * 1200 + 40,
      y: Math.random() * 680 + 20,
      r: 0.8 + Math.random() * 2.2,
      drift: 0.3 + Math.random() * 0.8,
      phase: Math.random() * 6.28,
      alpha: 0.15 + Math.random() * 0.35,
    }));
  }, []);
  return (
    <svg width="1280" height="720" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {motes.map((m, i) => {
        const y = (m.y + t * 10 * m.drift) % 720;
        const x = m.x + Math.sin(t * 0.5 + m.phase) * 8;
        return <circle key={i} cx={x} cy={y} r={m.r} fill="rgba(255,220,170,0.8)" opacity={m.alpha * (0.6 + 0.4 * Math.sin(t * 2 + m.phase))}/>;
      })}
    </svg>
  );
}

// ── Light burst at unlock moment ───────────────────────────────────────────
function LightBurst({ intensity }) {
  if (intensity <= 0) return null;
  const size = 200 + intensity * 900;
  return (
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      width: size, height: size,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      opacity: intensity,
    }}>
      {/* core flash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle, rgba(255,240,200,0.9) 0%, rgba(255,200,120,0.35) 25%, rgba(255,170,80,0.08) 55%, transparent 75%)',
        mixBlendMode: 'screen',
      }}/>
      {/* rays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `conic-gradient(
          from 0deg,
          transparent 0deg, rgba(255,230,170,${0.35 * intensity}) 8deg, transparent 16deg,
          transparent 35deg, rgba(255,230,170,${0.25 * intensity}) 43deg, transparent 51deg,
          transparent 70deg, rgba(255,230,170,${0.3 * intensity}) 78deg, transparent 86deg,
          transparent 110deg, rgba(255,230,170,${0.25 * intensity}) 118deg, transparent 126deg,
          transparent 150deg, rgba(255,230,170,${0.35 * intensity}) 158deg, transparent 166deg,
          transparent 190deg, rgba(255,230,170,${0.2 * intensity}) 198deg, transparent 206deg,
          transparent 225deg, rgba(255,230,170,${0.3 * intensity}) 233deg, transparent 241deg,
          transparent 270deg, rgba(255,230,170,${0.25 * intensity}) 278deg, transparent 286deg,
          transparent 305deg, rgba(255,230,170,${0.3 * intensity}) 313deg, transparent 321deg,
          transparent 340deg, rgba(255,230,170,${0.28 * intensity}) 348deg, transparent 356deg
        )`,
        borderRadius: '50%',
        maskImage: 'radial-gradient(circle, black 10%, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(circle, black 10%, transparent 60%)',
        mixBlendMode: 'screen',
        filter: 'blur(2px)',
      }}/>
    </div>
  );
}

// ── Main scene ─────────────────────────────────────────────────────────────
function PadlockScene() {
  const t = useTime();

  // Phase timing (shortened)
  // 0 .. 0.8   : padlock reveal (fade in)
  // 0.8 .. 1.4 : brief settle
  // 1.4 .. 2.3 : shackle lifts, light burst
  // 2.3 .. 4.0 : hold + slow drift + burst fade

  // Padlock entrance (faster)
  const padlockOpacity = animate({ from: 0, to: 1, start: 0, end: 0.7, ease: Easing.easeOutCubic })(t);
  const padlockScale = animate({ from: 0.94, to: 1, start: 0, end: 0.9, ease: Easing.easeOutCubic })(t);

  // Idle float (subtle, continuous)
  const float = Math.sin(t * 0.9) * 4;

  // Key trajectory
  // Local key <g> is drawn with the bit tip at (0,0) and the bow below (y:130..220).
  // When fully inserted, the bit tip should be at the pin line ~y=388 in the 500x600 viewbox.
  // We translate the key in the outer SVG (1280x720 user coords) via a <g transform>.
  // The padlock group is centered around (640, 340) ish; keyhole center = (640, ~395 - offset)
  // Actually the padlock is rendered at its own 500x600 coord, placed within the larger SVG.
  // We'll place keyhole center at SVG coords (640, 420).

  // Key approaches: starts offscreen right at (1320, 520), tilted 90° (bit pointing LEFT)
  // Glides to (780, 420), then straightens to bit pointing UP (rotate from 90° to 0°)
  // while sliding toward keyhole at (640, 420).

  // Phase 1: approach 1.8 -> 4.2  (smooth arc, no bob, no overshoot)
  // Key enters from the right already vertical, drifting toward the lock along
  // a single continuous easeInOutCubic path so the final alignment is seamless.
  const approachX = animate({
    from: 1320, to: 640,
    start: 1.8, end: 4.2,
    ease: Easing.easeInOutCubic,
  })(t);
  const approachY = animate({
    from: 405, to: 405,
    start: 1.8, end: 4.2,
    ease: Easing.easeInOutCubic,
  })(t);
  // Key comes in vertical already — tiny residual tilt that resolves early
  const approachRot = animate({
    from: 6, to: 0,
    start: 1.8, end: 3.8,
    ease: Easing.easeInOutCubic,
  })(t);
  const approachBob = 0;

  // Phase 2: alignment pause & final align 4.2 -> 4.6
  // Key sits just above keyhole (bit tip a few px above y=388 in padlock coords).
  // In SVG coords: keyhole center ~ (640, 420), bit tip should be at (640, 420 - 15) before insert.
  // We want the KEY's rendered bit tip at (keyX, keyY). Since <g transform="translate(keyX, keyY)">
  // puts its local origin (0,0) at that point, and the bit tip is local (0,0), keyY = bit tip y.

  // Phase 3: insert 4.6 -> 5.6 (bit tip moves from y=405 down to y=420 while entering slot)
  const insertProgress = clamp((t - 4.6) / 1.0, 0, 1);
  const insertEase = Easing.easeInOutCubic(insertProgress);

  // Base position after alignment:
  let keyX = approachX;
  let keyY = approachY + approachBob;
  let keyRot = approachRot;

  if (t >= 4.2) {
    keyX = 640;
    // During insert, move down 18px
    keyY = 405 + insertEase * 18;
    keyRot = 0;
  }

  // Phase 4: rotate 5.6 -> 7.2 (quarter turn)
  const rotateProgress = clamp((t - 5.6) / 1.6, 0, 1);
  // mechanical stutter curve — two stages with micro-settle
  const rotateEase = (x) => {
    if (x < 0.55) return Easing.easeInOutCubic(x / 0.55) * 0.7;
    if (x < 0.75) return 0.7 + Easing.easeOutCubic((x - 0.55) / 0.2) * 0.08;
    return 0.78 + Easing.easeOutBack((x - 0.75) / 0.25) * 0.22;
  };
  const keyTurn = rotateEase(rotateProgress) * 90;
  if (t >= 5.6) keyRot = keyTurn;

  // tiny click shake at turn moments
  const clickShake = (() => {
    // small shake at t ≈ 6.3 and 7.1
    let s = 0;
    const events = [6.3, 7.1];
    for (const e of events) {
      const dt = t - e;
      if (dt > 0 && dt < 0.18) s += Math.sin(dt * 180) * (1 - dt / 0.18) * 2;
    }
    return s;
  })();

  // Phase 5: unlock 1.4 -> 2.3 — shackle pops up + light burst
  const unlockProgress = clamp((t - 1.4) / 0.9, 0, 1);
  const shackleLift = Easing.easeOutBack(unlockProgress);
  const shackleRotate = Easing.easeOutCubic(unlockProgress) * 8;

  // Burst: peaks just after unlock start, fades
  const burstProgress = (() => {
    const dt = t - 1.4;
    if (dt < 0) return 0;
    if (dt < 0.25) return dt / 0.25;             // rise
    if (dt < 1.6) return 1 - (dt - 0.25) / 1.35; // decay
    return 0;
  })();
  const burstIntensity = clamp(burstProgress, 0, 1);

  // After unlock, key slowly recedes down and left
  let keyExitX = 0, keyExitY = 0, keyExitOpacity = 1;
  if (t >= 8.6) {
    const exitP = clamp((t - 8.6) / 1.4, 0, 1);
    const e = Easing.easeInCubic(exitP);
    keyExitY = e * 120;
    keyExitOpacity = 1 - e * 0.2;
  }

  // Lock body "settle" shake on unlock
  const lockShake = (() => {
    const dt = t - 1.4;
    if (dt < 0 || dt > 0.3) return 0;
    return Math.sin(dt * 90) * (1 - dt / 0.3) * 2;
  })();

  // Keyhole stays dark (no key in this version)
  const keyInsert = 0.9;

  // Padlock group transform
  const padlockCX = 640 + clickShake * 0.5 + lockShake;
  const padlockCY = 340 + float + lockShake * 0.4;

  return (
    <>
      <Background />

      {/* Key pool of light on ground */}
      <div style={{
        position: 'absolute',
        left: '50%', bottom: 40,
        width: 420, height: 60,
        transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, rgba(255,200,130,0.12) 0%, transparent 70%)',
        opacity: padlockOpacity,
        pointerEvents: 'none',
      }}/>

      {/* Main SVG canvas */}
      <svg
        width="1280" height="720"
        viewBox="0 0 1280 720"
        style={{
          position: 'absolute', inset: 0,
          opacity: padlockOpacity,
        }}
      >
        <Defs />

        {/* Padlock group, centered on (padlockCX, padlockCY) */}
        <g transform={`translate(${padlockCX - 250}, ${padlockCY - 200}) scale(${padlockScale})`} style={{ transformOrigin: 'center' }}>
          <Shackle lift={shackleLift} rotate={shackleRotate} />
          <PadlockBody unlocked={burstIntensity} />
          <Keyhole keyInsert={keyInsert} />
        </g>
      </svg>

      {/* Light burst overlay */}
      <LightBurst intensity={burstIntensity} />

      {/* Ambient dust */}
      <DustMotes />

      {/* Final vignette over everything */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 100% 85% at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)',
        pointerEvents: 'none',
      }}/>
    </>
  );
}

Object.assign(window, { PadlockScene });
