import { useState } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const { t } = useLang()
  const n = t.newsletter
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState([])
  const [success, setSuccess] = useState(false)

  const toggleInterest = (val) => {
    setInterests(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <section id="comunidad" className={`section ${styles.newsletter}`}>
      <div className="container">
        <div className={styles.inner}>

          {/* Decoration */}
          <div className={styles.decoration}>
            <div className={styles.decorLine} />
            <div className={styles.decorCross}>✞</div>
            <div className={styles.decorLine} />
          </div>

          <div className={`${styles.content} reveal`}>
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>{n.label}</span>
            <h2 className={styles.title}>{n.title}</h2>
            <p className={styles.subtitle}>{n.subtitle}</p>
          </div>

          {!success ? (
            <form onSubmit={handleSubmit} className={`${styles.form} reveal reveal-delay-1`}>

              {/* Name + Email */}
              <div className={styles.fieldGroup}>
                <input
                  className={styles.fieldInput}
                  type="text"
                  placeholder={n.namePlaceholder}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  className={styles.fieldInput}
                  type="email"
                  placeholder={n.emailPlaceholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Interests */}
              <div className={styles.interests}>
                <span className={styles.interestsLabel}>{n.interests}</span>
                <div className={styles.checkboxes}>
                  {n.interestOptions.map(opt => (
                    <label key={opt.value} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={interests.includes(opt.value)}
                        onChange={() => toggleInterest(opt.value)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkmark} />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className={`btn ${styles.submitBtn}`}>
                {n.submit}
              </button>

              <p className={styles.privacy}>🔒 {n.privacy}</p>
            </form>
          ) : (
            <div className={`${styles.successMsg} reveal`}>
              <div className={styles.successIcon}>✞</div>
              <p>{n.successMsg}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
