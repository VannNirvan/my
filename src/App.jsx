import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AmbientBackground from './components/AmbientBackground'
import Footer from './components/Footer'

const Welcome = lazy(() => import('./components/Welcome'))
const Roadmap = lazy(() => import('./components/Roadmap'))
const ToolsStack = lazy(() => import('./components/ToolsStack'))
const Skills = lazy(() => import('./components/Skills'))
const FeaturedFindings = lazy(() => import('./components/FeaturedFindings'))
const HallOfFame = lazy(() => import('./components/HallOfFame'))
const Certificates = lazy(() => import('./components/Certificates'))
const ImpactStrip = lazy(() => import('./components/ImpactStrip'))
const QuoteSection = lazy(() => import('./components/QuoteSection'))

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px 15% 0px' }
    )

    let rafId = null
    const observeAll = () => {
      document.querySelectorAll('.reveal-element:not(.revealed)').forEach((el) => {
        observer.observe(el)
      })
    }

    const debouncedObserveAll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        observeAll()
        rafId = null
      })
    }

    observeAll()
    const mo = new MutationObserver(debouncedObserveAll)
    mo.observe(document.body, { childList: true, subtree: true })
    const t1 = setTimeout(observeAll, 120)
    const t2 = setTimeout(observeAll, 600)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
      mo.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <AmbientBackground />
      <div className="grain-overlay" />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Suspense fallback={null}>
          <Welcome />
          <Roadmap />
          <ToolsStack />
          <Skills />
          <FeaturedFindings />
          <HallOfFame />
          <Certificates />
          <ImpactStrip />
          <QuoteSection />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
