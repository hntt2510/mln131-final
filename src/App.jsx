import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Scene from './three/Scene'
import Nav from './components/Nav'
import Progress from './components/Progress'
import { scrollState } from './store/scroll'
import './sections/sections.css'

import Hero from './sections/Hero'
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

    l.on('scroll', ({ progress, velocity }) => {
      scrollState.progress = progress ?? 0
      scrollState.velocity = velocity ?? 0
    })

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

  return (
    <>
      <Scene />
      <div className="bg-vignette" />
      <Progress />
      <Nav lenis={lenis} />

      <main className="content">
        <Hero lenis={lenis} />
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
