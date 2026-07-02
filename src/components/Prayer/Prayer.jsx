import { useLang } from '../../contexts/LangContext'
import styles from './Prayer.module.css'

export default function Prayer() {
  const { t } = useLang()
  const p = t.prayer

  return (
    <section className={styles.prayer}>
      <div className={styles.bgLayer} />

      <div className={`${styles.inner} container`}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.saintLabel}>{p.label}</span>
          <div className={styles.crossDivider}>
            <span className={styles.line} />
            <span className={styles.cross}>&#x271E;</span>
            <span className={styles.line} />
          </div>
        </div>

        <div className={`${styles.prayerCard} reveal reveal-delay-1`}>
          <div className={styles.openQuote}>&ldquo;</div>

          <div className={styles.verses}>
            {p.verses.map((verse, i) => (
              <p key={i} className={styles.verse}>{verse}</p>
            ))}
          </div>

          <div className={styles.closeQuote}>&rdquo;</div>

          <div className={styles.attribution}>
            <span className={styles.attrLine} />
            <span className={styles.attrText}>{p.attribution}</span>
            <span className={styles.attrLine} />
          </div>
        </div>

        <div className={`${styles.footer} reveal reveal-delay-2`}>
          <span className={styles.footerCross}>&#x271E;</span>
        </div>
      </div>
    </section>
  )
}
