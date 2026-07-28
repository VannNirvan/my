import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const hofEntries = [
  {
    id: 'nasa',
    organization: 'NASA',
    program: 'National Aeronautics and Space Administration (NASA) — Vulnerability Disclosure Program',
    platform: 'Bugcrowd',
    username: 'Nirvan_Respati_Hadi',
    year: '2026',
    programImg: `${import.meta.env.BASE_URL || '/'}hof/nasa/nasa.webp`,
    hofImg: `${import.meta.env.BASE_URL || '/'}hof/nasa/hof.webp`,
    color: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.35)',
    desc: 'Listed on NASA\'s official Vulnerability Disclosure Program Hall of Fame via Bugcrowd for identifying and responsibly reporting a security vulnerability.',
  },
]

export default function HallOfFame() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section ref={sectionRef} id="hof" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient */}
      <div style={{
        position: 'absolute', top: '20%', left: '30%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.04)', filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '15%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(168,85,247,0.03)', filter: 'blur(90px)',
        pointerEvents: 'none',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">
              Hall of <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>Fame</span>
            </h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{
            textAlign: 'center', color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '1rem',
          }}>
            // recognized by world-class organizations
          </p>
        </div>

        {/* HOF Entries */}
        {hofEntries.map((entry, idx) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(15,18,33,0.75)',
              backdropFilter: 'blur(20px)',
              border: `1px solid rgba(59,130,246,0.12)`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${entry.glowColor}`,
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Top Bar — Organization Badge */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1rem 1.5rem',
              borderBottom: '1px solid rgba(59,130,246,0.08)',
              background: 'rgba(11,14,26,0.6)',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.1rem', color: 'var(--color-text-primary)',
                  letterSpacing: '-0.01em',
                }}>
                  {entry.organization}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: entry.color, letterSpacing: '0.08em', marginTop: '0.2rem',
                }}>
                  {entry.platform} · {entry.year}
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.75rem', borderRadius: '999px',
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#10b981', boxShadow: '0 0 8px #10b981',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: '#10b981', letterSpacing: '0.08em',
                }}>
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Main Content Area */}
            <div style={{ padding: '1.75rem 1.5rem' }}>
              {/* Program Description */}
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.7,
                marginBottom: '1.5rem', maxWidth: '700px',
              }}>
                {entry.desc}
              </p>

              {/* NASA Program Screenshot */}
              <div style={{
                marginBottom: '1.5rem',
                borderRadius: '10px',
                border: '1px solid rgba(59,130,246,0.1)',
                overflow: 'hidden',
                background: '#0a0c16',
                position: 'relative',
              }}>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(11,14,26,0.8)',
                  borderBottom: '1px solid rgba(59,130,246,0.06)',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }} />
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    color: 'var(--color-text-muted)', letterSpacing: '0.06em',
                  }}>
                    bugcrowd.com/nasa — Vulnerability Disclosure Program
                  </span>
                </div>
                <img
                  src={entry.programImg}
                  alt={`${entry.organization} Vulnerability Disclosure Program`}
                  loading="lazy"
                  style={{
                    width: '100%', display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Hall of Fame Researchers List */}
              <div style={{
                borderRadius: '10px',
                border: '1px solid rgba(59,130,246,0.1)',
                overflow: 'hidden',
                background: '#0a0c16',
                position: 'relative',
              }}>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(11,14,26,0.8)',
                  borderBottom: '1px solid rgba(59,130,246,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      color: 'var(--color-text-muted)', letterSpacing: '0.06em',
                    }}>
                      Hall of Fame — Acknowledged Researchers
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                    color: entry.color, letterSpacing: '0.1em',
                    padding: '2px 8px', borderRadius: '3px',
                    background: `${entry.color}12`, border: `1px solid ${entry.color}25`,
                  }}>
                    LISTED
                  </span>
                </div>
                <div style={{ position: 'relative' }}>
                  <img
                    src={entry.hofImg}
                    alt={`${entry.organization} Hall of Fame — ${entry.username}`}
                    loading="lazy"
                    style={{
                      width: '100%', display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                  {/* Highlight glow around the username area */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(59,130,246,0.06) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>

              {/* User Badge */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  marginTop: '1.25rem',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '10px',
                  background: 'rgba(59,130,246,0.05)',
                  border: '1px solid rgba(59,130,246,0.12)',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.95rem', color: 'var(--color-text-primary)',
                    marginBottom: '0.15rem',
                  }}>
                    {entry.username}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--color-text-secondary)', letterSpacing: '0.04em',
                  }}>
                    Security Researcher — Acknowledged by {entry.organization} via {entry.platform}
                  </div>
                </div>
                <div style={{
                  padding: '0.3rem 0.7rem', borderRadius: '4px',
                  background: `${entry.color}15`, border: `1px solid ${entry.color}25`,
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: entry.color, letterSpacing: '0.08em', flexShrink: 0,
                }}>
                  HOF #{idx + 1}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
