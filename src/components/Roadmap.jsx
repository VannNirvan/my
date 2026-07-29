import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineData = [
  {
    period: '2014 — 2020',
    title: 'SDN 1 KARANGPLOSO',
    desc: 'Masa dasar, membangun rasa ingin tahu dan kreativitas secara natural. Fondasi berpikir kritis mulai terbentuk.',
    tag: 'Elementary',
    active: false,
  },
  {
    period: '2020 — 2023',
    title: 'SMPN 1 KARANGPLOSO',
    desc: 'Mulai mengenal dunia coding dan logika pemrograman untuk pertama kalinya. Passion di bidang teknologi mulai terlihat.',
    tag: 'Junior High',
    active: false,
  },
  {
    period: '2024 — Sekarang',
    title: 'SMK TELEKOMUNIKASI DU',
    desc: 'Fokus pada cyber security, mulai dari bug hunting, vulnerability research, hingga responsible disclosure ke CSIRT.',
    tag: 'Active',
    active: true,
  },
]

export default function Roadmap() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Container width = 880px.
  // Card 0 (SD): top=0, left=90px, width=280px. Center X = 230. Bottom Y = 160.
  // Card 1 (SMP): top=210, right=40px (left=560), width=280px. Center X = 700. Top Y = 210, Bottom Y = 370.
  // Card 2 (SMK): top=420, center (left=300), width=280px. Center X = 440. Top Y = 420.

  const r = 20 // bend radius

  const p1 = `
    M 230 160
    L 230 ${185 - r}
    Q 230 185, ${230 + r} 185
    L ${700 - r} 185
    Q 700 185, 700 ${185 + r}
    L 700 210
  `.replace(/\s+/g, ' ')

  const p2 = `
    M 700 370
    L 700 ${395 - r}
    Q 700 395, ${700 - r} 395
    L ${440 + r} 395
    Q 440 395, 440 ${395 + r}
    L 440 420
  `.replace(/\s+/g, ' ')

  return (
    <section ref={sectionRef} id="education" className="section-spacing" style={{ position: 'relative' }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="reveal-element section-header-centered">
            <div className="section-header-line" />
            <h2 className="section-header-title">
              Education <span style={{ color: 'var(--color-text-secondary)', fontWeight: 300 }}>Roadmap</span>
            </h2>
            <div className="section-header-line" />
          </div>
        </div>

        {/* ── Desktop Stepped Pipe Roadmap (880px viewBox) ── */}
        <div
          className="desktop-only"
          style={{ position: 'relative', width: '100%', maxWidth: '880px', margin: '0 auto', height: '600px' }}
        >
          {/* Guaranteed Vector SVG overlay */}
          <svg
            viewBox="0 0 880 600"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: 1 }}
          >
            <defs>
              <filter id="pipe-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pipeG1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="pipeG2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Pipe 1 dim track */}
            <path d={p1} fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Pipe 1 active animated glow line */}
            <motion.path
              d={p1} fill="none"
              stroke="url(#pipeG1)" strokeWidth="6"
              strokeLinecap="round" strokeLinejoin="round"
              filter="url(#pipe-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
            />
            <motion.path
              d={p1} fill="none"
              stroke="rgba(255,255,255,0.4)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
            />

            {/* Pipe 2 dim track */}
            <path d={p2} fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Pipe 2 active animated glow line */}
            <motion.path
              d={p2} fill="none"
              stroke="url(#pipeG2)" strokeWidth="6"
              strokeLinecap="round" strokeLinejoin="round"
              filter="url(#pipe-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.3, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
            />
            <motion.path
              d={p2} fill="none"
              stroke="rgba(255,255,255,0.4)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.3, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
            />
          </svg>

          {/* Card 0: SD — top LEFT (shifted right to 90px) */}
          <div style={{ position: 'absolute', left: '90px', top: 0, width: '280px', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <RoadmapCardContent item={timelineData[0]} />
            </motion.div>
          </div>

          {/* Card 1: SMP — middle RIGHT (right: 40px) */}
          <div style={{ position: 'absolute', right: '40px', top: '210px', width: '280px', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <RoadmapCardContent item={timelineData[1]} />
            </motion.div>
          </div>

          {/* Card 2: SMK — bottom CENTER (left: 300px) */}
          <div style={{ position: 'absolute', left: '300px', top: '420px', width: '280px', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <RoadmapCardContent item={timelineData[2]} />
            </motion.div>
          </div>
        </div>

        {/* ── Mobile Vertical Pipe Roadmap ── */}
        <div className="mobile-only roadmap-mobile" style={{ flexDirection: 'column', gap: '1.5rem', position: 'relative', maxWidth: '460px', margin: '0 auto', padding: '0.5rem 0 0.5rem 2.75rem' }}>
          {/* Vertical pipe (matches desktop aesthetic) */}
          <div className="roadmap-mobile-pipe" style={{
            position: 'absolute',
            left: '14px',
            top: '1.5rem',
            bottom: '1.5rem',
            width: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(to bottom, var(--color-accent) 0%, var(--color-accent) 70%, rgba(59,130,246,0.15) 100%)',
            boxShadow: '0 0 12px rgba(59,130,246,0.25)',
            zIndex: 1,
          }} />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              {/* Node dot on the pipe */}
              <div style={{
                position: 'absolute',
                left: '-2.15rem',
                top: '1.4rem',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--color-bg)',
                border: `3px solid ${item.active ? 'var(--color-accent)' : 'rgba(59,130,246,0.35)'}`,
                boxShadow: item.active ? '0 0 12px rgba(59,130,246,0.7)' : 'none',
                zIndex: 3,
              }} />
              <RoadmapCardContent item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoadmapCardContent({ item }) {
  return (
    <div className="glass-card roadmap-card" style={{
      padding: '1.35rem 1.5rem',
      borderRadius: '12px',
      borderColor: item.active ? 'rgba(59,130,246,0.3)' : undefined,
      position: 'relative', overflow: 'hidden',
    }}>
      {item.active && (
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }} />
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
          {item.period}
        </span>
        <span style={{
          fontSize: '9px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: item.active ? 'rgba(59,130,246,0.85)' : 'rgba(255,255,255,0.25)',
          background: item.active ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${item.active ? 'rgba(59,130,246,0.22)' : 'rgba(255,255,255,0.08)'}`,
          padding: '2px 7px', borderRadius: '3px',
        }}>
          {item.tag}
        </span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.78rem', lineHeight: 1.6 }}>
        {item.desc}
      </p>
    </div>
  )
}
