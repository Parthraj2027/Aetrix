import { motion } from 'framer-motion'
import { DOMAINS } from '../lib/constants'
import styles from './Domains.module.css'

const colorMap = {
  cyan:   { text: '#40FFFF', bg: 'rgba(0,245,255,0.07)',   border: 'rgba(0,245,255,0.2)' },
  purple: { text: '#D8B4FE', bg: 'rgba(192,132,252,0.07)', border: 'rgba(192,132,252,0.2)' },
  green:  { text: '#4ADE80', bg: 'rgba(74,222,128,0.07)',  border: 'rgba(74,222,128,0.2)' },
}

const DomainSVG = ({ color, num }: { color: string; num: string }) => {
  if (num === '01') return (
    <svg viewBox="0 0 120 120" fill="none">
      <rect x="45" y="20" width="30" height="80" rx="4" stroke={color} strokeWidth="2"/>
      <rect x="20" y="45" width="80" height="30" rx="4" stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="60" r="8" fill={color} opacity="0.3"/>
      <circle cx="60" cy="60" r="3" fill={color}/>
    </svg>
  )
  if (num === '02') return (
    <svg viewBox="0 0 120 120" fill="none">
      <path d="M20 70 L40 45 L80 45 L100 70 L100 85 L20 85 Z" stroke={color} strokeWidth="2"/>
      <circle cx="35" cy="87" r="10" stroke={color} strokeWidth="2"/>
      <circle cx="85" cy="87" r="10" stroke={color} strokeWidth="2"/>
      <rect x="50" y="50" width="20" height="15" rx="2" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 120 120" fill="none">
      <path d="M60 20 C60 20 30 40 30 65 C30 80 44 92 60 92 C76 92 90 80 90 65 C90 40 60 20 60 20Z" stroke={color} strokeWidth="2"/>
      <path d="M60 92 L60 55" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <path d="M60 65 C60 65 45 58 38 48" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <path d="M60 72 C60 72 72 65 80 55" stroke={color} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

// Marquee items
const marqueeItems = [
  { label: 'HEALTHCARE / MEDTECH', color: 'cyan' as const },
  { label: 'SMART TRANSPORTATION', color: 'purple' as const },
  { label: 'SUSTAINABILITY',       color: 'green' as const },
]
const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems]

export default function Domains() {
  return (
    <section className="section" id="domains">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Focus Domains</span>
          <h2 className="section-title">Choose Your<br /><em>Battlefield</em></h2>
          <p className="section-sub">Three cutting-edge domains. Real-world problems. Your solution.</p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {doubled.map((item, i) => (
            <span key={i}>
              <span className={styles.marqueeItem} style={{ color: colorMap[item.color].text }}>{item.label}</span>
              <span className={styles.marqueeSep}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.rows}>
          {DOMAINS.map((d, i) => {
            const c = colorMap[d.color]
            return (
              <motion.div
                key={d.num}
                className={styles.row}
                style={{ '--dc': c.text, '--dc-bg': c.bg, '--dc-border': c.border } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22,1,0.36,1] }}
                whileHover={{ backgroundColor: c.bg }}
              >
                <div className={styles.rowLeft}>
                  <div className={styles.num}>{d.num}</div>
                  <div className={styles.divLine} />
                  <div className={styles.info}>
                    <div className={styles.tag}>{d.tag}</div>
                    <h3 className={styles.title}>{d.title}</h3>
                    <p className={styles.desc}>{d.desc}</p>
                    <div className={styles.tags}>
                      {d.tags.map(t => <span key={t} className={styles.tagChip}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className={styles.visual}>
                  <DomainSVG color={c.text} num={d.num} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
