import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs/lib/anime.es.js'

const EMAIL = '404notvan@gmail.com'

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const quoteRef = useRef(null)
  const [quoteDone, setQuoteDone] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[SECURITY TRANSMISSION] Pesan dari ${form.name}`)
    const body = encodeURIComponent(
      `==========================================\nTRANSMISSION SENDER: ${form.name}\nEMAIL: ${form.email}\n${form.phone ? `PHONE/WA: ${form.phone}\n` : ''}==========================================\n\nMESSAGE BODY:\n${form.message}\n\n---\nTransmitted via 404notvan Terminal Portfolio`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !quoteDone) {
          setQuoteDone(true)
          anime({
            targets: '.contact-quote .word',
            opacity: [0, 1],
            translateY: [24, 0],
            delay: anime.stagger(80, { start: 120 }),
            duration: 700,
            easing: 'easeOutExpo',
          })
          anime({
            targets: '.contact-quote-line',
            scaleX: [0, 1],
            duration: 900,
            delay: 500,
            easing: 'easeInOutExpo',
          })
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [quoteDone])

  const quoteWords = ['Work', 'hard', 'in', 'learning', 'and', 'see', 'the', 'results.']

  return (
    <section id="contact" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="site-container" style={{ position: 'relative', maxWidth: '740px' }}>
        {/* Merged FinalSection quote */}
        <div
          ref={quoteRef}
          className="contact-quote"
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            color: 'var(--color-text-primary)',
          }}>
            {quoteWords.map((word, i) => (
              <span
                key={i}
                className="word"
                style={{ display: 'inline-block', opacity: 0, marginRight: '0.28em' }}
              >
                {word}
              </span>
            ))}
          </h2>
          <div
            className="contact-quote-line"
            style={{
              width: '48px',
              height: '1px',
              background: 'var(--color-accent)',
              margin: '0 auto 1rem',
              transform: 'scaleX(0)',
            }}
          />
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}>
            Wait for the process.
          </p>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="reveal-element section-header-centered" style={{ marginBottom: '0.75rem' }}>
            <div className="section-header-line" />
            <h2 className="section-header-title">Contact <span style={{ color: 'var(--color-text-secondary)', fontWeight: 300 }}>Me</span></h2>
            <div className="section-header-line" />
          </div>
          <p className="reveal-element" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '1rem' }}>
            // direct transmission to {EMAIL}
          </p>

          {/* Copy email */}
          <div className="reveal-element" style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={copyEmail}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.55rem 1rem',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: 'rgba(15,18,33,0.8)',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-hover)'
                e.currentTarget.style.color = 'var(--color-text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
              }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied!' : EMAIL}
            </button>
          </div>
        </div>

        {/* Hacker Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{
            background: 'var(--color-bg-elevated)',
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--color-text-secondary)', letterSpacing: '0.08em',
            }}>
              root@404notvan:~# ./send_transmission.sh
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-accent)', opacity: 0.7 }}>
              SSL / ENCRYPTED
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ padding: '2rem 1.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>
              &gt; INITIALIZE SECURE TRANSMISSION TO 404NOTVAN@GMAIL.COM...
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  [INPUT_NAME] *
                </label>
                <input
                  name="name" value={form.name} onChange={handle} required
                  placeholder="Nama kamu..."
                  style={{
                    width: '100%',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 12px var(--color-accent-glow)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  [INPUT_EMAIL] *
                </label>
                <input
                  name="email" type="email" value={form.email} onChange={handle} required
                  placeholder="email@kamu.com"
                  style={{
                    width: '100%',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 12px var(--color-accent-glow)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                [INPUT_PHONE] <span style={{ opacity: 0.4 }}>(OPSIONAL)</span>
              </label>
              <input
                name="phone" type="tel" value={form.phone} onChange={handle}
                placeholder="+62 8..."
                style={{
                  width: '100%',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  padding: '0.85rem 1rem',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 12px var(--color-accent-glow)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                [INPUT_MESSAGE] *
              </label>
              <textarea
                name="message" value={form.message} onChange={handle} required rows={5}
                placeholder="Tulis pesanmu..."
                style={{
                  width: '100%',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  padding: '0.85rem 1rem',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '130px',
                  transition: 'all 0.3s ease',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.boxShadow = '0 0 12px var(--color-accent-glow)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <div style={{ width: '100%' }}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  padding: '1rem 1.5rem',
                  background: 'var(--color-accent)',
                  color: 'white',
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.88rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  border: 'none', borderRadius: '6px', cursor: 'pointer',
                  boxShadow: '0 4px 20px var(--color-accent-glow)',
                  transition: 'all 0.3s ease',
                }}
              >
                [ SEND TRANSMISSION ]
              </motion.button>

              {sent && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#10b981', marginTop: '0.75rem' }}>
                  [✓ TRANSMISSION OPENED IN MAIL CLIENT]
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
