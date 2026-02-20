import { UNSTOP_URL } from '../App'
import styles from './Footer.module.css'

export default function Footer() {
  const handleReg = (e: React.MouseEvent) => {
    e.preventDefault()
    if (UNSTOP_URL === 'COMING_SOON') {
      alert('Registration Opening Soon! Contact tesseractpdeu@gmail.com')
    } else { window.open(UNSTOP_URL, '_blank') }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <img src="/snt.png" alt="S&T" className={styles.sntLogo} />
              <span className={styles.wordmark}><span className={styles.bracket}>[</span>AETRIX<span className={styles.bracket}>]</span></span>
            </div>
            <p>A Science &amp; Technical Committee event<br />Pandit Deendayal Energy University, Gandhinagar</p>
          </div>
          <div className={styles.col}>
            <h4>Navigate</h4>
            {['About','Domains','Prizes','Timeline','Schedule','FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </div>
          <div className={styles.col}>
            <h4>Contact</h4>
            <a href="tel:+919327998768">+91 93279 98768</a>
            <a href="mailto:tesseractpdeu@gmail.com">tesseractpdeu@gmail.com</a>
            <a href="#" onClick={handleReg} className={styles.regLink}>Register Now →</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 AETRIX · Science &amp; Technical Committee, PDEU. All rights reserved.</span>
          <span className={styles.mono}>21 – 22 MARCH 2026 · GANDHINAGAR</span>
        </div>
      </div>
    </footer>
  )
}
