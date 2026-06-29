import { useState } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './Sacraments.module.css'

// ── Service form ──────────────────────────────────────────────────────────────
function ServiceForm() {
  const { t } = useLang()
  const f = t.sacraments.fields
  const services = t.sacraments.services

  const [service, setService] = useState('')
  const [form, setForm] = useState({
    nombre: '', apellido: '', email: '', telefono: '', mensaje: '',
    esBautizado: '', nombreBebe: '', fechaTentativa: '',
    tieneBautismo: '', tieneComunion: '',
    ambosBautizados: '', tipoAcompanamiento: '', descripcionServicio: '',
  })
  const [showModal, setShowModal] = useState(false)

  const set = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setService('')
    setForm({
      nombre: '', apellido: '', email: '', telefono: '', mensaje: '',
      esBautizado: '', nombreBebe: '', fechaTentativa: '',
      tieneBautismo: '', tieneComunion: '',
      ambosBautizados: '', tipoAcompanamiento: '', descripcionServicio: '',
    })
  }

  const YesNo = ({ label, field }) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className={styles.radio}>
        {['si', 'no'].map(val => (
          <label key={val} className={styles.radioLabel}>
            <input
              type="radio"
              name={field}
              value={val}
              checked={form[field] === val}
              onChange={set(field)}
              className={styles.radioInput}
            />
            {f[val]}
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>{t.sacraments.formTitle}</h3>
      <p className={styles.formSubtitle}>{t.sacraments.formSubtitle}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Service selector */}
        <div className="form-group">
          <label className="form-label" htmlFor="service">{t.sacraments.selectService}</label>
          <select
            id="service"
            className="form-select"
            value={service}
            onChange={e => setService(e.target.value)}
            required
          >
            <option value="">— {t.sacraments.selectService} —</option>
            {Object.entries(services).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        {/* Common fields */}
        <div className={styles.twoCol}>
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">{f.nombre}</label>
            <input id="nombre" className="form-input" type="text" required
              placeholder={f.placeholder.nombre} value={form.nombre} onChange={set('nombre')} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="apellido">{f.apellido}</label>
            <input id="apellido" className="form-input" type="text" required
              placeholder={f.placeholder.apellido} value={form.apellido} onChange={set('apellido')} />
          </div>
        </div>

        <div className={styles.twoCol}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">{f.email}</label>
            <input id="email" className="form-input" type="email" required
              placeholder={f.placeholder.email} value={form.email} onChange={set('email')} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="telefono">{f.telefono}</label>
            <input id="telefono" className="form-input" type="tel"
              placeholder={f.placeholder.telefono} value={form.telefono} onChange={set('telefono')} />
          </div>
        </div>

        {/* Conditional fields — shown only after a service is selected */}
        {service && (
          <div className={styles.conditionalBlock}>
            {/* Service indicator header */}
            <div className={styles.serviceIndicator}>
              <span className={styles.serviceIndicatorCross}>✞</span>
              <span className={styles.serviceIndicatorLabel}>{services[service]}</span>
            </div>

            {/* Bautismo */}
            {service === 'bautismo' && (
              <div className={styles.conditionalFields}>
                <YesNo label={f.esBautizado} field="esBautizado" />
                <div className="form-group">
                  <label className="form-label" htmlFor="nombreBebe">{f.nombreBebe}</label>
                  <input id="nombreBebe" className="form-input" type="text"
                    placeholder={f.placeholder.nombreBebe} value={form.nombreBebe} onChange={set('nombreBebe')} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="fechaBautismo">{f.fechaTentativa}</label>
                  <input id="fechaBautismo" className="form-input" type="date"
                    value={form.fechaTentativa} onChange={set('fechaTentativa')} />
                </div>
              </div>
            )}

            {/* Primera Comunión */}
            {service === 'comunion' && (
              <div className={styles.conditionalFields}>
                <YesNo label={f.tieneBautismo} field="tieneBautismo" />
              </div>
            )}

            {/* Confirmación */}
            {service === 'confirmacion' && (
              <div className={styles.conditionalFields}>
                <YesNo label={f.tieneComunion} field="tieneComunion" />
              </div>
            )}

            {/* Matrimonio */}
            {service === 'matrimonio' && (
              <div className={styles.conditionalFields}>
                <YesNo label={f.ambosBautizados} field="ambosBautizados" />
                <div className="form-group">
                  <label className="form-label" htmlFor="fechaMatrimonio">{f.fechaTentativa}</label>
                  <input id="fechaMatrimonio" className="form-input" type="date"
                    value={form.fechaTentativa} onChange={set('fechaTentativa')} />
                </div>
              </div>
            )}

            {/* Asesoría */}
            {service === 'asesoria' && (
              <div className={styles.conditionalFields}>
                <div className="form-group">
                  <label className="form-label" htmlFor="tipoAcomp">{f.tipoAcompanamiento}</label>
                  <input id="tipoAcomp" className="form-input" type="text"
                    placeholder={f.placeholder.tipoAcompanamiento} value={form.tipoAcompanamiento}
                    onChange={set('tipoAcompanamiento')} />
                </div>
              </div>
            )}

            {/* Otros */}
            {service === 'otros' && (
              <div className={styles.conditionalFields}>
                <div className="form-group">
                  <label className="form-label" htmlFor="otrosDesc">{f.descripcionServicio}</label>
                  <textarea id="otrosDesc" className="form-textarea"
                    placeholder={f.placeholder.descripcionServicio} rows={4}
                    value={form.descripcionServicio} onChange={set('descripcionServicio')} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mensaje */}
        <div className="form-group">
          <label className="form-label" htmlFor="mensaje">{f.mensaje}</label>
          <textarea id="mensaje" className="form-textarea" rows={3}
            placeholder={f.placeholder.mensaje} value={form.mensaje} onChange={set('mensaje')} />
        </div>

        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
          ✞ {f.submit}
        </button>
      </form>

      {/* Success modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <div className={styles.modalIcon}>✞</div>
            <h3 className={styles.modalTitle}>{t.sacraments.successTitle}</h3>
            <p className={styles.modalMsg}>{t.sacraments.successMsg}</p>
            <button className={`btn btn-primary`} onClick={handleClose}>
              {t.sacraments.successClose}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Requirements accordion ────────────────────────────────────────────────────
function RequirementsAccordion() {
  const { t } = useLang()
  const [open, setOpen] = useState(null)

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader}>
        <h3 className={styles.accordionTitle}>{t.sacraments.requirementsTitle}</h3>
        <p className={styles.accordionSubtitle}>{t.sacraments.requirementsSubtitle}</p>
      </div>

      {t.sacraments.requirements.map(req => (
        <div key={req.id} className={`${styles.accordionItem} ${open === req.id ? styles.accordionOpen : ''}`}>
          <button
            className={styles.accordionBtn}
            onClick={() => setOpen(o => o === req.id ? null : req.id)}
            aria-expanded={open === req.id}
          >
            {/* Cross instead of emoji */}
            <span className={styles.accordionCross}>✞</span>
            <span className={styles.accordionItemTitle}>{req.title}</span>
            <span className={`${styles.accordionChevron} ${open === req.id ? styles.chevronOpen : ''}`}>
              ›
            </span>
          </button>

          <div className={`${styles.accordionBody} ${open === req.id ? styles.accordionBodyOpen : ''}`}>
            <div className={styles.accordionContent}>
              {/* <!-- Los requisitos reales irán aquí --> */}
              <p>{req.contentDisplay}</p>
              <p className={styles.placeholder}>
                <code>{req.content}</code>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Sacraments() {
  const { t } = useLang()

  return (
    <section id="sacramentos" className={`section ${styles.sacraments}`}>
      <div className="container">

        <div className="section-header reveal">
          <span className="section-label">{t.sacraments.label}</span>
          <h2 className="section-title">{t.sacraments.title}</h2>
          <div className="ornament"><span className="ornament-cross">✞</span></div>
          <p className="section-subtitle">{t.sacraments.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className="reveal reveal-delay-1">
            <ServiceForm />
          </div>
          <div className="reveal reveal-delay-2">
            <RequirementsAccordion />
          </div>
        </div>
      </div>
    </section>
  )
}
