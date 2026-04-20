// scene.jsx — SEO ranking rise animation

const BLUE = 'oklch(58% 0.17 255)';
const BLUE_SOFT = 'oklch(72% 0.13 250)';
const CYAN = 'oklch(80% 0.14 220)';
const GOLD = 'oklch(80% 0.13 85)';
const GREEN = 'oklch(70% 0.15 155)';
const INK = '#202124';
const INK_SOFT = '#5f6368';
const HAIR = '#e8eaed';
const BG = '#ffffff';
const PAGE = '#f8f9fa';

// --- Timeline constants (seconds) ---
const T = {
  introStart: 0.0,
  typeStart: 0.4,
  typeEnd: 2.6,       // user finishes typing
  submitAt: 2.9,      // pressing enter
  resultsIn: 3.1,     // results cascade in
  resultsDone: 4.4,
  scanPause: 4.4,     // viewer takes it in
  riseStart: 5.4,     // Your Business begins rising
  riseEnd: 7.4,       // lands in #1 slot
  glowStart: 7.5,
  peakStart: 8.8,     // final beauty pose
  duration: 13.5,
};

const QUERY = 'best barbershop in laval';

// -----------------------------------------------------------------------------
// Listing data. `rank` = original rank (1..5). "Your Business" starts at #4.
// -----------------------------------------------------------------------------
const LISTINGS = [
  { id: 'a', name: "Coupe & Lame", area: 'Chomedey · Laval', rating: 4.6, reviews: 412, hue: 15  },
  { id: 'b', name: "Maison Rasoir",  area: 'Pont-Viau · Laval', rating: 4.5, reviews: 287, hue: 280 },
  { id: 'c', name: "Atelier Nord",   area: 'Sainte-Rose · Laval', rating: 4.4, reviews: 198, hue: 165 },
  { id: 'you', name: 'Studio Barbier Laval', area: 'Vimont · Laval', rating: 4.9, reviews: 638, hue: 220, isYou: true },
  { id: 'd', name: "Le Gentleman",   area: 'Fabreville · Laval', rating: 4.3, reviews: 155, hue: 40 },
];

// Cross-fade helper
const cf = (t, start, end, ease = Easing.easeInOutCubic) => {
  if (t <= start) return 0;
  if (t >= end) return 1;
  return ease((t - start) / (end - start));
};

