const findings = [
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
    id: 'blh',
    title: 'Broken Link Hijacking',
    type: 'Asset Takeover',
    severity: 'Medium',
    severityColor: '#f59e0b',
    summary:
      'Link eksternal ke resource mati / tidak diklaim. Slot kosong bisa diambil pihak lain.',
  },
  {
    id: 'git-exposed',
    title: 'Git Repository Exposed',
    type: 'Misconfiguration',
    severity: 'High',
    severityColor: '#ef4444',
    summary:
      'Metadata Git bisa diakses dari luar. Sering buka source, history, atau credential di commit lama.',
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
            Beberapa tipe bug yang sempat saya temukan. Nama target dan PoC tidak ditampilkan.
          </p>
        </div>

        <div
          className="reveal-element findings-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '0.9rem',
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
                padding: '1.15rem 1.05rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
                height: 'auto',
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
                  fontSize: '0.62rem',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: item.severityColor,
                  border: `1px solid ${item.severityColor}44`,
                  background: `${item.severityColor}14`,
                  borderRadius: '4px',
                  padding: '0.12rem 0.4rem',
                }}>
                  {item.severity}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.92rem',
                color: 'var(--color-text-primary)',
                margin: 0,
                lineHeight: 1.35,
              }}>
                {item.title}
              </h3>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.04em',
              }}>
                {item.type}
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
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
          marginTop: '1.35rem',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.6,
        }}>
          Bukti formal ada di section Certificates & Hall of Fame.
        </p>
      </div>
    </section>
  )
}
