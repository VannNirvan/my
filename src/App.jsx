import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AmbientBackground from './components/AmbientBackground'

const Welcome = lazy(() => import('./components/Welcome'))
const Roadmap = lazy(() => import('./components/Roadmap'))
const ToolsStack = lazy(() => import('./components/ToolsStack'))
const Skills = lazy(() => import('./components/Skills'))
const FeaturedFindings = lazy(() => import('./components/FeaturedFindings'))
const HallOfFame = lazy(() => import('./components/HallOfFame'))
const Certificates = lazy(() => import('./components/Certificates'))
const ImpactStrip = lazy(() => import('./components/ImpactStrip'))
const ContactMe = lazy(() => import('./components/ContactMe'))
const Footer = lazy(() => import('./components/Footer'))

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

    const observeAll = () => {
      document.querySelectorAll('.reveal-element:not(.revealed)').forEach((el) => {
        observer.observe(el)
      })
    }

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })
    const t1 = setTimeout(observeAll, 100)
    const t2 = setTimeout(observeAll, 600)

    return () => {
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
          <ContactMe />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
