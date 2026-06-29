import { useState } from 'react'
import { useLang } from '../../contexts/LangContext'
import styles from './Events.module.css'

const CATEGORY_COLORS = {
  Liturgia:   '#C1440E',
  Catequesis: '#3D7A4A',
  Formacion:  '#C9943A',
  Pastoral:   '#5A6E8B',
}

function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] || CATEGORY_COLORS.Liturgia
}

function isPast(dateStr) {
  return new Date(dateStr + 'T23:59:59') < new Date()
}

function formatDay(dateStr) {
  return new Date(dateStr + 'T12:00:00').getDate()
}

function formatMonth(dateStr, months) {
  return months[new Date(dateStr + 'T12:00:00').getMonth()]
}

// Genera todas las ocurrencias de eventos recurrentes para el año dado
function generateRecurring(rules, year) {
  const result = []
  rules.forEach((rule, rIdx) => {
    const start = new Date(rule.startDate + 'T12:00:00')
    const end   = new Date(rule.endDate   + 'T12:00:00')
    const cur   = new Date(Math.max(start.getTime(), new Date(year, 0, 1).getTime()))
    const cap   = new Date(Math.min(end.getTime(),   new Date(year, 11, 31).getTime()))
    while (cur.getDay() !== rule.dayOfWeek) cur.setDate(cur.getDate() + 1)
    let seq = 0
    while (cur <= cap) {
      const dateStr = cur.toISOString().split('T')[0]
      result.push({
        id: `rec-${rIdx}-${seq}`,
        title: rule.title,
        date: dateStr,
        time: rule.time,
        description: rule.description,
        category: rule.category,
        recurring: true,
      })
      seq++
      cur.setDate(cur.getDate() + 7)
    }
  })
  return result
}

function EventCard({ event, months }) {
  const color = getCategoryColor(event.category)
  const past = isPast(event.date)
  return (
    <div
      className={`${styles.card} ${past ? styles.cardPast : ''}`}
      style={{ '--card-color': color }}
    >
      <div className={styles.cardDate}>
        <span className={styles.cardDay}>{formatDay(event.date)}</span>
        <span className={styles.cardMonth}>{formatMonth(event.date, months).slice(0, 3).toUpperCase()}</span>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCategory} style={{ color }}>{event.category}</span>
        <div className={styles.cardTitle}>{event.title}</div>
        {event.time && <span className={styles.cardTime}>{event.time}</span>}
        {event.description && <p className={styles.cardDesc}>{event.description}</p>}
      </div>
    </div>
  )
}

