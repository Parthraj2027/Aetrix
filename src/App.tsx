import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Domains from './sections/Domains'
import Prizes from './sections/Prizes'
import Timeline from './sections/Timeline'
import Schedule from './sections/Schedule'
import Evaluation from './sections/Evaluation'
import Register from './sections/Register'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// ─── Unstop Registration Link ───────────────────────────────────────────────
// When you get your Unstop link, change this ONE line.
// Every Register button across the site updates automatically.
export const UNSTOP_URL = 'COMING_SOON'
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.body.classList.add('loading')
  }, [])

  return (
    <>
      <Cursor />
      <Loader onComplete={() => {
        setLoaded(true)
        document.body.classList.remove('loading')
      }} />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Domains />
            <Prizes />
            <Timeline />
            <Schedule />
            <Evaluation />
            <Register />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
