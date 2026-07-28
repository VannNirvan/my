import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const certData = [
  {
    id: 'detik',
    file: '/sertifikat/Detik.com.webp',
    title: 'Detik.com',
    source: 'Detik.com',
    sourceType: 'Media Nasional',
    year: '2025',
    color: '#ff4b78',
    caption: 'Penghargaan Responsible Disclosure dari Detik.com',
  },
  {
    id: 'csirt-cimahi',
    file: '/sertifikat/CSIRT Cimahi.webp',
    title: 'CSIRT Cimahi',
    source: 'CSIRT Kota Cimahi',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#3b82f6',
    caption: 'Letter of Appreciation dari CSIRT Kota Cimahi',
  },
  {
    id: 'csirt-jakarta',
    file: '/sertifikat/CSIRT Jakarta.webp',
    title: 'CSIRT Jakarta',
    source: 'CSIRT DKI Jakarta',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#10b981',
    caption: 'Sertifikat Apresiasi Bug Hunting dari CSIRT DKI Jakarta',
  },
  {
    id: 'csirt-jogja',
    file: '/sertifikat/CSIRT Jogja.webp',
    title: 'CSIRT Yogyakarta',
    source: 'CSIRT D.I. Yogyakarta',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#a855f7',
    caption: 'Apresiasi Vulnerability Report dari CSIRT D.I. Yogyakarta',
  },
  {
    id: 'csirt-kaltara',
    file: '/sertifikat/CSIRT Kaltara.webp',
    title: 'CSIRT Kaltara',
    source: 'CSIRT Kalimantan Utara',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#f59e0b',
    caption: 'Sertifikat Apresiasi Keamanan Siber dari CSIRT Kaltara',
  },
]

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (lightbox) {
      document.documentElement.setAttribute('data-lightbox-open', 'true')
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.removeAttribute('data-lightbox-open')
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.removeAttribute('data-lightbox-open')
      document.body.style.overflow = ''
    }
  }, [lightbox])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="certs" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59,130,246,0.03)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="site-container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">Certificates</h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '1rem' }}>
            // hall of fame &amp; acknowledgements from responsible disclosure
          </p>
        </div>

        {/* Cert grid — 3 per row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {certData.map((cert) => (
            <div
              key={cert.id}
              className="reveal-element cert-real-card"
              onClick={() => setLightbox(cert)}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: '1px solid var(--color-border)',
                background: 'rgba(15,18,33,0.85)',
                backdropFilter: 'blur(15px)',
              }}
            >
              {/* Stacked card effect behind */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '12px',
                background: cert.color,
                opacity: 0.03,
                pointerEvents: 'none',
              }} />

              {/* Thumbnail wrap */}
              <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
                <img
                  src={cert.file}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  className="cert-thumb"
                />
                {/* Hover Overlay */}
                <div className="cert-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6,8,16,0.95) 0%, rgba(6,8,16,0.3) 60%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: 'rgba(59,130,246,0.2)', border: '1.5px solid var(--color-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 16px rgba(59,130,246,0.4)',
                    }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span style={{ color: 'white', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em' }}>Buka Sertifikat</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div style={{ padding: '1rem 1.15rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>{cert.title}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{cert.year}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: cert.color, letterSpacing: '0.04em' }}>
                  {cert.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portal lightbox to body so it is not trapped under navbar stacking context */}
      {lightbox && createPortal(
        <div
          className="cert-lightbox"
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            background: 'rgba(4,6,12,0.96)',
            backdropFilter: 'blur(25px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.5rem',
            cursor: 'pointer',
          }}
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              background: 'rgba(11,14,26,0.98)',
              border: `1px solid ${lightbox.color}55`,
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: `0 30px 90px rgba(0,0,0,0.95), 0 0 60px ${lightbox.color}25`,
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                zIndex: 10,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            >
              ✕
            </button>

            <div style={{
              marginBottom: '1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              width: '100%',
              paddingRight: '2rem',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${lightbox.color}45`,
                borderRadius: '999px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lightbox.color, boxShadow: `0 0 8px ${lightbox.color}` }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: lightbox.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {lightbox.sourceType}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {lightbox.caption}
              </h3>
            </div>

            <div style={{
              width: '100%',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#04060a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '0.5rem',
            }}>
              <img
                src={lightbox.file}
                alt={lightbox.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: '6px',
                }}
              />
            </div>

            <div style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                Diperoleh dari <strong style={{ color: 'var(--color-text-primary)' }}>{lightbox.source}</strong> ({lightbox.year})
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                [ESC untuk menutup]
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
