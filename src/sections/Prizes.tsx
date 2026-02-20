import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PRIZES } from '../lib/constants'
import styles from './Prizes.module.css'

const colorMap = {
  cyan:   { text: '#40FFFF',  ring: 'rgba(0,245,255,0.15)',   ringBorder: 'rgba(0,245,255,0.3)',   glow: 'rgba(0,245,255,0.15)'   },
  purple: { text: '#D8B4FE',  ring: 'rgba(192,132,252,0.15)', ringBorder: 'rgba(192,132,252,0.3)', glow: 'rgba(192,132,252,0.15)' },
  green:  { text: '#4ADE80',  ring: 'rgba(74,222,128,0.15)',  ringBorder: 'rgba(74,222,128,0.3)',  glow: 'rgba(74,222,128,0.15)'  },
}

const tiers = [
  { label: '1st Place', amount: '₹25,000', pct: 100, colorClass: 'gold' },
  { label: '2nd Place', amount: '₹15,000', pct: 60,  colorClass: 'silver' },
  { label: '3rd Place', amount: '₹10,000', pct: 40,  colorClass: 'bronze' },
]

function PrizeMeter({ pct, inView }: { pct: number; inView: boolean }) {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!barRef.current) return
    barRef.current.style.width = inView ? `${pct}%` : '0%'
  }, [inView, pct])
  return (
    <div className={styles.meterTrack}>
      <div ref={barRef} className={styles.meterBar} style={{ transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
    </div>
  )
}

export default function Prizes() {
  const inViewRef = useRef(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) inViewRef.current = true }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section" id="prizes" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Prize Pool</span>
          <h2 className="section-title">Win Big.<br /><em>Per Domain.</em></h2>
          <p className="section-sub">Each domain has its own prize structure — every winner takes home real rewards.</p>
        </div>

        <motion.div
          className={styles.totalBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.totalLabel}>Total Prize Pool</span>
          <span className={styles.totalAmount}>₹1,50,000</span>
          <span className={styles.totalSub}>across 3 domains</span>
        </motion.div>

        <div className={styles.grid}>
          {PRIZES.map((p, i) => {
            const c = colorMap[p.color]
            return (
              <motion.div
                key={p.domain}
                className={styles.card}
                style={{ '--pc': c.text, '--pc-glow': c.glow } as React.CSSProperties}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconRing} style={{ background: c.ring, border: `1px solid ${c.ringBorder}` }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={c.text} strokeWidth="2">
                      {p.color === 'cyan' && <><path d="M13 3 L13 23 M3 13 L23 13"/><rect x="9" y="9" width="8" height="8" rx="1" opacity="0.4"/></>}
                      {p.color === 'purple' && <><path d="M4 17 L9 9 L17 14 L23 5"/><circle cx="23" cy="18" r="4.5"/><path d="M21 18 L25 18 M23 16 L23 20"/></>}
                      {p.color === 'green' && <><path d="M13 4 C13 4 6 8 6 15 C6 20 9 23 13 23 C17 23 20 20 20 15 C20 8 13 4 13 4Z"/><line x1="13" y1="23" x2="13" y2="14" opacity="0.4"/></>}
                    </svg>
                  </div>
                  <div>
                    <div className={styles.domainNum}>{p.domainNum}</div>
                    <div className={styles.domainName}>{p.domain}</div>
                  </div>
                </div>

                <div className={styles.tiers}>
                  {tiers.map((t) => (
                    <div key={t.label} className={`${styles.tier} ${styles[t.colorClass]}`}>
                      <div className={styles.tierLabel}>{t.label}</div>
                      <div className={styles.tierAmount}>{t.amount}</div>
                      <PrizeMeter pct={t.pct} inView={true} />
                    </div>
                  ))}
                </div>
                <div className={styles.glow} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
