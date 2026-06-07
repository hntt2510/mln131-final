import { useEffect, useRef, useState } from 'react'

// IntersectionObserver scroll-trigger. Adds the `animate-fade-in-up` class the
// first time the element enters the viewport (threshold 0.1) and stays applied.
export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
