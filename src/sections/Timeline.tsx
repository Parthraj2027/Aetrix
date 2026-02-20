import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CAL_EVENTS, TIMELINE_ITEMS } from '../lib/constants'
import styles from './Timeline.module.css'

const MONTH_NAMES = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAY_LABELS  = ['SUN','MON','TUE','WED','THU','FRI','SAT']

function CalMonth({ year, month, onSelect, selected }: {
  year: number; month: number
  onSelect: (key: string) => void; selected: string | null
}) {
  const today    = new Date()
  const firstDay = new Date(year, month, 1).getDay()
  const days     = new Date(year, month + 1, 0).getDate()
  const cells    = []

  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)

  return (
    <div className={styles.monthBlock}>
      <div className={styles.monthTitle}>{MONTH_NAMES[month]} {year}</div>
      <div className={styles.dayLabels}>
        {DAY_LABELS.map(d => <span key={d}>{d}</span>)}
      </div>
      <div className={styles.calGrid}>
        {cells.map((d, i) => {
          if (d === null) return <div key={`e${i}`} className={styles.cellEmpty} />
          const key = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
          const ev  = CAL_EVENTS[key]
          const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===d
          const isSelected = selected === key

          return (
            <motion.div
              key={key}
              className={`${styles.cell} ${ev ? (ev.hackathon ? styles.hackathon : styles.event) : ''} ${isToday ? styles.today : ''} ${isSelected ? styles.active : ''}`}
              onClick={() => ev && onSelect(key)}
              whileHover={ev ? { scale: 1.05 } : {}}
              whileTap={ev ? { scale: 0.97 } : {}}
            >
              <span className={`${styles.cellNum} ${isToday ? styles.todayNum : ''}`}>{d}</span>
              {ev && (
                <span className={`${styles.pill} ${ev.hackathon ? styles.pillHackathon : ''}`}>
                  {ev.short}
                </span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Timeline() {
  const [selected, setSelected] = useState<string | null>(null)
  const activeEvent = useMemo(() => selected ? CAL_EVENTS[selected] : null, [selected])

  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Key Dates</span>
          <h2 className="section-title">Mark Your<br /><em>Calendar</em></h2>
        </div>

        {/* Dual-month calendar */}
        <motion.div
          className={styles.calWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.calMonths}>
            <CalMonth year={2026} month={1} onSelect={setSelected} selected={selected} />
            <div className={styles.monthDivider} />
            <CalMonth year={2026} month={2} onSelect={setSelected} selected={selected} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected ?? 'default'}
              className={styles.eventPanel}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {activeEvent ? (
                <>
                  <div className={styles.panelDate}>
                    {selected!.split('-')[2]} {MONTH_SHORT[parseInt(selected!.split('-')[1]) - 1]} {selected!.split('-')[0]}
                  </div>
                  <div className={styles.panelTitle}>{activeEvent.title}</div>
                  <div className={styles.panelDesc}>{activeEvent.desc}</div>
                </>
              ) : (
                <>
                  <div className={styles.panelTitle} style={{ color: '#475569' }}>Click a highlighted date to view details</div>
                  <div className={styles.panelDesc}>All key hackathon milestones are marked across both months above.</div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Timeline list */}
        <div className={styles.tlList}>
          {TIMELINE_ITEMS.map((item, i) => (
            <motion.div
              key={item.num}
              className={`${styles.tlItem} ${i === TIMELINE_ITEMS.length - 1 ? styles.tlFinal : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
            >
              <div className={styles.tlDot}>
                <span>{item.num}</span>
              </div>
              <div className={styles.tlBody}>
                <div className={styles.tlDate}>{item.date}</div>
                <div className={styles.tlTitle}>{item.title}</div>
                <div className={styles.tlDesc}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
