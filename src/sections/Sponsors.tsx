import { motion } from 'framer-motion'
import styles from './Sponsors.module.css'

const SPONSORS = [
  {
    name: 'IIC — PDEU',
    role: 'Ecosystem Partner',
    logo: '/sponsors/iic.jpg',
    tier: 'ecosystem',
  },
  {
    name: 'Vrinda Immigrations',
    role: 'Title Sponsor',
    logo: '/sponsors/vrinda.png',
    tier: 'title',
  },
  {
    name: 'Apex Tarmac Pvt. Ltd.',
    role: 'Title Sponsor',
    logo: '/sponsors/apex.jpg',
    tier: 'title',
  },
  {
    name: 'IFFCO',
    role: 'Domain Sponsor',
    logo: '/sponsors/iffco.jpg',
    tier: 'domain',
  },
  {
    name: 'AirX',
    role: 'Domain Sponsor — Environment',
    logo: '/sponsors/airx.jpg',
    tier: 'domain',
  },
]

// Triple the list so the infinite loop looks seamless
const MARQUEE_ITEMS = [...SPONSORS, ...SPONSORS, ...SPONSORS]

const tierColor: Record<string, string> = {
  title:     '#FCD34D',
  ecosystem: '#40FFFF',
  domain:    '#C084FC',
}

export default function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Partners & Sponsors</span>
          <h2 className="section-title">Backed By The<br /><em>Best</em></h2>
          <p className="section-sub">
            AETRIX 2026 is proudly supported by our sponsors and institutional partners.
          </p>
        </div>

        {/* Tier legend */}
        <motion.div
          className={styles.legend}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { label: 'Title Sponsor',      color: '#FCD34D' },
            { label: 'Ecosystem Partner',  color: '#40FFFF' },
            { label: 'Domain Sponsor',     color: '#C084FC' },
          ].map(t => (
            <div className={styles.legendItem} key={t.label}>
              <span className={styles.legendDot} style={{ background: t.color, boxShadow: `0 0 8px ${t.color}` }} />
              <span className={styles.legendLabel}>{t.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Animated marquee strip ── */}
      <div className={styles.stripWrap}>
        {/* Top thin glow line */}
        <div className={styles.glowLine} />

        <div className={styles.strip}>
          <div className={styles.track}>
            {MARQUEE_ITEMS.map((s, i) => (
              <div className={styles.card} key={`${s.name}-${i}`}>
                {/* Tier badge */}
                <span
                  className={styles.badge}
                  style={{ color: tierColor[s.tier], borderColor: tierColor[s.tier] + '55', background: tierColor[s.tier] + '12' }}
                >
                  {s.role}
                </span>

                {/* Logo box */}
                <div className={styles.logoBox}>
                  <img
                    src={s.logo}
                    alt={s.name}
                    className={styles.logo}
                    style={s.tier === 'title' ? { filter: 'brightness(1.1)' } : {}}
                  />
                </div>

                {/* Name */}
                <div className={styles.name}>{s.name}</div>

                {/* Separator dot */}
                <div className={styles.sep} style={{ background: tierColor[s.tier] }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom thin glow line */}
        <div className={styles.glowLine} />

        {/* Edge fade masks */}
        <div className={styles.fadeLeft}  />
        <div className={styles.fadeRight} />
      </div>

      {/* Bottom CTA */}
      <div className="container">
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>Interested in sponsoring AETRIX?</p>
          <a href="mailto:tesseractpdeu@gmail.com" className={styles.ctaLink}>
            tesseractpdeu@gmail.com →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
