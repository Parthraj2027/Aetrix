import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UNSTOP_URL } from '../App'
import styles from './Navbar.module.css'

const LINKS = ['About','Domains','Prizes','Timeline','Schedule','FAQ','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.4 })
    LINKS.forEach(l => { const el = document.getElementById(l.toLowerCase()); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const handleReg = (e: React.MouseEvent) => {
    e.preventDefault()
    if (UNSTOP_URL === 'COMING_SOON') showToast()
    else window.open(UNSTOP_URL, '_blank')
  }

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.inner}>
          <a href="#hero" className={styles.logoWrap}>
            <img src="/snt.png" alt="S&T Committee" className={styles.logo} />
          </a>

          <ul className={styles.links}>
            {LINKS.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`${styles.link} ${active === l.toLowerCase() ? styles.active : ''}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <a href="#" className={styles.cta} onClick={handleReg}>Register →</a>

          <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {LINKS.map((l, i) => (
                <motion.li key={l}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a href={`#${l.toLowerCase()}`} className={styles.mobLink} onClick={() => setMenuOpen(false)}>{l}</a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: LINKS.length * 0.06 }}>
                <a href="#" className={`${styles.mobLink} ${styles.mobCta}`} onClick={(e) => { handleReg(e); setMenuOpen(false) }}>Register Now →</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function showToast() {
  const existing = document.getElementById('reg-toast')
  if (existing) existing.remove()
  const toast = document.createElement('div')
  toast.id = 'reg-toast'
  toast.innerHTML = `<strong style="color:#40FFFF;display:block;margin-bottom:4px">Registration Opening Soon!</strong><span style="font-size:0.8rem;color:#94A3B8">Contact tesseractpdeu@gmail.com to stay updated.</span><button onclick="this.parentElement.remove()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:#64748B;cursor:pointer;font-size:1rem">✕</button>`
  Object.assign(toast.style, {
    position:'fixed', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
    background:'#0A0A18', border:'1px solid rgba(0,245,255,0.4)', borderRadius:'14px',
    padding:'1.1rem 2.5rem 1.1rem 1.4rem', fontFamily:"'Syne',sans-serif", color:'#F1F5F9',
    boxShadow:'0 0 50px rgba(0,245,255,0.15)', zIndex:'9999', maxWidth:'420px', width:'90%',
  })
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 5000)
}
