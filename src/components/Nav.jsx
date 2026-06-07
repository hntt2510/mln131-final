import { useEffect, useState } from 'react'
import { navItems } from '../data/content'
import './nav.css'

export default function Nav({ lenis }) {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    setOpen(false)
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.3 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button
        className={`nav-toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${open ? 'is-open' : ''}`}>
        <ul>
          {navItems.map((n, i) => (
            <li key={n.id}>
              <button
                className={active === n.id ? 'active' : ''}
                onClick={() => go(n.id)}
              >
                <span className="dot" />
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="txt">{n.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
