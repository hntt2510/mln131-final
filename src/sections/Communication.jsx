import Reveal from '../components/Reveal'
import { dialogueSteps, communicationImpact } from '../data/content'

export default function Communication() {
  return (
    <section id="communication" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">04 · Giao tiếp gia đình</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Giải pháp là <span className="grad-text">giao tiếp cởi mở</span></h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Cách chúng ta nói về sự khác biệt quan trọng hơn bản thân sự khác biệt. Ba bước biến
              đối đầu thành thương lượng.
            </p>
          </Reveal>
        </div>

        <div className="steps">
          {dialogueSteps.map((s, i) => (
            <Reveal key={s.no} delay={i} className="step">
              <span className="no">{s.no}</span>
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="impact">
          <div className="beta">{communicationImpact.beta}</div>
          <div className="meta">
            <b>{communicationImpact.text}</b>
            <span className="p">{communicationImpact.p}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
