import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../lib/constants'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// FAQ</span>
          <h2 className="section-title">Got<br /><em>Questions?</em></h2>
        </div>
        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button className={styles.q} onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <motion.span
                  className={styles.arrow}
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >↓</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className={styles.a}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
