import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Public paths + BASE_URL so logos work on domain / subdirectory deploys
const base = import.meta.env.BASE_URL || '/'
const logo = `${base}logo.png`
const redLogo = `${base}404notvanlogo.png`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isRed, setIsRed] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const syncMode = () => setIsRed(html.getAttribute('data-mode') === 'red')
    syncMode()
    const observer = new MutationObserver(syncMode)
    observer.observe(html, { attributes: true, attributeFilter: ['data-mode'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'education', 'tools', 'skills', 'findings', 'hof', 'certs', 'contact']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = [
    { href: '#hero', id: 'hero', label: 'Home', number: '01' },
    { href: '#about', id: 'about', label: 'About', number: '02' },
    { href: '#education', id: 'education', label: 'Education', number: '03' },
    { href: '#tools', id: 'tools', label: 'Tools', number: '04' },
    { href: '#findings', id: 'findings', label: 'Findings', number: '05' },
    { href: '#certs', id: 'certs', label: 'Certs', number: '06' },
  ]

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="site-header" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5000,
      padding: scrolled ? '0.55rem 1rem' : '0.85rem 1.25rem',
      transition: 'padding 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none',
    }}>
      <div className="nav-shell" style={{
        maxWidth: '1240px',
        margin: '0 auto',
        pointerEvents: 'auto',
        position: 'relative',
      }}>
        <div
          className={`nav-bar ${scrolled ? 'nav-bar--scrolled' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            padding: scrolled ? '0.45rem 1rem 0.45rem 1.15rem' : '0.55rem 1.15rem 0.55rem 1.25rem',
            borderRadius: scrolled ? '999px' : '14px',
            background: scrolled
              ? 'rgba(9, 12, 23, 0.92)'
              : 'rgba(11, 14, 26, 0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: `1px solid ${scrolled
              ? (isRed ? 'rgba(255,40,70,0.28)' : 'rgba(59,130,246,0.22)')
              : 'rgba(255,255,255,0.08)'}`,
            boxShadow: scrolled
              ? (isRed
                ? '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 40, 70, 0.12)'
                : '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.1)')
              : '0 8px 28px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            minWidth: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0, flex: '1 1 auto' }}>
            <a
              href="#hero"
              onClick={closeMobile}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <motion.img
                key={isRed ? 'red-logo' : 'blue-logo'}
                src={isRed ? redLogo : logo}
                alt={isRed ? '404notvan' : 'Logo'}
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0.7, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="nav-logo-img"
                onError={(e) => {
                  // fallback if one path fails
                  const el = e.currentTarget
                  if (el.dataset.fallback === '1') return
                  el.dataset.fallback = '1'
                  el.src = isRed ? `${base}logo.png` : `${base}404notvanlogo.png`
                }}
                style={{
                  height: scrolled ? '40px' : '46px',
                  width: 'auto',
                  maxWidth: '170px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: isRed
                    ? 'brightness(1.1) drop-shadow(0 0 12px rgba(255, 40, 70, 0.6))'
                    : 'brightness(1.1) drop-shadow(0 0 12px rgba(59, 130, 246, 0.55))',
                  transition: 'height 0.3s ease, filter 0.4s ease',
                }}
              />
            </a>

            <div
              className="desktop-only nav-status-badge"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.22rem 0.6rem',
                borderRadius: '999px',
                background: 'var(--color-accent-subtle)',
                border: '1px solid var(--color-border-hover)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: isRed ? '#ff2846' : '#10b981',
                boxShadow: isRed ? '0 0 8px #ff2846' : '0 0 8px #10b981',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              <span className="nav-status-text">
                {isRed ? 'Web Hacked' : 'STATUS: BUG HUNTING'}
              </span>
            </div>
          </div>

          <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <div className="nav-desktop-pills" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              background: 'rgba(255,255,255,0.03)',
              padding: '0.2rem 0.3rem',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              {links.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="nav-desktop-link"
                    style={{
                      position: 'relative',
                      padding: '0.48rem 1rem',
                      fontSize: '0.86rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'white' : 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '999px',
                          background: 'var(--color-accent-glow)',
                          border: '1px solid var(--color-accent)',
                          boxShadow: '0 0 16px var(--color-accent-glow)',
                          zIndex: -1,
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', opacity: 0.5, marginRight: '0.28rem' }}>
                      {link.number}.
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>

            <motion.a
              href="#contact"
              className="nav-contact-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                background: 'var(--color-accent)',
                boxShadow: '0 4px 16px var(--color-accent-glow)',
                marginLeft: '0.35rem',
                whiteSpace: 'nowrap',
              }}
            >
              Contact
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="nav-mobile-toggle"
            style={{
              position: 'relative',
              display: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              width: '42px',
              height: '42px',
              flexShrink: 0,
              borderRadius: '50%',
              background: isRed ? 'rgba(255,40,70,0.1)' : 'rgba(59,130,246,0.08)',
              border: isRed ? '1px solid rgba(255,40,70,0.28)' : '1px solid rgba(59,130,246,0.2)',
              cursor: 'pointer',
              overflow: 'visible',
              padding: 0,
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`nav-burger-line ${mobileOpen ? 'is-open top' : ''}`} />
            <span className={`nav-burger-line mid ${mobileOpen ? 'is-open' : ''}`} />
            <span className={`nav-burger-line ${mobileOpen ? 'is-open bottom' : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="nav-mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobile}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(4, 6, 12, 0.55)',
                  zIndex: 1,
                  pointerEvents: 'auto',
                }}
              />
              <motion.nav
                className="nav-mobile-panel"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 6, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: '0.35rem',
                  background: isRed ? 'rgba(18, 6, 10, 0.97)' : 'rgba(9, 12, 23, 0.97)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '14px',
                  padding: '0.65rem',
                  border: isRed ? '1px solid rgba(255,40,70,0.22)' : '1px solid rgba(59,130,246,0.22)',
                  boxShadow: '0 18px 48px rgba(0,0,0,0.55)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  maxHeight: 'min(70vh, 520px)',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {links.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={closeMobile}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                        background: isActive
                          ? (isRed ? 'rgba(255,40,70,0.1)' : 'rgba(59,130,246,0.1)')
                          : 'transparent',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 500,
                        minHeight: '48px',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                    >
                      <span>{link.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', opacity: 0.45 }}>
                        //{link.number}
                      </span>
                    </a>
                  )
                })}
                <a
                  href="#contact"
                  onClick={closeMobile}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '0.35rem',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    background: 'var(--color-accent)',
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    minHeight: '48px',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  Contact Me
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
