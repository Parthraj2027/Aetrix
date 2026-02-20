import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useCountdown } from '../hooks/useCountdown'
import { UNSTOP_URL } from '../App'
import styles from './Hero.module.css'

// 3D rotating torus knot
function TorusScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.18
      meshRef.current.rotation.y += delta * 0.22
    }
  })
  return (
    <>
      <Stars radius={100} depth={50} count={4000} factor={4} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#00F5FF" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#C084FC" intensity={1.5} />
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.8, 0.55, 180, 20, 2, 3]} />
        <MeshDistortMaterial
          color="#00F5FF"
          wireframe
          distort={0.18}
          speed={1.5}
          transparent
          opacity={0.22}
        />
      </mesh>
      <mesh ref={meshRef} scale={1.01}>
        <torusKnotGeometry args={[1.8, 0.55, 180, 20, 2, 3]} />
        <meshStandardMaterial
          color="#40FFFF"
          transparent opacity={0.04}
          emissive="#00F5FF" emissiveIntensity={0.3}
        />
      </mesh>
    </>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: [0.22,1,0.36,1] } }) }

export default function Hero() {
  const { days, hours, mins, secs } = useCountdown('2026-03-21T09:00:00+05:30')

  const handleReg = (e: React.MouseEvent) => {
    e.preventDefault()
    if (UNSTOP_URL === 'COMING_SOON') {
      const toast = document.createElement('div')
      toast.innerHTML = `<strong style="color:#40FFFF;display:block;margin-bottom:4px">Registration Opening Soon!</strong><span style="font-size:0.8rem;color:#94A3B8">Contact tesseractpdeu@gmail.com</span>`
      Object.assign(toast.style, { position:'fixed', bottom:'2rem', left:'50%', transform:'translateX(-50%)', background:'#0A0A18', border:'1px solid rgba(0,245,255,0.4)', borderRadius:'14px', padding:'1.1rem 1.8rem', zIndex:'9999', maxWidth:'400px', width:'90%', fontFamily:"'Syne',sans-serif" })
      document.body.appendChild(toast)
      setTimeout(() => toast.remove(), 5000)
    } else { window.open(UNSTOP_URL, '_blank') }
  }

  return (
    <section className={styles.hero} id="hero">
      {/* 3D Canvas */}
      <div className={styles.canvas3d}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <TorusScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={styles.content}>
        <motion.p className={styles.eyebrow} custom={0} variants={fadeUp} initial="hidden" animate="show">
          <span className={styles.eLine} />
          S&amp;T Committee · PDEU Gandhinagar
          <span className={styles.eLine} />
        </motion.p>

        <motion.h1 className={styles.title} custom={1} variants={fadeUp} initial="hidden" animate="show">
          <span className={styles.glitch} data-text="AETRIX">AETRIX</span>
          <span className={styles.titleYear}>2026</span>
        </motion.h1>

        <motion.p className={styles.tagline} custom={2} variants={fadeUp} initial="hidden" animate="show">
          Hack the Future. Build What Matters.
        </motion.p>

        <motion.div className={styles.meta} custom={3} variants={fadeUp} initial="hidden" animate="show">
          {[['⚡','36-Hour Hackathon'],['📍','PDEU, Gandhinagar'],['📅','21–22 March 2026']].map(([icon, text]) => (
            <div className={styles.metaItem} key={text}>
              <span className={styles.metaDot} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className={styles.countdown} custom={4} variants={fadeUp} initial="hidden" animate="show">
          <div className={styles.cdLabel}>Hackathon begins in</div>
          <div className={styles.cdGrid}>
            {[['Days', days], ['Hours', hours], ['Minutes', mins], ['Seconds', secs]].map(([label, val], i) => (
              <>
                <div className={styles.cdUnit} key={label}>
                  <span className={styles.cdVal}>{val}</span>
                  <span className={styles.cdLbl}>{label}</span>
                </div>
                {i < 3 && <span className={styles.cdSep}>:</span>}
              </>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.actions} custom={5} variants={fadeUp} initial="hidden" animate="show">
          <a href="#" className="btn-primary" onClick={handleReg}>
            Register Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" className="btn-ghost">Learn More</a>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
