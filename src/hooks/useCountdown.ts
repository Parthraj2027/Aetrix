import { useState, useEffect } from 'react'

interface Countdown { days: string; hours: string; mins: string; secs: string }

export function useCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO).getTime()

  const calc = (): Countdown => {
    const diff = target - Date.now()
    if (diff <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' }
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    const p = (n: number) => String(n).padStart(2, '0')
    return { days: p(d), hours: p(h), mins: p(m), secs: p(s) }
  }

  const [cd, setCd] = useState<Countdown>(calc)
  useEffect(() => {
    const t = setInterval(() => setCd(calc()), 1000)
    return () => clearInterval(t)
  }, [])

  return cd
}
