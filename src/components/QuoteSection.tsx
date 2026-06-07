import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import { quote } from '../data/content'
import FadeIn from './FadeIn'
import VisualTile from './VisualTile'

// Parallax: while the element is on screen, offset it based on viewport
// position (clamped to ±MAX). Driven by scroll + requestAnimationFrame.
function useParallax(max = 200) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)
  const visible = useRef(false)
  const raf = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([e]) => {
        visible.current = e.isIntersecting
        if (e.isIntersecting) update()
      },
      { threshold: 0 }
    )
    io.observe(el)

    const update = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 (below) .. 1 (above), 0 when centered
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2)
      const clamped = Math.max(-1, Math.min(1, progress))
      setOffset(clamped * max * -0.5)
    }

    const onScroll = () => {
      if (!visible.current) return
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [max])

  return { ref, offset }
}

export default function QuoteSection() {
  const { ref, offset } = useParallax(200)
  const [before, after] = quote.text.split(quote.accent)

  return (
    <section className="mx-auto max-w-2xl px-6 py-12 text-center">
      <FadeIn delay={0.1} className="flex justify-center">
        <Quote className="h-6 w-6 text-slate-900" />
      </FadeIn>

      <FadeIn
        as="blockquote"
        delay={0.2}
        className="mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]"
      >
        {before}
        <span className="font-serif">{quote.accent}</span>
        {after}
      </FadeIn>

      <FadeIn as="p" delay={0.3} className="mt-6 text-sm italic text-[#273C46]">
        {quote.author}
      </FadeIn>

      <FadeIn delay={0.4} className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {quote.pillars.map((p) => (
          <span
            key={p.name}
            className="text-2xl font-medium text-slate-900"
            style={{ width: p.w }}
          >
            {p.name}
          </span>
        ))}
      </FadeIn>

      <FadeIn delay={0.5} className="mt-10 flex justify-center">
        <div ref={ref} style={{ transform: `translateY(${offset}px)` }} className="w-full max-w-xs">
          <VisualTile tile={quote.visual} className="h-64 w-full shadow-lg" />
        </div>
      </FadeIn>
    </section>
  )
}
