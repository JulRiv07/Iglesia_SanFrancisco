import { useState, useEffect, useRef } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const [activeImg, setActiveImg] = useState(null)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const sectionRef = useRef(null)

  // Rotate spiritual quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(i => (i + 1) % t.about.spiritQuotes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [t.about.spiritQuotes.length])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal') || []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="ornament"><span className="ornament-cross">✞</span></div>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Two-column: text + image */}
        <div className={styles.mainContent}>
          <div className={`${styles.textColumn} reveal reveal-delay-1`}>
            {t.about.history.map((para, i) => (
              <p key={i} className={styles.historyPara}>{para}</p>
            ))}
          </div>

          <div className={`${styles.imageColumn} reveal reveal-delay-2`}>
            <div className={styles.featuredImage}>
              <img src="/images/mass-community.jpg" alt="Comunidad en misa" loading="lazy" />
              <div className={styles.imageCaption}>
                <span className={styles.imageCaptionCross}>✞</span>
                <span>Capellanía San Francisco de Asís</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating spiritual quote */}
        <div className={`${styles.spiritQuoteSection} reveal`}>
          <div className={styles.spiritQuote}>
            <span className={styles.spiritQuoteMark}>&ldquo;</span>
            <p key={quoteIndex} className={styles.spiritQuoteText}>
              {t.about.spiritQuotes[quoteIndex]}
            </p>
            <div className={styles.spiritDots}>
              {t.about.spiritQuotes.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.spiritDot} ${i === quoteIndex ? styles.spiritDotActive : ''}`}
                  onClick={() => setQuoteIndex(i)}
                  aria-label={`Frase ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className={`${styles.gallerySection} reveal`}>
          <span className="section-label">{t.about.galleryLabel}</span>
          <div className={styles.gallery}>
            {t.about.gallery.map((img, i) => (
              <button
                key={i}
                className={`${styles.galleryItem} reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setActiveImg(img)}
                aria-label={img.alt}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={styles.galleryOverlay}>
                  <span>🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div className={styles.lightbox} onClick={() => setActiveImg(null)}>
          <button className={styles.lightboxClose} onClick={() => setActiveImg(null)}>✕</button>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={activeImg.src} alt={activeImg.alt} />
            <p className={styles.lightboxCaption}>{activeImg.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
