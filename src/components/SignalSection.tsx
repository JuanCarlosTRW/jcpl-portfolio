'use client'

import { useState, useRef } from 'react'
import { transmit } from '@/data/fragments'

export default function SignalSection() {
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleTransmit(e: React.FormEvent) {
    e.preventDefault()

    const latNum = parseFloat(lat)
    const lngNum = parseFloat(lng)

    if (isNaN(latNum) || isNaN(lngNum)) return
    if (latNum < -90 || latNum > 90) return
    if (lngNum < -180 || lngNum > 180) return

    /* fade out existing result, then swap and fade in */
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)

    timerRef.current = setTimeout(() => {
      setResult(transmit(latNum, lngNum))
      setVisible(true)
    }, 200)
  }

  return (
    <section
      style={{
        background: '#F4F1EA',
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8A8074',
            marginBottom: 32,
          }}
        >
          Section 04 &mdash; Signal
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(36px, 6vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#1A1510',
            marginBottom: 24,
          }}
        >
          Send a signal.
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            lineHeight: 1.65,
            color: 'rgba(26,21,16,0.75)',
            marginBottom: 56,
          }}
        >
          Enter coordinates. Receive a fragment from a place that does not exist.
        </p>

        {/* Form */}
        <form onSubmit={handleTransmit} style={{ marginBottom: 56 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              marginBottom: 32,
            }}
          >
            {/* Latitude */}
            <div>
              <label
                htmlFor="lat"
                style={{
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,21,16,0.5)',
                  marginBottom: 8,
                }}
              >
                Latitude
              </label>
              <input
                id="lat"
                type="number"
                min={-90}
                max={90}
                step="any"
                placeholder="73.5"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(26,21,16,0.2)',
                  padding: '12px 0',
                  fontSize: 18,
                  color: '#1A1510',
                  outline: 'none',
                  fontFamily: 'monospace',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderBottomColor = 'rgba(26,21,16,0.8)')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderBottomColor = 'rgba(26,21,16,0.2)')
                }
              />
            </div>

            {/* Longitude */}
            <div>
              <label
                htmlFor="lng"
                style={{
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,21,16,0.5)',
                  marginBottom: 8,
                }}
              >
                Longitude
              </label>
              <input
                id="lng"
                type="number"
                min={-180}
                max={180}
                step="any"
                placeholder="12.4"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(26,21,16,0.2)',
                  padding: '12px 0',
                  fontSize: 18,
                  color: '#1A1510',
                  outline: 'none',
                  fontFamily: 'monospace',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderBottomColor = 'rgba(26,21,16,0.8)')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderBottomColor = 'rgba(26,21,16,0.2)')
                }
              />
            </div>
          </div>

          {/* Transmit button */}
          <button
            type="submit"
            style={{
              display: 'block',
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#1A1510',
              background: 'transparent',
              border: '1px solid rgba(26,21,16,0.3)',
              padding: '14px 32px',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#B8452A'
              e.currentTarget.style.color = '#B8452A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(26,21,16,0.3)'
              e.currentTarget.style.color = '#1A1510'
            }}
          >
            Transmit
          </button>
        </form>

        {/* Result fragment */}
        {result && (
          <p
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 3vw, 26px)',
              lineHeight: 1.55,
              color: '#1A1510',
              maxWidth: 520,
              opacity: visible ? 1 : 0,
              transition: 'opacity 1.5s ease',
            }}
          >
            {result}
          </p>
        )}

      </div>
    </section>
  )
}
