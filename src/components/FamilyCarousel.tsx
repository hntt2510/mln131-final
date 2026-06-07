import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { families } from '../data/content'
import type { Family } from '../data/content'
import FadeIn from './FadeIn'

const GAP = 24
const LEN = families.length
const tripled: Family[] = [...families, ...families, ...families]

function initials(name: string) {
  return name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()
}

function Card({ family }: { family: Family }) {
  return (
    <article className="rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:rounded-[40px] md:pl-10 md:pr-24">
      <svg className="mb-5 h-8 w-8 text-[#0D212C]/15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9.5 4C6.46 4 4 6.46 4 9.5c0 3.04 2.46 5.5 5.5 5.5.34 0 .67-.03 1-.09-.7 2.2-2.62 3.86-4.9 4.34a.6.6 0 0 0 .15 1.18C10.6 19.5 13 15.6 13 10.5 13 6.91 11.42 4 9.5 4Zm9 0c-3.04 0-5.5 2.46-5.5 5.5 0 3.04 2.46 5.5 5.5 5.5.34 0 .67-.03 1-.09-.7 2.2-2.62 3.86-4.9 4.34a.6.6 0 0 0 .15 1.18C19.6 19.5 22 15.6 22 10.5 22 6.91 20.42 4 18.5 4Z" />
      </svg>

      <p className="min-h-[120px] text-base leading-relaxed text-[#0D212C]">{family.quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ background: `linear-gradient(135deg, ${family.gradient[0]}, ${family.gradient[1]})` }}
        >
          {initials(family.name)}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0D212C]">{family.name}</div>
          <div className="text-sm text-[#273C46]">→ {family.role}</div>
        </div>
      </div>
    </article>
  )
}

export default function FamilyCarousel() {
  const [index, setIndex] = useState(LEN)
  const [anim, setAnim] = useState(true)
  const [stepW, setStepW] = useState(427.5 + GAP)
  const paused = useRef(false)

  // responsive card width
  useEffect(() => {
    const measure = () => {
      const cardW = window.innerWidth < 768 ? window.innerWidth - 48 : 427.5
      setStepW(cardW + GAP)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // autoplay
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setIndex((i) => i + 1)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  // seamless loop: snap back into the middle band without transition
  useEffect(() => {
    if (anim) return
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)))
    return () => cancelAnimationFrame(id)
  }, [anim])

  const handleEnd = useCallback(() => {
    setIndex((i) => {
      if (i >= LEN * 2) {
        setAnim(false)
        return i - LEN
      }
      if (i < LEN) {
        setAnim(false)
        return i + LEN
      }
      return i
    })
  }, [])

  const cardWidth = stepW - GAP

  return (
    <section className="w-full py-20">
      <div className="mx-auto md:ml-auto md:max-w-4xl px-6">
        <FadeIn delay={0.1} className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
            Các <span className="font-serif">gia đình</span> nói gì
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-black text-black" />
              ))}
            </div>
            <span className="text-sm font-medium text-[#0D212C]">7 cặp · phỏng vấn sâu</span>
          </div>
        </FadeIn>
      </div>

      <div
        className="overflow-hidden px-6"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(calc(50vw - ${cardWidth / 2}px - ${index * stepW}px))`,
            transition: anim ? 'transform 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
          onTransitionEnd={handleEnd}
        >
          {tripled.map((f, i) => (
            <div key={i} className="flex-none" style={{ width: cardWidth }}>
              <Card family={f} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-4 px-6">
        <button
          onClick={() => setIndex((i) => i - 1)}
          aria-label="Trước"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 transition hover:bg-[#0D212C]/5"
        >
          <ChevronLeft className="h-5 w-5 text-[#0D212C]" />
        </button>
        <button
          onClick={() => setIndex((i) => i + 1)}
          aria-label="Sau"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 transition hover:bg-[#0D212C]/5"
        >
          <ChevronRight className="h-5 w-5 text-[#0D212C]" />
        </button>
      </div>
    </section>
  )
}