function Calendar({ allEvents, months, days }) {
  const today = new Date()
  const [year,  setYear]    = useState(today.getFullYear())
  const [month, setMonth]   = useState(today.getMonth())
  const [selected, setSelected] = useState(null)

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    setSelected(null)
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    setSelected(null)
  }

  const firstDay    = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const eventsByDay = {}
  allEvents.forEach(ev => {
    const d = new Date(ev.date + 'T12:00:00')
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate()
      if (!eventsByDay[day]) eventsByDay[day] = []
      eventsByDay[day].push(ev)
    }
  })

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isToday    = d => d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  const isCellPast = d => new Date(year, month, d, 23, 59) < today

  const panelEvents = selected
    ? (eventsByDay[selected] || [])
    : Object.values(eventsByDay).flat().sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendar}>
        <div className={styles.calHeader}>
          <button className={styles.calNav} onClick={prevMonth} aria-label="Mes anterior">&#8249;</button>
          <span className={styles.calTitle}>{months[month]} {year}</span>
          <button className={styles.calNav} onClick={nextMonth} aria-label="Mes siguiente">&#8250;</button>
        </div>

        <div className={styles.calGrid}>
          {days.map(d => (
            <div key={d} className={styles.calDayLabel}>{d}</div>
          ))}
          {cells.map((day, idx) => {
            if (!day) return <div key={`e-${idx}`} className={`${styles.calCell} ${styles.calEmpty}`} />
            const evs      = eventsByDay[day] || []
            const hasEvent = evs.length > 0
            const past     = isCellPast(day) && !isToday(day)
            const selCell  = selected === day
            return (
              <div
                key={day}
                className={[
                  styles.calCell,
                  past         ? styles.calPast    : '',
                  isToday(day) ? styles.calToday   : '',
                  hasEvent     ? styles.calHasEvent : '',
                  selCell      ? styles.calSelected : '',
                ].join(' ')}
                onClick={() => setSelected(selCell ? null : day)}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                <span className={styles.calDayNum}>{day}</span>
                {evs.length > 0 && (
                  <div className={styles.calDots}>
                    {evs.slice(0, 3).map((ev, i) => (
                      <span
                        key={i}
                        className={styles.calEventDot}
                        style={{ background: selCell ? 'rgba(255,255,255,0.8)' : getCategoryColor(ev.category) }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {panelEvents.length > 0 ? (
          <div className={styles.calPanel}>
            <div className={styles.calPanelTitle}>
              {selected ? `${selected} de ${months[month]}` : months[month]}
            </div>
            {panelEvents.slice(0, 6).map((ev, i) => (
              <div
                key={`${ev.id}-${i}`}
                className={styles.calPanelItem}
                style={{ '--item-color': getCategoryColor(ev.category) }}
              >
                <div className={styles.calPanelDateBadge}>
                  <span>{formatDay(ev.date)}</span>
                </div>
                <div className={styles.calPanelBody}>
                  <span className={styles.calPanelCategory} style={{ color: getCategoryColor(ev.category) }}>
                    {ev.category}
                  </span>
                  <div className={styles.calPanelTitle2}>{ev.title}</div>
                  {ev.time && <span className={styles.calPanelTime}>{ev.time}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.calEmpty2}>
            <p>{selected ? 'Sin eventos este dia.' : 'Sin eventos este mes.'}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Events() {
  const { t } = useLang()
  const [tab, setTab] = useState('upcoming')
  const year = new Date().getFullYear()
  const recurring     = generateRecurring(t.events.recurring || [], year)
  const calendarFeasts = t.events.calendarFeasts || []
  const allEvents = [...t.events.upcoming, ...t.events.past, ...calendarFeasts, ...recurring]

  return (
    <section id="eventos" className={`section ${styles.events}`}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t.events.label}</span>
          <h2 className="section-title">{t.events.title}</h2>
          <div className="ornament"><span className="ornament-cross">&#x271E;</span></div>
          <p className="section-subtitle">{t.events.subtitle}</p>
        </div>

        <div className={styles.tabs}>
          {[
            { key: 'upcoming', label: t.events.tabUpcoming },
            { key: 'past',     label: t.events.tabPast },
            { key: 'calendar', label: t.events.tabCalendar },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.tab} ${tab === key ? styles.tabActive : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'upcoming' && (
          <div className={styles.eventsList}>
            {t.events.upcoming.length === 0
              ? <p className={styles.empty}>{t.events.noUpcoming}</p>
              : t.events.upcoming.map((ev, i) => (
                  <div key={ev.id} className={styles.cardWrapper} style={{ animationDelay: `${i * 70}ms` }}>
                    <EventCard event={ev} months={t.events.months} />
                  </div>
                ))
            }
          </div>
        )}

        {tab === 'past' && (
          <div className={styles.eventsList}>
            {t.events.past.length === 0
              ? <p className={styles.empty}>{t.events.noPast}</p>
              : t.events.past.map((ev, i) => (
                  <div key={ev.id} className={styles.cardWrapper} style={{ animationDelay: `${i * 70}ms` }}>
                    <EventCard event={ev} months={t.events.months} />
                  </div>
                ))
            }
          </div>
        )}

        {tab === 'calendar' && (
          <Calendar allEvents={allEvents} months={t.events.months} days={t.events.days} />
        )}
      </div>
    </section>
  )
}
