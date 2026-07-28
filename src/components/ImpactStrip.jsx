const stats = [
  { value: '5+', label: 'Findings' },
  { value: '5', label: 'Certificates' },
  { value: '1', label: 'Hall of Fame' },
  { value: '2026', label: 'Started' },
]

export default function ImpactStrip() {
  return (
    <section
      id="impact"
      style={{
        position: 'relative',
        padding: '2.25rem 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'rgba(15,18,33,0.45)',
      }}
    >
      <div className="site-container">
        <div
          className="reveal-element impact-strip-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {stats.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0.75rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
              className="impact-stat"
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                color: 'var(--color-accent)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
                {item.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
