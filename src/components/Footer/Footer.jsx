import { useState, useEffect } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './Footer.module.css'

const navLinks = [
  { key: 'about', href: '#nosotros' },
  { key: 'location', href: '#ubicacion' },
  { key: 'events', href: '#eventos' },
  { key: 'sacraments', href: '#sacramentos' },
  { key: 'newsletter', href: '#comunidad' },
]

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const nav = t.nav
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex(i => (i + 1) % f.religiousQuotes.length)
    }, 8000)
    return () => clearInterval(id)
  }, [f.religiousQuotes.length])

  return (
    <footer className={styles.footer}>
      {/* Wave top */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 30C360 60 1080 0 1440 30V0H0V30Z" fill="var(--bg)" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <span className={styles.brandCross}>✞</span>
            <div>
              <p className={styles.brandName}>Capellanía San Francisco de Asís</p>
              <p className={styles.brandDiocesis}>Obispado Castrense de Colombia</p>
            </div>
          </div>
          <p className={styles.brandTagline}>{f.tagline}</p>

          {/* Rotating quote */}
          <div className={styles.quoteBox}>
            <p key={quoteIndex} className={styles.footerQuote}>
              {f.religiousQuotes[quoteIndex]}
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>{f.quickLinks}</h4>
          <nav>
            {navLinks.map(link => (
              <a key={link.key} href={link.href} className={styles.footerLink}>
                {nav[link.key]}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>{f.contact}</h4>
          <div className={styles.contactList}>
            {/* <!-- LLENAR: Dirección --> */}
            <p className={styles.contactItem}>
              📍 {f.addressDisplay}
            </p>

            <a href={`mailto:${f.email}`} className={`${styles.contactItem} ${styles.contactLink}`}>
              ✉️ {f.email}
            </a>
          </div>

          {/* Social media — Facebook eliminado por solicitud del cliente */}
          <div className={styles.social}>
            <span className={styles.colTitle} style={{ fontSize: 'var(--text-sm)' }}>{f.followUs}</span>
            <div className={styles.socialLinks}>
              {/* <!-- LLENAR: URL de Instagram --> */}
              <a href="https://www.instagram.com/capellaniabiosp?igsh=MXQxanR6Z2VnYjJoeA%3D%3D&utm_source=qr" className={styles.socialBtn} aria-label="Instagram" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* <!-- LLENAR: URL de YouTube --> */}
              <a href="https://www.youtube.com/@obispadocastrensedecolombi1049" className={styles.socialBtn} aria-label="YouTube" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>{f.copyright}</p>
            <a href="#inicio" className={styles.backToTop}>
              ↑ Inicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
