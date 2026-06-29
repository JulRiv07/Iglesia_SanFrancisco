import { useState, useEffect } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [fadeQuote, setFadeQuote] = useState(true)
  const [parallaxY, setParallaxY] = useState(0)

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeQuote(false)
      setTimeout(() => {
        setQuoteIndex(i => (i + 1) % t.hero.quotes.length)
        setFadeQuote(true)
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [t.hero.quotes.length])

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="inicio" className={styles.hero}>
      {/* Background Image with Parallax */}
      <div
        className={styles.bg}
        style={{ transform: `translateY(${parallaxY}px)` }}
      />

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Brick texture pattern overlay */}
      <div className={styles.textureOverlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        {/* Ornamental cross */}
        <div className={styles.topOrnament}>
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentCross}>✞</span>
          <span className={styles.ornamentLine} />
        </div>

        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <h1 className={styles.title}>{t.hero.title}</h1>

        <div className={styles.missionBadge}>
          <span>{t.hero.mission}</span>
        </div>

        {/* Animated quote */}
        <div className={styles.quoteWrapper}>
          <p
            className={`${styles.quote} ${fadeQuote ? styles.quoteVisible : styles.quoteHidden}`}
          >
            {t.hero.quotes[quoteIndex]}
          </p>
          {/* Quote dots */}
          <div className={styles.quoteDots}>
            {t.hero.quotes.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === quoteIndex ? styles.dotActive : ''}`}
                onClick={() => { setQuoteIndex(i); setFadeQuote(true) }}
                aria-label={`Frase ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#nosotros" className={`btn btn-primary ${styles.ctaPrimary}`}>
            {t.hero.ctaPrimary}
          </a>
          <a href="#sacramentos" className={`btn btn-secondary ${styles.ctaSecondary}`}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{t.hero.scrollDown}</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Bottom wave / transition */}
      <div className={styles.bottomWave}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  )
}
