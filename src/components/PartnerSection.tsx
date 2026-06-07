import { useRef, useState } from 'react'
import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react'
import { partner, marqueeTiles } from '../data/content'
import FadeIn from './FadeIn'

type Trail = { id: number; x: number; y: number; r: number; tileIndex: number }

let uid = 0

export default function PartnerSection() {
  const [trails, setTrails] = useState<Trail[]>([])
  const lastSpawn = useRef(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onMove = (e: ReactMouseEvent) => {
    const now = performance.now()
    if (now - lastSpawn.current < 80) return
    lastSpawn.current = now
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const item: Trail = {
      id: uid++,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      r: Math.random() * 20 - 10,
      tileIndex: Math.floor(Math.random() * marqueeTiles.length),
    }
    setTrails((t) => [...t, item])
    window.setTimeout(() => {
      setTrails((t) => t.filter((x) => x.id !== item.id))
    }, 1000)
  }

  return (
    <section id="dong-hanh" className="w-full px-6 py-12">
      <div
        ref={containerRef}
        onMouseMove={onMove}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white py-48 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
      >
        {trails.map((t) => {
          const tile = marqueeTiles[t.tileIndex]
          return (
            <div
              key={t.id}
              className="trail-item absolute z-0 flex h-16 w-16 items-center justify-center rounded-xl text-2xl shadow-lg"
              style={
                {
                  left: t.x - 32,
                  top: t.y - 32,
                  '--r': `${t.r}deg`,
                  background: `linear-gradient(135deg, ${tile.from}, ${tile.to})`,
                } as CSSProperties
              }
            >
              {tile.icon}
            </div>
          )
        })}

        <div className="relative z-10 flex flex-col items-center text-center">
          <FadeIn
            as="h2"
            delay={0.1}
            className="mb-12 px-4 font-serif text-[48px] leading-none text-[#0D212C] md:text-[64px] lg:text-[80px]"
          >
            {partner.heading}
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#hero"
              className="inline-flex items-center gap-3 rounded-full bg-[#051A24] py-2 pl-2 pr-7 text-sm font-medium text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),inset_0_2px_8px_0_rgba(255,255,255,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5b8cff] to-[#ff5b7f] text-base">
                🔑
              </span>
              {partner.cta}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
