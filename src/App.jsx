import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LangProvider } from './contexts/LangContext'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MapSection from './components/MapSection/MapSection'
import Events from './components/Events/Events'
import Sacraments from './components/Sacraments/Sacraments'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function AppContent() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all .reveal elements
    const observe = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el)
      })
    }

    observe()

    // Re-observe after a short delay (for dynamically added elements)
    const timeout = setTimeout(observe, 500)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MapSection />
        <Events />
        <Sacraments />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  )
}
