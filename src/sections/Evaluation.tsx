import { motion } from 'framer-motion'
import { EVAL_CRITERIA } from '../lib/constants'
import styles from './Evaluation.module.css'

const accentColor = { cyan: '#40FFFF', purple: '#D8B4FE', green: '#4ADE80' }

export default function Evaluation() {
  return (
    <section className="section" id="evaluation">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Evaluation</span>
          <h2 className="section-title">How You'll<br /><em>Be Judged</em></h2>
        </div>

        <div className={styles.grid}>
          {EVAL_CRITERIA.map((c, i) => {
            const color = accentColor[c.accent as keyof typeof accentColor]
            return (
              <motion.div
                key={c.num}
                className={styles.card}
                style={{ '--ec': color } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -6, borderColor: color }}
              >
                <div className={styles.bigNum}>{c.num}</div>
                <div className={styles.accentLine} style={{ background: `linear-gradient(90deg, ${color}, transparent)`, boxShadow: `0 0 8px ${color}55` }} />
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
                <div className={styles.meter}>
                  <motion.div
                    className={styles.fill}
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 1.2, ease: [0.4,0,0.2,1] }}
                  />
                </div>
                <div className={styles.weight}>{c.weight}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
