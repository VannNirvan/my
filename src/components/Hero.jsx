import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg from '../assets/IMG_20260315_032010_835.webp'
import redPhoto from '../assets/404notvan.webp'

const base = import.meta.env.BASE_URL || '/'
const blueLogo = `${base}logo.png`
const redLogoImg = `${base}404notvanlogo.png`

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  const heroRef = useRef(null)

  // Auto-toggle every 10 seconds (pause when tab hidden / reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer = null
    const start = () => {
      timer = setInterval(() => setIsFlipped((p) => !p), 10000)
    }
    const stop = () => {
      if (timer) clearInterval(timer)
      timer = null
    }
    const onVis = () => {
      if (document.hidden) stop()
      else start()
    }
    start()
    document.addEventListener('visibilitychange', onVis)
    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  // Apply red CSS mode to <html> when flipped
  useEffect(() => {
    if (isFlipped) {
      document.documentElement.setAttribute('data-mode', 'red')
    } else {
      document.documentElement.removeAttribute('data-mode')
    }
    return () => document.documentElement.removeAttribute('data-mode')
  }, [isFlipped])

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const accentColor = isFlipped ? '#ff2846' : 'var(--color-accent)'
  const accentGlow = isFlipped ? 'rgba(255,40,70,0.35)' : 'rgba(59,130,246,0.3)'

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
        transition: 'background-color 0.8s ease',
      }}
    >
      {/* Ambient glow — transitions red↔blue */}
      <div style={{
        position: 'absolute', top: '15%', left: '25%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: isFlipped ? 'rgba(255,40,70,0.07)' : 'rgba(59,130,246,0.06)',
        filter: 'blur(130px)', pointerEvents: 'none',
        transition: 'background 0.8s ease',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: isFlipped ? 'rgba(255,40,70,0.04)' : 'rgba(59,130,246,0.03)',
        filter: 'blur(90px)', pointerEvents: 'none',
        transition: 'background 0.8s ease',
      }} />

      <div className="site-container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4rem',
          paddingTop: '8.5rem',
          paddingBottom: '3.5rem',
          flexWrap: 'wrap',
        }}>

          {/* ── LEFT: Flip card photo ── */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '320px', margin: '0 auto' }}
          >
            <div style={{ opacity: 0.45, fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: accentColor, letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'color 0.5s ease' }}>
              {isFlipped ? '// identity revealed' : '// click to reveal'}
            </div>

            {/* 3D Flip card */}
            <div
              onClick={() => setIsFlipped(p => !p)}
              style={{ perspective: '1100px', cursor: 'pointer', width: '100%' }}
              title="Click to flip"
            >
              <div style={{
                width: '100%', height: '400px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1)',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* FRONT — normal photo + blue logo */}
                <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                  <div className="cyber-photo-glitch" style={{
                    width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden',
                    border: '1px solid rgba(59,130,246,0.18)',
                    boxShadow: '6px 6px 0 rgba(59,130,246,0.06), 12px 12px 0 rgba(59,130,246,0.03), 0 30px 80px rgba(0,0,0,0.5)',
                    position: 'relative',
                  }}>
                    <img src={heroImg} alt="Nirvan Respati Hadi" loading="eager" fetchPriority="high" decoding="async"
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

                {/* BACK — 404notvan red + logo */}
                <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="cyber-photo-glitch" style={{
                    width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden',
                    border: '1px solid rgba(255,40,70,0.3)',
                    boxShadow: '6px 6px 0 rgba(255,40,70,0.08), 12px 12px 0 rgba(255,40,70,0.04), 0 30px 80px rgba(0,0,0,0.6)',
                    position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, zIndex: 3, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,40,70,0.022) 2px, rgba(255,40,70,0.022) 4px)', pointerEvents: 'none' }} />
                    <img src={redPhoto} alt="404notvan" loading="lazy" decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(110%) brightness(0.95)', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(180,10,30,0.5) 100%)' }} />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4,
                      padding: '1.5rem 1rem 0.15rem',
                      background: 'linear-gradient(to top, rgba(8,1,3,0.97) 0%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0',
                    }}>
                      <img
                        src={redLogoImg}
                        alt="404notvan"
                        style={{
                          height: '110px',
                          width: 'auto',
                          maxWidth: '95%',
                          objectFit: 'contain',
                          objectPosition: 'left bottom',
                          display: 'block',
                          marginTop: '0.5rem',
                          marginBottom: '-0.45rem',
                          transform: 'translateY(10px)',
                          filter: 'drop-shadow(0 0 16px rgba(255,40,70,0.7))',
                        }}
                      />
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: 'rgba(255,107,133,0.65)',
                        letterSpacing: '0.14em',
                        position: 'relative',
                        zIndex: 1,
                        paddingBottom: '0.1rem',
                      }}>
                        BUG HUNTER · PEN TESTER · ANONYMOUS
                      </div>
                    </div>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '36px', height: '36px', borderTop: '2px solid rgba(255,40,70,0.55)', borderLeft: '2px solid rgba(255,40,70,0.55)', borderTopLeftRadius: '12px', zIndex: 5 }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '36px', height: '36px', borderBottom: '2px solid rgba(255,40,70,0.4)', borderRight: '2px solid rgba(255,40,70,0.4)', borderBottomRightRadius: '12px', zIndex: 5 }} />
                  </div>
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
            {!isFlipped && (
              <div className="hero-greeting" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '28px', height: '2px', background: accentColor, transition: 'background 0.5s ease', borderRadius: '2px' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: accentColor, letterSpacing: '0.06em', transition: 'color 0.5s ease' }}>
                  Hello, I'm
                </span>
              </div>
            )}

            {/* Name — full name Nirvan Respati Hadi */}
            <h1 className="hero-name-wrap" style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
              letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.25rem', marginTop: '0.35rem',
            }}>
              {isFlipped ? (
                <span className="smooth-glitch-text" data-text="404notvan" style={{
                  display: 'inline-block', color: '#ff2846',
                  textShadow: '0 0 40px rgba(255,40,70,0.6)',
                  letterSpacing: '0.02em',
                }}>
                  404notvan
                </span>
              ) : (
                <>
                  <span style={{ display: 'block' }}>Nirvan</span>
                  <span style={{ display: 'block', color: 'var(--color-accent)' }}>Respati Hadi</span>
                </>
              )}
            </h1>

            {/* Role */}
            <div className="hero-role-line" style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: isFlipped ? '#ff9aaa' : 'var(--color-text-secondary)',
                fontWeight: 400, transition: 'color 0.5s ease',
              }}>
                {isFlipped ? 'Bug Hunter & Pen Tester' : 'Junior Cybersecurity'}
              </span>
              {!isFlipped && (
                <span style={{
                  marginLeft: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'rgba(59,130,246,0.7)', background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.18)', padding: '2px 8px', borderRadius: '3px',
                }}>
                  still learning
                </span>
              )}
            </div>

            {/* Bio — wide stretch to right (maxWidth 680px) */}
            <p className="hero-bio" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.94rem',
              color: isFlipped ? 'rgba(255,200,210,0.85)' : 'var(--color-text-secondary)',
              lineHeight: 1.8, maxWidth: '680px', marginBottom: '2.25rem',
              transition: 'color 0.5s ease',
            }}>
              {isFlipped
                ? '"404notvan" adalah alias anonymous saya. Angka 404 merujuk pada HTTP status code "Not Found" — simbol yang sangat cocok untuk seorang security researcher yang beroperasi di balik layar untuk menemukan dan membantu memperbaiki celah keamanan.'
                : 'Siswa SMK Telekomunikasi DU yang sedang mendalami dunia cyber security. Berfokus pada bug hunting, vulnerability research, penetration testing, serta responsible disclosure kepada CSIRT nasional.'
              }
            </p>

            {/* CTA */}
            <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <motion.a
                href="#certs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.6rem',
                  background: isFlipped ? '#ff2846' : 'var(--color-accent)',
                  color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem',
                  textDecoration: 'none', borderRadius: '6px',
                  boxShadow: `0 4px 24px ${accentGlow}`,
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {isFlipped ? 'Hall of Fame' : 'Lihat Sertifikat'}
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
              <motion.button
                onClick={() => setIsFlipped(p => !p)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'transparent',
                  border: `1px solid ${isFlipped ? 'rgba(255,40,70,0.3)' : 'rgba(59,130,246,0.22)'}`,
                  borderRadius: '6px', padding: '0.75rem 1rem',
                  color: isFlipped ? '#ff8095' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>↻</span> {isFlipped ? 'kembali' : 'flip card'}
              </motion.button>
            </div>

            {/* Stats row */}
            <div className="hero-stats-row" style={{
              display: 'flex', gap: '2rem',
              paddingTop: '1.75rem',
              borderTop: `1px solid ${isFlipped ? 'rgba(255,40,70,0.1)' : 'rgba(59,130,246,0.08)'}`,
              transition: 'border-color 0.5s ease',
              flexWrap: 'wrap',
            }}>
              {[
                { val: '5+', label: 'Bugs Found', icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.863.993 1.863 2.008v.45c0 1.728-1.294 3.178-3.016 3.439a42.77 42.77 0 01-10.46 0C2.294 18.42 1 16.97 1 15.245v-.45c0-1.015.826-1.862 1.863-2.008A42.6 42.6 0 015 12.75M12 12.75c-1.148 0-2.278.08-3.383.237-1.037.146-1.863.993-1.863 2.008v.45c0 1.728 1.294 3.178 3.016 3.439a42.77 42.77 0 0010.46 0C20.706 18.42 22 16.97 22 15.245v-.45c0-1.015-.826-1.862-1.863-2.008A42.6 42.6 0 0019 12.75M12 12.75V8.25m0 0c0-2.485 2.015-4.5 4.5-4.5h.75a.75.75 0 000-1.5h-.75A6.005 6.005 0 009.75 6.75m2.25 1.5V6a2.25 2.25 0 00-4.5 0v.75" /></svg> },
                { val: '1', label: 'Hall of Fame', icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg> },
                { val: 'Maret 2026', label: 'Started', icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg> },
              ].map((stat) => (
                <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ color: accentColor, transition: 'color 0.5s ease' }}>{stat.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: accentColor, lineHeight: 1, transition: 'color 0.5s ease' }}>{stat.val}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>{stat.label}</div>
                </div>
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
