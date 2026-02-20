import { motion } from 'framer-motion'
import { UNSTOP_URL } from '../App'
import styles from './Register.module.css'

export default function Register() {
  const handleReg = (e: React.MouseEvent) => {
    e.preventDefault()
    if (UNSTOP_URL === 'COMING_SOON') {
      const toast = document.createElement('div')
      toast.innerHTML = `<strong style="color:#40FFFF;display:block;margin-bottom:4px">Registration Opening Soon!</strong><span style="font-size:0.8rem;color:#94A3B8">Contact tesseractpdeu@gmail.com to stay updated.</span>`
      Object.assign(toast.style, { position:'fixed', bottom:'2rem', left:'50%', transform:'translateX(-50%)', background:'#0A0A18', border:'1px solid rgba(0,245,255,0.4)', borderRadius:'14px', padding:'1.1rem 1.8rem', zIndex:'9999', maxWidth:'400px', width:'90%', fontFamily:"'Syne',sans-serif" })
      document.body.appendChild(toast)
      setTimeout(() => toast.remove(), 5000)
    } else { window.open(UNSTOP_URL, '_blank') }
  }

  return (
    <section className="section" id="register">
      <div className="container">
        <motion.div
          className={styles.box}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.bgText}>REGISTER</div>
          <span className="section-eyebrow">// Join the Battle</span>
          <h2 className={styles.title}>Ready to<br /><em>Build the Future?</em></h2>
          <p className={styles.desc}>Open to all engineering students. Teams of 4–5. At least one female participant per team. Registration is via Unstop.</p>
          <div className={styles.deadline}>
            <span className={styles.deadlineLabel}>Registration Deadline</span>
            <span className={styles.deadlineDate}>15 March 2026</span>
          </div>
          <a href="#" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }} onClick={handleReg}>
            Register on Unstop
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <p className={styles.note}>Questions? <strong>tesseractpdeu@gmail.com</strong> · <strong>+91 93279 98768</strong></p>
        </motion.div>
      </div>
    </section>
  )
}
