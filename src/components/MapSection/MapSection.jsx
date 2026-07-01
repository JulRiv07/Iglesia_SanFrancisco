import { useLang } from '../../contexts/LangContext'
import styles from './MapSection.module.css'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ESCUELA DE LA FE — ESTADO DE VACACIONES
// true  → muestra aviso de vacaciones (naranja)
// false → muestra horario activo (verde)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ESCUELA_VACACIONES = true

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
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
                <span className={ESCUELA_VACACIONES ? styles.badgeVacation : styles.badgeActive}>
                  {ESCUELA_VACACIONES ? 'En vacaciones' : 'Activa'}
                </span>
              </div>
              {ESCUELA_VACACIONES ? (
                <p className={styles.vacationNote}>
                  Actualmente en periodo de vacaciones. ¡Nos vemos pronto!
                </p>
              ) : (
                <div className={styles.scheduleRow}>
                  <span className={styles.scheduleDay}>{t.map.schoolOfFaithSchedule}</span>
              </div>
              )}
            </div>
          </div>

          {/* Map embed area */}
          <div className={`${styles.mapContainer} reveal reveal-delay-2`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d900.9873268900147!2d-75.53740446255252!3d6.345215068563812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sca!4v1782712293994!5m2!1ses!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Capellanía San Francisco de Asís — Batallón Gral. Pedro Nel Ospina, Bello, Antioquia"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
