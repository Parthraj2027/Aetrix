import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DAY1_SCHEDULE, DAY2_SCHEDULE } from '../lib/constants'
import styles from './Schedule.module.css'

export default function Schedule() {
  const [day, setDay] = useState<1|2>(1)
  const items = day === 1 ? DAY1_SCHEDULE : DAY2_SCHEDULE

  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Event Schedule</span>
          <h2 className="section-title">36 Hours.<br /><em>Every Minute Counts.</em></h2>
        </div>

        <div className={styles.tabs}>
          {([1,2] as const).map(d => (
            <button
              key={d}
              className={`${styles.tab} ${day === d ? styles.active : ''}`}
              onClick={() => setDay(d)}
            >
              Day {d} — {d === 1 ? '21 March' : '22 March'}
              {day === d && <motion.div className={styles.tabUnderline} layoutId="tabLine" />}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                className={`${styles.item} ${item.highlight ? styles.highlight : ''}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <span className={styles.time}>{item.time}</span>
                <div className={styles.body}>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
