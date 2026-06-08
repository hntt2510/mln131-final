import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Progress from './components/Progress'
import './sections/sections.css'

import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Socialization from './sections/Socialization'
import Digital from './sections/Digital'
import Values from './sections/Values'
import Communication from './sections/Communication'
import Data from './sections/Data'
import Findings from './sections/Findings'
import Solutions from './sections/Solutions'
import Conclusion from './sections/Conclusion'

export default function App() {
  const [lenis, setLenis] = useState(null)
  const rafRef = useRef()

  useEffect(() => {
    const l = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    setLenis(l)

    const raf = (time) => {
      l.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      l.destroy()
    }
  }, [])

  // Feature image cards: keyboard focusable + tap-to-reveal on touch devices
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.media'))
    cards.forEach((m) => m.setAttribute('tabindex', '0'))

    const onPointerUp = (e) => {
      if (e.pointerType !== 'touch') return
      const card = e.target.closest('.media')
      cards.forEach((m) => {
        if (m !== card) m.classList.remove('is-active')
      })
      if (card) card.classList.toggle('is-active')
    }
    document.addEventListener('pointerup', onPointerUp)
    return () => document.removeEventListener('pointerup', onPointerUp)
  }, [])

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="bg-vignette" />
      <Progress />
      <button className="brand" onClick={toTop} aria-label="FPT University — về đầu trang">
        <img src="/img/logo.png" alt="FPT University" />
      </button>
      <Nav lenis={lenis} />

      <main className="content">
        <Hero lenis={lenis} />
        <Problem />
        <Socialization />
        <Digital />
        <Values />
        <Communication />
        <Data />
        <Findings />
        <Solutions />
        <Conclusion lenis={lenis} />
      </main>
    </>
  )
}
