import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Loader.module.css'

const TAGLINES = [
  'Initializing systems...',
  'Loading problem domains...',
  'Calibrating particle engine...',
  'Warming up the hackathon...',
  'Connecting to PDEU servers...',
  'Almost there...',
  'Ready to build.',
]

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pct, setPct] = useState(0)
  const [tagIdx, setTagIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number }
    const particles: P[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.45 + 0.1,
    }))

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // grid
      ctx.strokeStyle = 'rgba(0,245,255,0.03)'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke() }
      for (let y = 0; y < canvas.height; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke() }
      // particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${p.a})`; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  // Progress
  useEffect(() => {
    const duration = 2800
    const interval = 18
    let current = 0
    const inc = 100 / (duration / interval)

    const timer = setInterval(() => {
      current = Math.min(current + inc + Math.random() * 0.3, 100)
      setPct(Math.floor(current))
      const newIdx = Math.min(Math.floor((current / 100) * TAGLINES.length), TAGLINES.length - 1)
      setTagIdx(newIdx)
      if (current >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 700)
        }, 300)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <canvas ref={canvasRef} className={styles.canvas} />

          <div className={styles.content}>
            <motion.div
              className={styles.logo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.bracket}>[</span>
              <span className={styles.name}>AETRIX</span>
              <span className={styles.bracket}>]</span>
            </motion.div>

            <motion.div
              className={styles.year}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              2026
            </motion.div>

            <motion.div
              className={styles.barWrap}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className={styles.bar} style={{ width: `${pct}%` }} />
              <div className={styles.barGlow} style={{ width: `${pct}%` }} />
            </motion.div>

            <div className={styles.pct}>{pct}%</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tagIdx}
                className={styles.tagline}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {TAGLINES[tagIdx]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* HUD corners */}
          <div className={`${styles.corner} ${styles.tl}`} />
          <div className={`${styles.corner} ${styles.tr}`} />
          <div className={`${styles.corner} ${styles.bl}`} />
          <div className={`${styles.corner} ${styles.br}`} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
