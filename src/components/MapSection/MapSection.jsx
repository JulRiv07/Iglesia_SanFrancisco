import { useLang } from '../../contexts/LangContext'
import styles from './MapSection.module.css'

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

export default function MapSection() {
  const { t } = useLang()

  return (
    <section id="ubicacion" className={`section ${styles.mapSection}`}>
      {/* Background brick texture */}
      <div className={styles.brickBg} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>{t.map.label}</span>
          <h2 className="section-title" style={{ color: '#fff' }}>{t.map.title}</h2>
          <div className="ornament">
            <span className="ornament-cross" style={{ color: 'var(--gold)' }}>✞</span>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Info panel */}
          <div className={`${styles.infoPanel} reveal reveal-delay-1`}>

            <div className={styles.logoArea}>
              <div className={styles.logoCircle}>
                <span className={styles.logoCross}>✞</span>
              </div>
              <div>
                <p className={styles.logoName}>Capellanía</p>
                <p className={styles.logoTitle}>San Francisco de Asís</p>
                <p className={styles.logoDiocesis}>Obispado Castrense de Colombia</p>
              </div>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><PinIcon /></span>
                <div>
                  <span className={styles.infoLabel}>Dirección</span>
                  {/* <!-- LLENAR: Dirección completa --> */}
                  <span className={styles.infoValue}>{t.map.addressDisplay}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><PhoneIcon /></span>
                <div>
                  <span className={styles.infoLabel}>Teléfono</span>
                  {/* <!-- LLENAR: Teléfono --> */}
                  <span className={styles.infoValue}>{t.map.phoneDisplay}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><MailIcon /></span>
                <div>
                  <span className={styles.infoLabel}>Correo</span>
                  <a href={`mailto:${t.map.email}`} className={styles.infoLink}>{t.map.email}</a>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className={styles.schedule}>
              <div className={styles.scheduleHeader}>
                <ClockIcon />
                <span>{t.map.scheduleTitle}</span>
              </div>
              {t.map.schedule.map((item, i) => (
                <div key={i} className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>{item.day}</span>
                  {/* <!-- LLENAR: Horarios de misa --> */}
                  <span className={styles.scheduleTime}>{item.time}</span>
                </div>
              ))}
            </div>

            {/* Escuela de la Fe */}
            <div className={styles.schoolOfFaith}>
              <div className={styles.scheduleHeader}>
                <span className={styles.schoolCross}>&#x271E;</span>
                <span>{t.map.schoolOfFaithTitle}</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{t.map.schoolOfFaithSchedule}</span>
              </div>
            </div>
          </div>

          {/* Map embed area */}
          <div className={`${styles.mapContainer} reveal reveal-delay-2`}>
            {/* PEGAR IFRAME DE GOOGLE MAPS AQUÍ */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPlaceholderIcon}>📍</div>
              <p className={styles.mapPlaceholderTitle}>{t.map.mapPlaceholder}</p>
              <p className={styles.mapPlaceholderNote}>
                {/* Instrucción para el cliente */}
                Reemplazar este bloque con el iframe de Google Maps
              </p>
              <code className={styles.mapCode}>
                {'<!-- PEGAR IFRAME DE GOOGLE MAPS AQUÍ -->'}
              </code>
            </div>
            {/*
              INSTRUCCIÓN: Reemplazar el div.mapPlaceholder completo con:
              <iframe
                src="TU_URL_DE_GOOGLE_MAPS"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Capellanía San Francisco de Asís"
              />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
