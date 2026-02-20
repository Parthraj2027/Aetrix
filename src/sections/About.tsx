import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const stats = [
  { num: '36', unit: 'H',  label: 'Non-stop Hacking' },
  { num: '250', unit: '+', label: 'Expected Registrations' },
  { num: '150', unit: '+', label: 'Shortlisted Hackers' },
  { num: '₹1.5L', unit: '',label: 'Total Prize Pool', highlight: true },
]

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout} ref={ref}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          >
            <span className="section-eyebrow">// About</span>
            <h2 className="section-title">What is<br /><em>AETRIX?</em></h2>
            <p className={styles.desc}>
              AETRIX is a <strong>36-hour offline hackathon</strong> where 150+ engineering students
              converge to engineer real-world technology solutions — organized by the Science & Technical
              Committee of PDEU under the Innovation & Incubation Cell (IIC).
            </p>
            <p className={styles.desc}>
              Theme: <strong>Harnessing AI, Automation & Emerging Technologies</strong> to tackle
              practical industry and societal challenges, with full emphasis on feasibility and
              real-world deployment.
            </p>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22,1,0.36,1] }}
          >
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className={`${styles.statCard} ${s.highlight ? styles.highlight : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.statNum}>{s.num}<span className={styles.statUnit}>{s.unit}</span></div>
                  <div className={styles.statLabel}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
