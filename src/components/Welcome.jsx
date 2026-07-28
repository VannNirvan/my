const facts = [
  { k: 'Sekolah', v: 'SMK Telekomunikasi DU' },
  { k: 'Mulai serius', v: 'Maret 2026' },
  { k: 'Fokus', v: 'Cyber Security' },
  { k: 'Cara lapor', v: 'CSIRT / VDP resmi' },
  { k: 'Alias', v: '404notvan' },
  { k: 'Status', v: 'Pelajar' },
]

export default function Welcome() {
  return (
    <section id="about" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.04)', filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        <div style={{ marginBottom: '2.75rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">
              About <span style={{ color: 'var(--color-accent)' }}>Me</span>
            </h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{
            textAlign: 'center', color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '1rem',
          }}>
            // sedikit cerita di balik portofolio ini
          </p>
        </div>

        <div className="reveal-element" style={{
          maxWidth: '820px',
          margin: '0 auto 2.25rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            lineHeight: 1.8,
            color: 'var(--color-text-primary)',
            marginBottom: '1.15rem',
          }}>
            Halo, saya{' '}
            <strong style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Nirvan Respati Hadi</strong>
            . Di komunitas bug hunting saya lebih dikenal sebagai{' '}
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>404notvan</span>.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
            marginBottom: '1.15rem',
          }}>
            Saya siswa SMK yang baru serius masuk cyber security sejak Maret 2026.
            Awalnya cuma coba recon dan buka-buka source di browser, lalu pelan-pelan
            mulai nemu hal yang layak dilaporkan — token bocor, XSS, misconfig, sampai
            broken link yang bisa di-hijack.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}>
            Saya belum expert. Yang saya usahakan: temuan ditulis jelas, dikirim lewat
            jalur resmi (CSIRT / VDP), dan tidak dipublikasikan detail exploit-nya.
            Portofolio ini lebih ke dokumentasi proses belajar saya, plus beberapa
            apresiasi yang sempat diterima.
          </p>
        </div>

        {/* Fixed 3×2 grid — no orphan card */}
        <div
          className="reveal-element about-facts-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.85rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {facts.map((item) => (
            <div
              key={item.k}
              style={{
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                background: 'rgba(15,18,33,0.7)',
                padding: '1rem 1.05rem',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
              }}>
                {item.k}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                lineHeight: 1.35,
              }}>
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
