import type { Metadata } from 'next'
import SignalSection from '@/components/SignalSection'
import FragmentArchiveClient from '@/components/FragmentArchiveClient'

export const metadata: Metadata = {
  title: 'Field Notes from Nowhere',
  description: 'Enter coordinates. Receive a fragment from a place that does not exist.',
  openGraph: {
    title: 'Field Notes from Nowhere',
    description: 'Enter coordinates. Receive a fragment from a place that does not exist.',
    type: 'website',
  },
}

export default function FieldNotesPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

      {/* ── Section 01: Hero ─────────────────────────────────────── */}
      <section
        style={{
          background: '#0a0a0a',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 32,
            }}
          >
            Section 01 &mdash; Transmission
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(48px, 9vw, 96px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 40,
            }}
          >
            Field Notes<br />from Nowhere
          </h1>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            Scroll to enter
          </p>
        </div>
      </section>

      {/* ── Section 02: Archive (Three.js) ───────────────────────── */}
      <section>
        <div
          style={{
            padding: '60px 24px 32px',
            background: '#0a0a0a',
          }}
        >
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                marginBottom: 24,
              }}
            >
              Section 02 &mdash; Archive
            </p>
          </div>
        </div>
        <FragmentArchiveClient />
      </section>

      {/* ── Section 03: Index ────────────────────────────────────── */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '120px 24px',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: 32,
            }}
          >
            Section 03 &mdash; Index
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            These notes were found at coordinates that do not appear on any current map.
            Their origin is unknown. Their accuracy has not been verified.
          </p>
        </div>
      </section>

      {/* ── Section 04: Signal ───────────────────────────────────── */}
      <SignalSection />

      {/* ── Colophon ─────────────────────────────────────────────── */}
      <footer
        style={{
          background: '#0a0a0a',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          Field Notes from Nowhere &middot; Transmission ongoing
        </p>
      </footer>

    </main>
  )
}