// =============================================================================
// BROWSER CHROME
// =============================================================================
function BrowserChrome({ children }) {
  return (
    <div style={{
      position: 'absolute',
      left: 120, top: 70,
      width: 1680, height: 940,
      background: BG,
      borderRadius: 14,
      boxShadow: '0 30px 80px rgba(20, 28, 60, 0.18), 0 2px 6px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      border: '1px solid #eceef1',
    }}>
      {/* Title bar */}
      <div style={{
        height: 44,
        background: '#f3f4f6',
        display: 'flex', alignItems: 'center',
        padding: '0 18px',
        borderBottom: '1px solid #e8eaed',
        gap: 14,
      }}>
        <div style={{display:'flex', gap: 8}}>
          <div style={{width:12, height:12, borderRadius:6, background:'#ff5f57'}}/>
          <div style={{width:12, height:12, borderRadius:6, background:'#febc2e'}}/>
          <div style={{width:12, height:12, borderRadius:6, background:'#28c840'}}/>
        </div>
        <div style={{display:'flex', gap: 8, marginLeft: 20, color:'#9aa0a6'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{opacity:.7}}><path d="M21 12a9 9 0 11-3-6.7L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{
          flex: 1,
          height: 28,
          background: '#fff',
          borderRadius: 14,
          border: '1px solid #e4e6ea',
          display: 'flex', alignItems: 'center',
          padding: '0 14px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 12,
          color: '#5f6368',
          gap: 8,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="#5f6368" strokeWidth="2"/>
            <path d="M8 11V7a4 4 0 118 0v4" stroke="#5f6368" strokeWidth="2"/>
          </svg>
          finder.com/search?q={QUERY.replace(/ /g,'+')}
        </div>
      </div>
      {children}
    </div>
  );
}

// =============================================================================
// SEARCH HEADER (logo + input)
// =============================================================================
function SearchHeader({ query, showCaret, showResultsMeta }) {
  return (
    <div style={{
      padding: '22px 40px 0 40px',
      borderBottom: showResultsMeta ? `1px solid ${HAIR}` : 'none',
    }}>
      <div style={{display:'flex', alignItems:'center', gap: 32}}>
        {/* Wordmark */}
        <div style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: '-0.035em',
          color: INK,
          display: 'flex', alignItems: 'center', gap: 2,
        }}>
          <span style={{color: BLUE}}>◆</span>
          <span style={{marginLeft: 6}}>finder</span>
          <span style={{color: INK_SOFT}}>.</span>
        </div>

        {/* Search input */}
        <div style={{
          flex: 1,
          maxWidth: 760,
          height: 50,
          background: '#fff',
          border: `1px solid ${HAIR}`,
          borderRadius: 26,
          display: 'flex', alignItems: 'center',
          padding: '0 22px',
          boxShadow: '0 1px 6px rgba(32,33,36,0.04)',
          gap: 14,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke={INK_SOFT} strokeWidth="2"/>
            <path d="M20 20l-3.5-3.5" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div style={{
            flex: 1,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 17,
            color: INK,
            letterSpacing: '-0.005em',
            display: 'flex', alignItems: 'center',
          }}>
            {query}
            {showCaret && (
              <span style={{
                display: 'inline-block',
                width: 2, height: 22,
                background: BLUE,
                marginLeft: 2,
                animation: 'blink 1s steps(2) infinite',
              }}/>
            )}
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{opacity:.7}}>
            <path d="M12 3v12m0 0l-5-5m5 5l5-5" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 20h14" stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Tabs */}
      {showResultsMeta && (
        <div style={{
          display: 'flex', gap: 28, marginTop: 22,
          fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13,
          color: INK_SOFT, letterSpacing: '0.01em',
        }}>
          {[
            {label:'All', active: true},
            {label:'Maps', active: false},
            {label:'Images', active: false},
            {label:'News', active: false},
            {label:'More', active: false},
          ].map(t => (
            <div key={t.label} style={{
              paddingBottom: 10,
              borderBottom: t.active ? `3px solid ${BLUE}` : '3px solid transparent',
              color: t.active ? BLUE : INK_SOFT,
              fontWeight: t.active ? 600 : 500,
            }}>{t.label}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// MAP PANE
// =============================================================================
function MapPane({ listings, highlight, t }) {
  // Position pins in a pleasing constellation
  const pinPositions = {
    a:  {x: 180, y: 140},
    b:  {x: 300, y: 260},
    c:  {x: 110, y: 320},
    you:{x: 240, y: 200},
    d:  {x: 360, y: 160},
  };

  return (
    <div style={{
      position: 'relative',
      width: 480,
      height: 560,
      borderRadius: 14,
      overflow: 'hidden',
      background: '#e8ecef',
      border: `1px solid ${HAIR}`,
    }}>
      {/* Stylized map (abstract — no copyrighted tiles) */}
      <svg width="100%" height="100%" viewBox="0 0 480 560" style={{position:'absolute', inset:0}}>
        <defs>
          <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#dde2e6" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="480" height="560" fill="#eef1f4"/>
        <rect width="480" height="560" fill="url(#mapgrid)"/>
        {/* Water bodies / parks */}
        <path d="M -20 420 Q 120 380 260 420 T 520 410 L 520 600 L -20 600 Z" fill="#cfe2ec"/>
        <path d="M -20 420 Q 120 380 260 420 T 520 410" fill="none" stroke="#b5d0de" strokeWidth="1"/>
        <circle cx="80" cy="120" r="55" fill="#dbe7d6"/>
        <circle cx="400" cy="340" r="40" fill="#dbe7d6"/>
        {/* Roads */}
        <path d="M -10 220 C 140 200 280 260 500 240" fill="none" stroke="#ffffff" strokeWidth="10"/>
        <path d="M -10 220 C 140 200 280 260 500 240" fill="none" stroke="#e4e8eb" strokeWidth="1"/>
        <path d="M 220 -10 C 210 140 280 300 230 570" fill="none" stroke="#ffffff" strokeWidth="8"/>
        <path d="M 220 -10 C 210 140 280 300 230 570" fill="none" stroke="#e4e8eb" strokeWidth="1"/>
        <path d="M 40 -10 C 80 160 30 280 80 570" fill="none" stroke="#ffffff" strokeWidth="5"/>
        <path d="M 380 -10 C 360 200 420 320 390 570" fill="none" stroke="#ffffff" strokeWidth="5"/>
        <path d="M -10 380 C 180 390 320 350 500 390" fill="none" stroke="#ffffff" strokeWidth="5"/>
        <path d="M -10 100 C 180 90 320 110 500 80" fill="none" stroke="#ffffff" strokeWidth="5"/>
        {/* Label */}
        <text x="24" y="540" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="#9aa0a6" letterSpacing="0.04em">LAVAL · QC</text>
      </svg>

      {/* Pins */}
      {listings.map((L, i) => {
        const p = pinPositions[L.id];
        const isHi = highlight === L.id;
        const pulse = isHi ? 1 + 0.15 * Math.sin(t * 6) : 1;
        const size = isHi ? 48 : 36;
        const bg = L.isYou ? BLUE : '#c53929';
        const letter = L.isYou ? '★' : String(L.displayRank);
        return (
          <div key={L.id} style={{
            position: 'absolute',
            left: p.x, top: p.y,
            width: size, height: size,
            transform: `translate(-50%, -100%) scale(${pulse})`,
            transition: 'all 500ms cubic-bezier(.4,.0,.2,1)',
            zIndex: isHi ? 10 : (L.isYou ? 5 : 1),
          }}>
            {/* Shadow */}
            <div style={{
              position:'absolute', left:'50%', bottom: -6,
              width: size*0.6, height: 6, transform:'translateX(-50%)',
              background:'rgba(0,0,0,0.18)', borderRadius: '50%', filter:'blur(3px)'
            }}/>
            {/* Glow for "you" */}
            {L.isYou && isHi && (
              <div style={{
                position:'absolute', inset: -18,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${CYAN}55, transparent 65%)`,
              }}/>
            )}
            <svg viewBox="0 0 40 48" width={size} height={size*1.2} style={{position:'absolute', top: -size*0.2}}>
              <path d="M20 47 C 20 47 36 30 36 18 A 16 16 0 1 0 4 18 C 4 30 20 47 20 47 Z"
                fill={bg}
                stroke={L.isYou ? '#fff' : '#a32a1f'}
                strokeWidth="1.5"
              />
              <circle cx="20" cy="18" r="10" fill="#fff"/>
              <text x="20" y="23" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={L.isYou ? 14 : 13} fontWeight="700" fill={bg}>
                {letter}
              </text>
            </svg>
          </div>
        );
      })}

      {/* Zoom controls */}
      <div style={{
        position: 'absolute', right: 14, top: 14,
        display:'flex', flexDirection:'column',
        background:'#fff', borderRadius:6, boxShadow:'0 1px 3px rgba(0,0,0,0.15)',
      }}>
        <div style={{width:28, height:28, display:'flex', alignItems:'center', justifyContent:'center', borderBottom:`1px solid ${HAIR}`, color: INK_SOFT}}>+</div>
        <div style={{width:28, height:28, display:'flex', alignItems:'center', justifyContent:'center', color: INK_SOFT}}>−</div>
      </div>
    </div>
  );
}

// =============================================================================
// SINGLE LISTING CARD
// =============================================================================
function ListingCard({ listing, displayRank, isTop, glow, scale, opacity, depressed, focusBoost }) {
  const isYou = !!listing.isYou;
  const crown = isYou && isTop;

  const shadow = crown
    ? `0 24px 60px -12px ${CYAN}88, 0 4px 14px rgba(34, 58, 120, 0.12)`
    : depressed
      ? '0 1px 2px rgba(0,0,0,0.03)'
      : '0 1px 3px rgba(0,0,0,0.04)';

  const border = crown ? `1.5px solid ${BLUE_SOFT}` : `1px solid ${HAIR}`;

  return (
    <div style={{
      position: 'relative',
      height: 108,
      background: '#fff',
      border,
      borderRadius: 12,
      padding: '16px 20px',
      display: 'flex', alignItems: 'center', gap: 18,
      boxShadow: shadow,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center left',
      transition: 'border 300ms, box-shadow 300ms',
      filter: !isYou && depressed ? `saturate(${1 - depressed * 0.6}) brightness(${1 - depressed * 0.04})` : 'none',
    }}>
      {/* Crown glow ring when #1 */}
      {crown && glow > 0 && (
        <>
          <div style={{
            position: 'absolute', inset: -6,
            borderRadius: 14,
            border: `1.5px solid ${CYAN}`,
            opacity: glow * 0.6,
            boxShadow: `0 0 ${24 + glow * 28}px ${CYAN}88, inset 0 0 ${12 + glow * 10}px ${CYAN}33`,
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', inset: -14,
            borderRadius: 18,
            background: `radial-gradient(ellipse at left, ${CYAN}22 0%, transparent 60%)`,
            opacity: glow,
            pointerEvents: 'none',
            zIndex: -1,
          }}/>
        </>
      )}

      {/* Rank badge */}
      <div style={{
        width: 44, height: 44,
        borderRadius: 22,
        background: crown ? GOLD : (isYou ? BLUE : '#f1f3f5'),
        color: crown ? '#3a2a00' : (isYou ? '#fff' : INK_SOFT),
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 700, fontSize: 17,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: crown ? `0 0 0 3px ${GOLD}33, 0 2px 8px ${GOLD}66` : 'none',
        flexShrink: 0,
        transition: 'all 400ms',
      }}>
        {displayRank}
      </div>

      {/* Avatar */}
      <div style={{
        width: 72, height: 72, borderRadius: 10,
        background: `linear-gradient(135deg, oklch(72% 0.08 ${listing.hue}), oklch(55% 0.12 ${listing.hue}))`,
        flexShrink: 0,
        display:'flex', alignItems:'center', justifyContent:'center',
        color:'#fff', fontFamily:'Inter', fontWeight:700, fontSize: 28,
        letterSpacing:'-0.02em',
      }}>
        {listing.name.split(' ').map(w => w[0]).slice(0,2).join('')}
      </div>

      {/* Body */}
      <div style={{flex: 1, minWidth: 0}}>
        <div style={{
          display:'flex', alignItems:'center', gap: 10, marginBottom: 4,
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 19, fontWeight: 600,
            color: crown ? BLUE : INK,
            letterSpacing:'-0.01em',
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
          }}>
            {listing.name}
          </div>
          {isYou && (
            <div style={{
              padding: '2px 8px',
              borderRadius: 10,
              background: crown ? GOLD : `${BLUE}18`,
              color: crown ? '#3a2a00' : BLUE,
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace:'nowrap',
              boxShadow: crown ? `0 2px 6px ${GOLD}55` : 'none',
            }}>
              {crown ? '★ Your Business' : 'Your Business'}
            </div>
          )}
        </div>

        <div style={{
          display:'flex', alignItems:'center', gap: 10,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 13, color: INK_SOFT, marginBottom: 6,
        }}>
          <span style={{color: crown ? GOLD : '#e8a33d', fontWeight: 600}}>{listing.rating.toFixed(1)}</span>
          <Stars rating={listing.rating} gold={crown}/>
          <span>({listing.reviews})</span>
          <span style={{color: '#bdc1c6'}}>·</span>
          <span>{listing.area}</span>
        </div>

        <div style={{
          display:'flex', gap: 10,
          fontFamily: 'Inter, system-ui, sans-serif', fontSize: 12,
          color: INK_SOFT,
        }}>
          <Chip label="Open now" dot={GREEN}/>
          <Chip label="In-store shopping"/>
          {isYou && <Chip label="On-site services"/>}
        </div>
      </div>

      {/* Right: CTA */}
      <div style={{display:'flex', flexDirection:'column', gap: 8, alignItems:'flex-end'}}>
        <div style={{
          padding: '8px 16px',
          borderRadius: 8,
          background: crown ? BLUE : '#fff',
          border: crown ? 'none' : `1px solid ${HAIR}`,
          color: crown ? '#fff' : INK,
          fontFamily:'Inter', fontSize: 13, fontWeight: 600,
          boxShadow: crown ? `0 4px 12px ${BLUE}55` : 'none',
        }}>
          Website
        </div>
        <div style={{
          fontFamily: 'Inter', fontSize: 11, color: INK_SOFT,
          display:'flex', alignItems:'center', gap: 4,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L12 22" stroke={INK_SOFT} strokeWidth="2"/>
            <path d="M5 9 L12 2 L19 9" stroke={INK_SOFT} strokeWidth="2" fill="none"/>
          </svg>
          Directions
        </div>
      </div>

      {/* Crown badge */}
      {crown && (
        <div style={{
          position:'absolute', top: -14, right: 20,
          padding:'6px 12px', borderRadius: 20,
          background: `linear-gradient(90deg, ${GOLD}, oklch(85% 0.14 75))`,
          color:'#3a2a00',
          fontFamily:'Inter', fontSize: 11, fontWeight: 800,
          letterSpacing:'0.1em', textTransform:'uppercase',
          boxShadow: `0 6px 16px ${GOLD}66`,
          opacity: glow,
          transform: `translateY(${(1-glow) * 6}px)`,
        }}>
          ★ Top-ranked local result
        </div>
      )}
    </div>
  );
}

function Stars({ rating, gold }) {
  const color = gold ? GOLD : '#f5a623';
  return (
    <div style={{display:'flex', gap: 1}}>
      {[0,1,2,3,4].map(i => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`sg-${i}-${gold?'g':'n'}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill*100}%`} stopColor={color}/>
                <stop offset={`${fill*100}%`} stopColor="#e0e0e0"/>
              </linearGradient>
            </defs>
            <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" fill={`url(#sg-${i}-${gold?'g':'n'})`}/>
          </svg>
        );
      })}
    </div>
  );
}

function Chip({ label, dot }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap: 5,
      padding: '2px 8px', borderRadius: 10,
      background: '#f1f3f5',
      fontFamily:'Inter', fontSize: 11, color: INK_SOFT, fontWeight: 500,
    }}>
      {dot && <span style={{width:6, height:6, borderRadius:3, background: dot}}/>}
      {label}
    </div>
  );
}

// =============================================================================
// LISTINGS STACK — handles the animated reordering
// =============================================================================
const CARD_H = 108;
const CARD_GAP = 12;
const ROW_STRIDE = CARD_H + CARD_GAP;

function ListingsStack({ t }) {
  // Compute original index and target index for "Your Business"
  // Original order: a, b, c, you, d  (you at index 3 = rank 4)
  // Target order:   you, a, b, c, d  (you at index 0 = rank 1)

  const initialOrder = ['a','b','c','you','d'];
  const finalOrder   = ['you','a','b','c','d'];

  // Rise progress 0..1 over riseStart..riseEnd
  const rise = cf(t, T.riseStart, T.riseEnd, Easing.easeInOutCubic);

  // Early phase: results cascade in
  const cascade = cf(t, T.resultsIn, T.resultsDone, Easing.easeOutCubic);

  // Glow phase: 0..1 as "you" becomes #1
  const glow = cf(t, T.glowStart, T.peakStart, Easing.easeOutCubic);

  // Focus: dim other cards when you rises to #1
  const focus = cf(t, T.riseStart + 0.8, T.peakStart, Easing.easeInOutCubic);

  // Compute Y position for each listing at current t
  // and apply the reorder animation.
  const getRow = (id) => {
    const fromIdx = initialOrder.indexOf(id);
    const toIdx   = finalOrder.indexOf(id);
    // Smooth float from fromIdx to toIdx
    return fromIdx + (toIdx - fromIdx) * rise;
  };

  const cards = LISTINGS.map((L) => {
    const rowFloat = getRow(L.id);
    const fromIdx = initialOrder.indexOf(L.id);
    const toIdx   = finalOrder.indexOf(L.id);
    const displayRank = Math.round(rowFloat) + 1;

    // Stagger per-row cascade entry
    const rowDelay = fromIdx * 0.08;
    const cascadeT = cf(t, T.resultsIn + rowDelay, T.resultsIn + rowDelay + 0.5, Easing.easeOutCubic);

    // Vertical position
    const y = rowFloat * ROW_STRIDE;

    // Scale & opacity
    let scale = 0.97 + 0.03 * cascadeT;
    let opacity = cascadeT;

    // "You" gets a little lift during the rise + pop when arriving
    const arriveProg = cf(t, T.riseEnd - 0.25, T.riseEnd + 0.15, Easing.easeOutBack);
    if (L.isYou) {
      if (rise > 0 && rise < 1) {
        scale += 0.02; // lifts
      }
      if (t > T.riseEnd - 0.2) {
        scale = 1 + 0.04 * arriveProg * (1 - cf(t, T.riseEnd + 0.4, T.riseEnd + 1.0));
      }
    } else {
      // Depressed competitors after you takes #1
      const depressed = focus;
      scale *= (1 - depressed * 0.015);
    }

    // Per-row zIndex — you floats above during rise
    const zIndex = L.isYou ? 20 : 10 - Math.abs(toIdx - fromIdx);

    return (
      <div key={L.id} style={{
        position: 'absolute',
        left: 0, right: 0,
        top: y,
        zIndex,
        transition: 'none',
      }}>
        <ListingCard
          listing={L}
          displayRank={displayRank}
          isTop={L.isYou && rise > 0.5}
          glow={L.isYou ? glow : 0}
          scale={scale}
          opacity={opacity}
          depressed={!L.isYou ? focus : 0}
        />
      </div>
    );
  });

  return (
    <div style={{position: 'relative', width: '100%', height: 5 * ROW_STRIDE}}>
      {cards}
      {/* Rise trail — subtle motion echo behind "you" during movement */}
      <RiseTrail t={t}/>
    </div>
  );
}

function RiseTrail({ t }) {
  const visible = t >= T.riseStart && t <= T.riseEnd + 0.3;
  if (!visible) return null;
  const rise = cf(t, T.riseStart, T.riseEnd, Easing.easeInOutCubic);
  const fromIdx = 3, toIdx = 0;
  const rowFloat = fromIdx + (toIdx - fromIdx) * rise;
  const yStart = fromIdx * ROW_STRIDE;
  const yEnd = rowFloat * ROW_STRIDE;

  // Animated light streaks behind the card
  return (
    <div style={{
      position:'absolute', left: 0, right: 0,
      top: Math.min(yStart, yEnd),
      height: Math.abs(yStart - yEnd) + CARD_H,
      pointerEvents: 'none',
      zIndex: 1,
    }}>
      <div style={{
        position:'absolute', left: 60, right: 60,
        top: CARD_H/2, bottom: CARD_H/2,
        background: `linear-gradient(to top, ${CYAN}00, ${CYAN}55, ${CYAN}00)`,
        filter: 'blur(12px)',
        opacity: 0.6 * Math.sin(rise * Math.PI),
        borderRadius: 40,
      }}/>
    </div>
  );
}

// =============================================================================
// TYPING COMPONENT
// =============================================================================
function TypedQuery({ t }) {
  const start = T.typeStart;
  const end = T.typeEnd;
  const prog = clamp((t - start) / (end - start), 0, 1);
  const eased = Easing.easeOutQuad(prog);
  const chars = Math.floor(eased * QUERY.length);
  return QUERY.slice(0, chars);
}

// =============================================================================
// RESULTS META LINE
// =============================================================================
function ResultsMeta({ t }) {
  const op = cf(t, T.resultsIn - 0.1, T.resultsIn + 0.5);
  return (
    <div style={{
      fontFamily:'Inter, system-ui, sans-serif', fontSize: 12, color: INK_SOFT,
      padding: '12px 40px 0 40px',
      opacity: op,
    }}>
      About 482,000 results <span style={{color:'#bdc1c6'}}>·</span> 0.38 sec <span style={{color:'#bdc1c6'}}>·</span> Laval, QC
    </div>
  );
}

// =============================================================================
// RESULTS PANE
// =============================================================================
function ResultsPane({ t }) {
  const visible = t >= T.resultsIn - 0.2;
  if (!visible) return null;
  const op = cf(t, T.resultsIn - 0.1, T.resultsIn + 0.4);

  return (
    <div style={{
      padding: '24px 40px 40px 40px',
      opacity: op,
      display: 'flex', gap: 28,
    }}>
      <div style={{flex: 1, minWidth: 0, maxWidth: 820}}>
        <div style={{
          fontFamily:'Inter, system-ui, sans-serif',
          fontSize: 11, fontWeight: 700,
          color: INK_SOFT, letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: 14,
          display:'flex', alignItems:'center', gap: 10,
        }}>
          <span>Local results</span>
          <div style={{flex:1, height:1, background: HAIR}}/>
        </div>
        <ListingsStack t={t}/>
      </div>
      <div>
        <MapPane listings={mapListings(t)} highlight={highlightId(t)} t={t}/>
      </div>
    </div>
  );
}

function highlightId(t) {
  if (t >= T.riseStart) return 'you';
  return null;
}

function mapListings(t) {
  const rise = cf(t, T.riseStart, T.riseEnd, Easing.easeInOutCubic);
  const initialOrder = ['a','b','c','you','d'];
  const finalOrder   = ['you','a','b','c','d'];
  return LISTINGS.map(L => {
    const fromIdx = initialOrder.indexOf(L.id);
    const toIdx = finalOrder.indexOf(L.id);
    const rowFloat = fromIdx + (toIdx - fromIdx) * rise;
    return { ...L, displayRank: Math.round(rowFloat) + 1 };
  });
}

// =============================================================================
// BOOM / PULSE when reaching #1
// =============================================================================
function ImpactPulse({ t }) {
  const start = T.riseEnd - 0.05;
  const end = T.riseEnd + 0.9;
  if (t < start || t > end) return null;
  const p = (t - start) / (end - start);
  const r = 40 + p * 380;
  const op = (1 - p) * 0.55;

  return (
    <div style={{
      position:'absolute',
      // centered on where "Your Business" card sits when at #1
      // results pane padding (24+40=64 from top of chrome content)
      // + meta line ~28 + label ~24 = ~116; card center = 116 + 54
      left: 80 + 40, top: 44 + 22 + 22 /*search*/ + 50 + 22 + 12 /*tabs*/ + 32 + 24 + 14 + 54,
      pointerEvents: 'none',
      zIndex: 30,
    }}>
      <div style={{
        width: r*2, height: r*2,
        border: `2px solid ${CYAN}`,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: op,
        boxShadow: `0 0 40px ${CYAN}88`,
      }}/>
    </div>
  );
}

// =============================================================================
// CAPTION OVERLAY — minimal tagline at peak
// =============================================================================
function Caption({ t }) {
  const start = T.peakStart + 0.2;
  const end = T.duration - 0.5;
  if (t < start - 0.4) return null;
  const op = cf(t, start, start + 0.5) - cf(t, end - 0.4, end);
  const ty = (1 - cf(t, start, start + 0.6, Easing.easeOutCubic)) * 14;

  return (
    <div style={{
      position: 'absolute',
      left: 0, right: 0, bottom: 36,
      display:'flex', justifyContent:'center',
      opacity: Math.max(0, op),
      transform: `translateY(${ty}px)`,
      pointerEvents:'none',
    }}>
      <div style={{
        background: 'rgba(14, 20, 40, 0.78)',
        backdropFilter: 'blur(20px)',
        color:'#fff',
        padding: '14px 28px',
        borderRadius: 999,
        fontFamily:'Inter, system-ui, sans-serif',
        fontSize: 18, fontWeight: 500,
        letterSpacing: '-0.005em',
        display:'flex', alignItems:'center', gap: 14,
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: 4, background: CYAN,
          boxShadow: `0 0 12px ${CYAN}`,
        }}/>
        <span style={{opacity: 0.7}}>Rank #4</span>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M1 6h14m0 0l-5-5m5 5l-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{
          background: `linear-gradient(90deg, ${CYAN}, #fff)`,
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          fontWeight: 700,
        }}>Rank #1</span>
        <span style={{opacity: 0.55, fontSize: 14, marginLeft: 6}}>Higher rankings. More customers.</span>
      </div>
    </div>
  );
}

// =============================================================================
// BACKGROUND AMBIENCE
// =============================================================================
function Ambience({ t }) {
  const atPeak = cf(t, T.riseEnd, T.peakStart, Easing.easeOutCubic);
  return (
    <div style={{position:'absolute', inset: 0, pointerEvents:'none'}}>
      <div style={{
        position:'absolute', left:-200, top:-200, width: 1200, height: 1200,
        background: `radial-gradient(circle at center, oklch(92% 0.04 235) 0%, transparent 55%)`,
        opacity: 0.5,
      }}/>
      <div style={{
        position:'absolute', right:-300, bottom:-300, width: 1400, height: 1400,
        background: `radial-gradient(circle at center, ${CYAN}22 0%, transparent 55%)`,
        opacity: 0.25 + 0.55 * atPeak,
        transition: 'opacity 1s',
      }}/>
      {/* Vignette */}
      <div style={{
        position:'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(8,14,30,0.18) 100%)',
      }}/>
    </div>
  );
}

// =============================================================================
// MAIN SCENE
// =============================================================================
function Scene() {
  const t = useTime();
  const query = TypedQuery({ t });
  const showCaret = t >= T.typeStart && t < T.submitAt + 0.1;
  const showResultsMeta = t >= T.resultsIn - 0.1;

  return (
    <>
      <Ambience t={t}/>
      <BrowserChrome>
        <SearchHeader query={query} showCaret={showCaret} showResultsMeta={showResultsMeta}/>
        <ResultsMeta t={t}/>
        <ResultsPane t={t}/>
      </BrowserChrome>
      <ImpactPulse t={t}/>
      <Caption t={t}/>
    </>
  );
}

// =============================================================================
// APP
// =============================================================================
function App() {
  return (
    <>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        * { box-sizing: border-box; }
      `}</style>
      <Stage
        width={1920}
        height={1080}
        duration={T.duration}
        background="#eef1f6"
        persistKey="seo-rise"
      >
        <Scene/>
      </Stage>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
