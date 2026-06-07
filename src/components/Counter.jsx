import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Animates a numeric value when scrolled into view. Keeps any suffix/prefix
// (like %, /5) intact by splitting the raw string.
export default function Counter({ value, duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  // Memoised on `value` (a primitive) so its identity is stable across the
  // re-renders triggered by setDisplay — otherwise the effect below would
  // restart every frame and never reach the final number.
  const parsed = useMemo(
    () => String(value).match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/),
    [value]
  )

  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView || !parsed) return
    const [, prefix, numStr, suffix] = parsed
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
  }, [inView, parsed, duration])

  return <span ref={ref}>{parsed ? display : value}</span>
}
