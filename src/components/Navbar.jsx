import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const base = import.meta.env.BASE_URL || '/'
const logo = `${base}logo.png`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'education', 'tools', 'skills', 'findings', 'hof', 'certs']
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
            gap: '1rem',
            padding: scrolled ? '0.45rem 1.15rem' : '0.55rem 1.35rem',
            borderRadius: scrolled ? '999px' : '14px',
            background: scrolled
              ? 'rgba(9, 12, 23, 0.92)'
              : 'rgba(11, 14, 26, 0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: `1px solid ${scrolled ? 'rgba(59,130,246,0.22)' : 'rgba(255,255,255,0.08)'}`,
            boxShadow: scrolled
              ? '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.1)'
              : '0 8px 28px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            minWidth: 0,
          }}
        >
          {/* LEFT: Logo */}
          <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
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
                src={logo}
                alt="Logo"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0.8, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="nav-logo-img"
                style={{
                  height: scrolled ? '40px' : '46px',
                  width: 'auto',
                  maxWidth: '170px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'brightness(1.1) drop-shadow(0 0 12px rgba(59, 130, 246, 0.55))',
                  transition: 'height 0.3s ease',
                }}
              />
            </a>
          </div>

          {/* CENTER: Navigation Links */}
          <nav
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '1 1 auto',
            }}
          >
            <div
              className="nav-desktop-pills"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.15rem',
                background: 'rgba(255,255,255,0.03)',
                padding: '0.2rem 0.3rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
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
          </nav>

          {/* RIGHT: Instagram Link (Desktop) */}
          <div
            className="desktop-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: '0 0 auto',
            }}
          >
            <a
              href="https://www.instagram.com/aku_nirvan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.38rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.22)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.04em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(59,130,246,0.25)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.22)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
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
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.2)',
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
                  background: 'rgba(9, 12, 23, 0.97)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '14px',
                  padding: '0.65rem',
                  border: '1px solid rgba(59,130,246,0.22)',
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
                        background: isActive ? 'rgba(59,130,246,0.1)' : 'transparent',
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
                  href="https://www.instagram.com/aku_nirvan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '0.35rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(59,130,246,0.22)',
                    background: 'rgba(59,130,246,0.08)',
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram Profile</span>
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
