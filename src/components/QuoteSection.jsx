import { useEffect, useRef, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'

export default function QuoteSection() {
  const quoteRef = useRef(null)
  const [quoteDone, setQuoteDone] = useState(false)

  const part1Words = ['Acceptance', 'means', 'learning', 'that', 'not', 'everything', 'goes', 'the', 'way', 'we', 'want', 'it', 'to.']
  const part2Words = ['Even', 'so,', 'I', 'will', 'still', 'keep', 'trying.']

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !quoteDone) {
          setQuoteDone(true)
          anime({
            targets: '.final-quote .word',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(50, { start: 100 }),
            duration: 700,
            easing: 'easeOutExpo',
          })
          anime({
            targets: '.final-quote-line',
            scaleX: [0, 1],
            duration: 900,
            delay: 700,
            easing: 'easeInOutExpo',
          })
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [quoteDone])

  return (
    <section id="quote" style={{ position: 'relative', overflow: 'hidden', padding: '5.5rem 1.25rem 4.5rem' }}>
      <div className="site-container" style={{ position: 'relative', maxWidth: '780px' }}>
        <div
          ref={quoteRef}
          className="final-quote"
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 3.2vw, 2.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.45,
              marginBottom: '1.75rem',
              color: 'var(--color-text-primary)',
            }}
          >
            <span style={{ display: 'inline' }}>
              {part1Words.map((word, i) => (
                <span
                  key={`p1-${i}`}
                  className="word"
                  style={{ display: 'inline-block', opacity: 0, marginRight: '0.28em' }}
                >
                  {word}
                </span>
              ))}
            </span>
            {' '}
            <span style={{ display: 'inline', color: 'var(--color-accent)' }}>
              {part2Words.map((word, i) => (
                <span
                  key={`p2-${i}`}
                  className="word"
                  style={{ display: 'inline-block', opacity: 0, marginRight: '0.28em' }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h2>

          <div
            className="final-quote-line"
            style={{
              width: '54px',
              height: '2px',
              background: 'var(--color-accent)',
              margin: '0 auto 1.25rem',
              transform: 'scaleX(0)',
              borderRadius: '2px',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }}
          >
            Keep Moving Forward · Never Give Up
          </p>
        </div>
      </div>
    </section>
  )
}

