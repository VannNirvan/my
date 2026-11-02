import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const asset = (path) => `${import.meta.env.BASE_URL || '/'}${path.replace(/^\//, '')}`

// Prioritas: CSIRT Nasional & Tingkat Provinsi/Media Nasional di urutan 9 teratas
const certData = [
  {
    id: 'csirt-bmkg',
    file: asset('sertifikat/CSIRT BMKG.webp'),
    title: 'BMKG CSIRT',
    source: 'Badan Meteorologi, Klimatologi, dan Geofisika',
    sourceType: 'National Agency CSIRT',
    year: '2025',
    color: '#0ea5e9',
    caption: 'Sertifikat Apresiasi Kesiapsiagaan & Keamanan Siber dari BMKG CSIRT',
  },
  {
    id: 'csirt-pupr',
    file: asset('sertifikat/CSIRT Kemenpu.webp'),
    title: 'CSIRT Kementerian PUPR',
    source: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat',
    sourceType: 'Ministry CSIRT',
    year: '2025',
    color: '#f97316',
    caption: 'Sertifikat Apresiasi Pelaporan Kerentanan dari PUPR-CSIRT',
  },
  {
    id: 'csirt-jakarta',
    file: asset('sertifikat/CSIRT Jakarta.webp'),
    title: 'CSIRT DKI Jakarta',
    source: 'Pemerintah Provinsi DKI Jakarta',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#06b6d4',
    caption: 'Sertifikat Apresiasi Bug Hunting dari JakartaProv-CSIRT',
  },
  {
    id: 'csirt-jabar',
    file: asset('sertifikat/CSIRT JabarProv.webp'),
    title: 'CSIRT Jawa Barat',
    source: 'Pemerintah Provinsi Jawa Barat',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#10b981',
    caption: 'Surat Tanda Penghargaan Penanganan Insiden Siber JabarProv-CSIRT',
  },
  {
    id: 'csirt-jogja',
    file: asset('sertifikat/CSIRT Jogja.webp'),
    title: 'CSIRT D.I. Yogyakarta',
    source: 'Pemerintah Daerah D.I. Yogyakarta',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#a855f7',
    caption: 'Apresiasi Vulnerability Report dari JogjaProv-CSIRT',
  },
  {
    id: 'csirt-kaltara',
    file: asset('sertifikat/CSIRT Kaltara.webp'),
    title: 'CSIRT Kaltara',
    source: 'Pemerintah Provinsi Kalimantan Utara',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#eab308',
    caption: 'Sertifikat Apresiasi Keamanan Siber dari KaltaraProv-CSIRT',
  },
  {
    id: 'detik',
    file: asset('sertifikat/Detik.com.webp'),
    title: 'Detik.com',
    source: 'Detik.com',
    sourceType: 'Media Nasional',
    year: '2025',
    color: '#ff4b78',
    caption: 'Penghargaan Responsible Disclosure dari Detik.com',
  },
  {
    id: 'csirt-depok',
    file: asset('sertifikat/CSIRT Depok.webp'),
    title: 'CSIRT Kota Depok',
    source: 'DepokKota-CSIRT',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#6366f1',
    caption: 'Apresiasi Pengamanan Celah Kerentanan dari DepokKota-CSIRT',
  },
  {
    id: 'csirt-cimahi',
    file: asset('sertifikat/CSIRT Cimahi.webp'),
    title: 'CSIRT Kota Cimahi',
    source: 'CSIRT Kota Cimahi',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#3b82f6',
    caption: 'Letter of Appreciation dari CSIRT Kota Cimahi',
  },
  {
    id: 'csirt-banda-aceh',
    file: asset('sertifikat/CSIRT Banda Aceh.webp'),
    title: 'CSIRT Banda Aceh',
    source: 'Pemerintah Kota Banda Aceh',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#14b8a6',
    caption: 'Letter of Appreciation Penyelamatan Aset Siber BandaAcehKota-CSIRT',
  },
  {
    id: 'csirt-banjarmasin',
    file: asset('sertifikat/CSIRT BanjarmasinKota.webp'),
    title: 'CSIRT Banjarmasin',
    source: 'Pemerintah Kota Banjarmasin',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#38bdf8',
    caption: 'Sertifikat Apresiasi Penemuan Celah Keamanan BanjarmasinKota-CSIRT',
  },
  {
    id: 'csirt-banyuwangi',
    file: asset('sertifikat/CSIRT Banyuwangi.webp'),
    title: 'CSIRT Banyuwangi',
    source: 'Pemerintah Kabupaten Banyuwangi',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#f59e0b',
    caption: 'Sertifikat Pengakuan Koordinasi Kerentanan dari BanyuwangiKab-CSIRT',
  },
  {
    id: 'csirt-tuban',
    file: asset('sertifikat/CSIRT Kabupaten Tuban.webp'),
    title: 'CSIRT Tuban',
    source: 'Pemerintah Kabupaten Tuban',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#ec4899',
    caption: 'Penghargaan Pengamanan Siber SPBE dari TubanKab-CSIRT',
  },
  {
    id: 'csirt-bojonegoro',
    file: asset('sertifikat/CSIRT Bojonegoro.webp'),
    title: 'CSIRT Bojonegoro',
    source: 'Pemerintah Kabupaten Bojonegoro',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#8b5cf6',
    caption: 'Surat Apresiasi Mitigasi Keamanan Siber BojonegoroKab-CSIRT',
  },
  {
    id: 'csirt-nganjuk',
    file: asset('sertifikat/CSIRT Nganjuk.webp'),
    title: 'CSIRT Nganjuk',
    source: 'Pemerintah Kabupaten Nganjuk',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#2563eb',
    caption: 'Apresiasi Responsible Disclosure Kerentanan NganjukKab-CSIRT',
  },
  {
    id: 'csirt-sumbawa',
    file: asset('sertifikat/CSIRT Sumbawakab.webp'),
    title: 'CSIRT Sumbawa',
    source: 'Pemerintah Kabupaten Sumbawa',
    sourceType: 'Government CSIRT',
    year: '2025',
    color: '#9333ea',
    caption: 'Letter of Appreciation Pengujian Keamanan Siber SumbawaKab-CSIRT',
  },
  {
    id: 'dreamparts',
    file: asset('sertifikat/dreamparts.jpg'),
    title: 'DreamParts',
    source: 'DreamParts',
    sourceType: 'Private Sector',
    year: '2025',
    color: '#f43f5e',
    caption: 'Apresiasi Pengamanan Layanan Digital dari DreamParts',
  },
]

