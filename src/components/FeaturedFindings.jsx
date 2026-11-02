const findings = [
  {
    id: 'sqli',
    title: 'SQL Injection (SQLi)',
    type: 'Authentication Bypass',
    severity: 'Critical',
    severityColor: '#ff2d55',
    summary:
      'Injeksi SQL pada form autentikasi yang berhasil mem-bypass validasi kredensial, memberikan akses penuh langsung masuk ke dashboard admin.',
  },
  {
    id: 'bac-idor',
    title: 'Broken Access Control (IDOR)',
    type: 'Broken Access Control',
    severity: 'Critical',
    severityColor: '#ff2d55',
    summary:
      'Kegagalan pembatasan hak akses pada parameter ID request, memungkinkan pengaksesan dan manipulasi data sensitif milik pengguna lain tanpa otorisasi.',
  },
  {
    id: 'tg-token',
    title: 'Exposed Telegram Bot Token',
    type: 'Secret Exposure',
    severity: 'High',
    severityColor: '#ef4444',
    summary:
      'Token bot Telegram terbuka di tempat yang seharusnya privat. Dengan token itu, bot bisa dipakai mengirim pesan atas nama bot tersebut.',
  },
  {
    id: 'xss-stored',
    title: 'Stored XSS',
    type: 'Cross-Site Scripting',
    severity: 'High',
    severityColor: '#ef4444',
    summary:
      'Input tersimpan dan dieksekusi lagi saat halaman dibuka, tanpa sanitasi cukup. Bisa jalan di sesi korban.',
  },
  {
    id: 'pii',
    title: 'PII Leak',
    type: 'Information Disclosure',
    severity: 'High',
    severityColor: '#ef4444',
    summary:
      'Data pribadi muncul di response / endpoint yang tidak semestinya publik.',
  },
  {
    id: 'blh',
    title: 'Broken Link Hijacking',
    type: 'Asset Takeover',
    severity: 'Medium',
    severityColor: '#f59e0b',
    summary:
      'Link eksternal ke resource mati / tidak diklaim. Slot kosong bisa diambil pihak lain.',
  },
  {
    id: 'html-injection',
    title: 'HTML Injection',
    type: 'Content Injection',
    severity: 'Medium',
    severityColor: '#f59e0b',
    summary:
      'Input tidak terfilter disisipkan ke halaman web, memungkinkan manipulasi tampilan visual, injeksi markup, atau penyisipan form phishing.',
  },
]

export default function FeaturedFindings() {
  return (
    <section id="findings" className="section-spacing findings-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '25%', left: '12%',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.03)', filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">
              Featured <span style={{ color: 'var(--color-accent)' }}>Findings</span>
            </h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            marginTop: '1rem',
            maxWidth: '540px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.65,
          }}>
            Beberapa tipe bug pilihan dari 40+ temuan yang sempat saya laporkan. Nama target dan PoC tidak ditampilkan.
          </p>
        </div>

        <div
          className="reveal-element findings-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1rem',
            alignItems: 'stretch',
            marginTop: '1.5rem',
          }}
        >
          {findings.map((item, idx) => (
            <div
              key={item.id}
              className="finding-card"
              style={{
                background: 'rgba(15,18,33,0.85)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '1.25rem 1.15rem 1.3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                height: 'auto',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  color: item.severityColor,
                  border: `1px solid ${item.severityColor}55`,
                  background: `${item.severityColor}18`,
                  borderRadius: '4px',
                  padding: '0.15rem 0.5rem',
                  letterSpacing: '0.04em',
                }}>
                  {item.severity}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.96rem',
                color: 'var(--color-text-primary)',
                margin: 0,
                lineHeight: 1.35,
              }}>
                {item.title}
              </h3>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.04em',
              }}>
                {item.type}
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.55,
                margin: 0,
              }}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal-element" style={{
          marginTop: '1.75rem',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.6,
        }}>
          Bukti formal ada di section Certificates &amp; Hall of Fame.
        </p>
      </div>
    </section>
  )
}
