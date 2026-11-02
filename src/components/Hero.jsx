import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/IMG_20260315_032010_835.webp'

const base = import.meta.env.BASE_URL || '/'
const blueLogo = `${base}logo.png`

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="blue-grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — calm dark blue theme */}
      <div style={{
        position: 'absolute', top: '15%', left: '25%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.06)',
        filter: 'blur(130px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.03)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        <div className="hero-main-flex" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4rem',
          paddingTop: '8.5rem',
          paddingBottom: '3.5rem',
          flexWrap: 'wrap',
        }}>

          {/* ── LEFT: Static Blue Photo card ── */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '320px', margin: '0 auto' }}
          >
            <div style={{ width: '100%' }}>
              <div style={{
                width: '100%', height: '400px',
                position: 'relative',
              }}>
                <div className="cyber-photo-glitch" style={{
                  width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden',
                  border: '1px solid rgba(59,130,246,0.22)',
                  boxShadow: '6px 6px 0 rgba(59,130,246,0.06), 12px 12px 0 rgba(59,130,246,0.03), 0 30px 80px rgba(0,0,0,0.5)',
                  position: 'relative',
                }}>
                  <img
                    src={heroImg}
                    alt="Nirvan Respati Hadi"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(108%) brightness(0.9)', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '48%', background: 'linear-gradient(to top, rgba(6,8,16,0.92) 0%, rgba(6,8,16,0.45) 55%, transparent 100%)', zIndex: 2 }} />
                  <div style={{
                    position: 'absolute', bottom: '1.1rem', left: 0, right: 0, zIndex: 4,
                    padding: '0 1.15rem',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem',
                  }}>
                    <img
                      src={blueLogo}
                      alt="Nirvan logo"
                      style={{
                        height: '68px',
                        width: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'left bottom',
                        display: 'block',
                        filter: 'drop-shadow(0 0 14px rgba(59,130,246,0.6))',
                      }}
                    />
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'rgba(125,164,255,0.85)',
                      letterSpacing: '0.12em',
                    }}>
                      STUDENT · KEEP LEARNING
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '36px', height: '36px', borderTop: '2px solid rgba(59,130,246,0.6)', borderLeft: '2px solid rgba(59,130,246,0.6)', borderTopLeftRadius: '12px', zIndex: 5 }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: '36px', height: '36px', borderBottom: '2px solid rgba(59,130,246,0.35)', borderRight: '2px solid rgba(59,130,246,0.35)', borderBottomRightRadius: '12px', zIndex: 5 }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, minWidth: '280px' }}
          >
            {/* Greeting */}
            <div className="hero-greeting" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '28px', height: '2px', background: 'var(--color-accent)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>
                Hello, I'm
              </span>
            </div>

            {/* Name — animated entrance, horizontally straight on one line */}
            <motion.h1
              className="hero-name-wrap"
              aria-label="Nirvan Respati Hadi Aminsyah"
              title="Nirvan Respati Hadi Aminsyah"
              initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.85,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.85rem, 3.8vw, 3.2rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                marginTop: '0.35rem',
                whiteSpace: 'normal',
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', marginRight: '0.38em' }}
              >
                Nirvan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: 'var(--color-accent)',
                  display: 'inline-block',
                  textShadow: '0 0 28px rgba(59, 130, 246, 0.4)',
                }}
              >
                Respati Hadi
              </motion.span>
            </motion.h1>

            {/* Role */}
            <div className="hero-role-line" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
              }}>
                Junior Cybersecurity
              </span>
              <span style={{
                marginLeft: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'rgba(59,130,246,0.7)',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.18)',
                padding: '2px 8px',
                borderRadius: '3px',
              }}>
                still learning
              </span>
            </div>

            {/* Bio */}
            <p className="hero-bio" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.94rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: '680px',
              marginBottom: '2.25rem',
            }}>
              Siswa SMK Telekomunikasi DU yang sedang mendalami dunia cyber security. Berfokus pada bug hunting, vulnerability research, penetration testing, serta responsible disclosure kepada CSIRT nasional.
            </p>

            {/* CTA */}
            <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <motion.a
                href="#certs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.6rem',
                  background: 'var(--color-accent)',
                  color: 'white',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  boxShadow: '0 4px 24px rgba(59,130,246,0.3)',
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                Lihat Sertifikat
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>

            {/* Stats row with custom handcrafted cyber icons */}
            <div className="hero-stats-row" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(59,130,246,0.12)',
              flexWrap: 'wrap',
            }}>
              {[
                {
                  val: '40+',
                  label: 'Bugs Found',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8V5a1 1 0 011-1h3" />
                      <path d="M16 4h3a1 1 0 011 1v3" />
                      <path d="M20 16v3a1 1 0 01-1 1h-3" />
                      <path d="M8 20H5a1 1 0 01-1-1v-3" />
                      <rect x="8.5" y="8" width="7" height="8" rx="3.5" />
                      <path d="M6.5 10.5h2M15.5 10.5h2M6.5 13.5h2M15.5 13.5h2" />
                      <path d="M9.5 7L8 5.5M14.5 7L16 5.5" />
                      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  val: '1',
                  label: 'Hall of Fame',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
                      <path d="M7 6H4.5A1.5 1.5 0 003 7.5v1A2.5 2.5 0 005.5 11H7M17 6h2.5A1.5 1.5 0 0121 7.5v1a2.5 2.5 0 01-2.5 2.5H17" />
                      <path d="M12 14v4M8 21h8M9.5 18h5" />
                      <path d="M12 6.8l.6 1.2 1.3.2-.9 1 .2 1.3-1.2-.6-1.2.6.2-1.3-.9-1 1.3-.2.6-1.2z" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  val: 'Maret 2026',
                  label: 'Started',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.5c-3 2.5-4.5 7-4.5 11 0 .6.1 1.1.2 1.5l4.3-2 4.3 2c.1-.4.2-.9.2-1.5 0-4-1.5-8.5-4.5-11z" />
                      <circle cx="12" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
                      <path d="M7.5 13.5L4 16v2.5l3.5-1M16.5 13.5L20 16v2.5l-3.5-1" />
                      <path d="M10.5 17.5l1.5 3.5 1.5-3.5" />
                    </svg>
                  ),
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="hero-stat-item"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    className="hero-stat-icon-wrap"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(59,130,246,0.08)',
                      border: '1px solid rgba(59,130,246,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent)',
                      boxShadow: '0 0 16px rgba(59,130,246,0.12)',
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}>
                      {stat.val}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{
          position: 'fixed', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          opacity: showScroll ? 1 : 0, visibility: showScroll ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s', pointerEvents: 'none',
        }}>
          <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', letterSpacing: '0.18em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)' }} />
        </div>
      </div>
    </section>
  )
}