function CertCard({ cert, onClick }) {
  return (
    <div
      className="reveal-element cert-real-card"
      onClick={onClick}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        border: '1px solid var(--color-border)',
        background: 'rgba(15,18,33,0.9)',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: '12px',
        background: cert.color,
        opacity: 0.03,
        pointerEvents: 'none',
      }} />

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

      <div style={{ padding: '0.85rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>{cert.title}</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-text-muted)' }}>{cert.year}</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: cert.color, letterSpacing: '0.04em' }}>
          {cert.source}
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const ITEMS_PER_PAGE = 6
  const totalPages = Math.ceil(certData.length / ITEMS_PER_PAGE)

  const currentCerts = certData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )

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

  const goToPage = (pageIdx) => {
    setCurrentPage(pageIdx)
    const el = document.getElementById('certs')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="certs" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59,130,246,0.03)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="site-container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">Certificates</h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '1rem' }}>
            // Menampilkan {currentCerts.length} dari {certData.length} sertifikat (Halaman {currentPage + 1} dari {totalPages})
          </p>
        </div>

        {/* Cert grid — 6 items per page (3 top, 3 bottom) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="cert-grid-responsive"
          >
            {currentCerts.map((cert) => (
              <CertCard key={cert.id} cert={cert} onClick={() => setLightbox(cert)} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Pagination Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          marginTop: '2.75rem',
          flexWrap: 'wrap',
        }}>
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => goToPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              borderRadius: '999px',
              border: '1px solid rgba(59,130,246,0.25)',
              background: currentPage === 0 ? 'rgba(15,18,33,0.3)' : 'rgba(15,18,33,0.85)',
              color: currentPage === 0 ? 'rgba(255,255,255,0.25)' : 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.45 : 1,
              transition: 'all 0.25s ease',
              boxShadow: currentPage === 0 ? 'none' : '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Sebelumnya</span>
          </button>

          {/* Page Indicator Dots / Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(15,18,33,0.6)',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid rgba(59,130,246,0.15)',
          }}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToPage(idx)}
                style={{
                  width: idx === currentPage ? '24px' : '9px',
                  height: '9px',
                  borderRadius: '999px',
                  background: idx === currentPage ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                  boxShadow: idx === currentPage ? '0 0 10px var(--color-accent)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                aria-label={`Ke Halaman ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              borderRadius: '999px',
              border: '1px solid rgba(59,130,246,0.25)',
              background: currentPage === totalPages - 1 ? 'rgba(15,18,33,0.3)' : 'rgba(15,18,33,0.85)',
              color: currentPage === totalPages - 1 ? 'rgba(255,255,255,0.25)' : 'var(--color-text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages - 1 ? 0.45 : 1,
              transition: 'all 0.25s ease',
              boxShadow: currentPage === totalPages - 1 ? 'none' : '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            <span>Selanjutnya</span>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
            background: 'rgba(4,6,12,0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem 0.65rem',
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
              maxHeight: '94vh',
              background: 'rgba(11,14,26,0.98)',
              border: `1px solid ${lightbox.color}55`,
              borderRadius: '16px',
              padding: '1.25rem 0.9rem',
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
                top: '0.75rem',
                right: '0.75rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                fontSize: '1.4rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                transition: 'all 0.2s ease',
                zIndex: 10,
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
              aria-label="Tutup"
            >
              ×
            </button>

            <img
              src={lightbox.file}
              alt={lightbox.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
              }}
            />

            <div style={{ marginTop: '1.25rem', textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: lightbox.color }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}>
                  {lightbox.title}
                </h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--color-text-muted)',
                }}>
                  {lightbox.year}
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}>
                {lightbox.caption}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
