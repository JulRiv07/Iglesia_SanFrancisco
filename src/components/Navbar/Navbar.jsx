import { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLang } from '../../contexts/LangContext'
import styles from './Navbar.module.css'

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const navLinks = [
  { key: 'about', href: '#nosotros' },
  { key: 'location', href: '#ubicacion' },
  { key: 'events', href: '#eventos' },
  { key: 'sacraments', href: '#sacramentos' },
  { key: 'newsletter', href: '#comunidad' },
]

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change / escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} onClick={handleLinkClick}>
          <span className={styles.logoCross}>✞</span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>San Francisco</span>
            <span className={styles.logoSub}>de Asís</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {navLinks.map(link => (
            <a key={link.key} href={link.href} className={styles.navLink}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Members (disabled - coming soon) */}
          <div className={styles.membersWrapper}>
            <button className={styles.membersBtn} disabled title={t.nav.membersSoon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <span className={styles.membersBtnText}>{t.nav.members}</span>
            </button>
            <span className={styles.membersBadge}>{t.nav.membersSoon}</span>
          </div>

          {/* Lang toggle */}
          <button
            className={styles.iconBtn}
            onClick={toggleLang}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span className={styles.langLabel}>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Theme toggle */}
          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            title={theme === 'light' ? t.nav.toggleDark : t.nav.toggleLight}
            aria-label={theme === 'light' ? t.nav.toggleDark : t.nav.toggleLight}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.iconBtn} ${styles.hamburger}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav>
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={handleLinkClick}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className={styles.mobileDivider} />
          <button
            className={`${styles.mobileNavLink} ${styles.mobileNavBtn}`}
            onClick={() => { toggleLang(); handleLinkClick() }}
          >
            {lang === 'es' ? '🇺🇸 English' : '🇨🇴 Español'}
          </button>
          <button
            className={`${styles.mobileNavLink} ${styles.mobileNavBtn}`}
            onClick={() => { toggleTheme(); handleLinkClick() }}
          >
            {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  )
}
