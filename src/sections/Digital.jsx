import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { digital } from '../data/content'

export default function Digital() {
  return (
    <section id="digital" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">02 · Môi trường số</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">
              Digital Natives <span className="muted">vs</span>{' '}
              <span className="grad-text">Digital Immigrants</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Cùng một hành vi "dùng điện thoại" được hai thế hệ gán hai ý nghĩa khác nhau. Đó là gốc
              rễ của rất nhiều hiểu lầm (Prensky, 2001).
            </p>
          </Reveal>
        </div>

        <div className="digital-grid">
          <Reveal className="dig-card imm">
            <div className="dig-emoji">📵</div>
            <h3>{digital.immigrants.label}</h3>
            <div className="sub">{digital.immigrants.sub}</div>
            <p className="note">{digital.immigrants.note}</p>
          </Reveal>
          <Reveal delay={1} className="dig-card nat">
            <div className="dig-emoji">📱</div>
            <h3>{digital.natives.label}</h3>
            <div className="sub">{digital.natives.sub}</div>
            <p className="note">{digital.natives.note}</p>
          </Reveal>
        </div>

        <div className="facts">
          {digital.facts.map((f, i) => (
            <Reveal key={f.label} delay={i} className="fact">
              <div className="val"><Counter value={f.value} /></div>
              <div className="lab">{f.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
