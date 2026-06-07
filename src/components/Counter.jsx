import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Animates a numeric value when scrolled into view. Keeps any suffix/prefix
// (like %, /5) intact by splitting the raw string.
export default function Counter({ value, duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(value)

  const match = String(value).match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/)

  useEffect(() => {
    if (!inView || !match) return
    const [, prefix, numStr, suffix] = match
    const target = parseFloat(numStr)
    const decimals = (numStr.split('.')[1] || '').length
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const current = (target * eased).toFixed(decimals)
      setDisplay(`${prefix}${current}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, match, duration])

  return <span ref={ref}>{match ? display : value}</span>
}
