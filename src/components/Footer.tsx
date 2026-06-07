import { ArrowUpRight } from 'lucide-react'
import { footer } from '../data/content'
import Button from './Button'
import FadeIn from './FadeIn'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 py-12">
      <FadeIn delay={0.1} className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <Button href="#hero">{footer.cta}</Button>

        <div className="flex items-start gap-6">
          <ArrowUpRight className="mt-1 h-5 w-5 text-[#051A24]" />
          <div className="flex gap-12">
            {footer.columns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-base text-[#051A24] transition hover:opacity-70"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
