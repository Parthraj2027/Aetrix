import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const contacts = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
    label: 'Call Us', value: '+91 93279 98768', sub: 'Manav Patel', href: 'tel:+919327998768',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email Us', value: 'tesseractpdeu@gmail.com', sub: 'S&T Committee', href: 'mailto:tesseractpdeu@gmail.com',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LinkedIn', value: 'Science & Technical Committee', sub: 'PDEU Official', href: 'https://linkedin.com',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Venue', value: 'Pandit Deendayal Energy University', sub: 'Gandhinagar, Gujarat', href: null,
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">// Contact</span>
          <h2 className="section-title">Get In<br /><em>Touch</em></h2>
        </div>
        <div className={styles.grid}>
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.iconBox}>{c.icon}</div>
              <div className={styles.label}>{c.label}</div>
              {c.href ? (
                <a href={c.href} className={styles.value} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{c.value}</a>
              ) : (
                <div className={styles.value}>{c.value}</div>
              )}
              <div className={styles.sub}>{c.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
