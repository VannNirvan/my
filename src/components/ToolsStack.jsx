const categories = [
  {
    title: 'Recon',
    tools: ['Nmap', 'ffuf', 'httpx', 'subfinder', 'wayback'],
  },
  {
    title: 'Web testing',
    tools: ['Burp Suite', 'DevTools', 'Postman', 'Nuclei'],
  },
  {
    title: 'Environment',
    tools: ['Linux / Kali', 'Git', 'VS Code'],
  },
  {
    title: 'Scripting',
    tools: ['Python', 'Bash'],
  },
]

export default function ToolsStack() {
  return (
    <section id="tools" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: '15%', right: '8%',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.03)', filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">
              Tools & <span style={{ color: 'var(--color-accent)' }}>Stack</span>
            </h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            marginTop: '1rem',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.65,
          }}>
            Tool yang sering saya pakai saat hunting.
          </p>
        </div>

        <div
          className="reveal-element tools-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                background: 'rgba(15,18,33,0.75)',
                padding: '1.25rem 1.15rem',
                minHeight: '100%',
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--color-text-primary)',
                margin: '0 0 1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                {cat.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
              }}>
                {cat.tools.map((name) => (
                  <li
                    key={name}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.86rem',
                      color: 'var(--color-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--color-accent)',
                      flexShrink: 0,
                      opacity: 0.8,
                    }} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
