import Reveal from '../components/Reveal'
import { dialogueSteps, communicationImpact, communicationEmphasis } from '../data/content'

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

        <Reveal className="emphasis">
          <span className="quote-mark">“</span>
          {communicationEmphasis}
        </Reveal>

        <div className="timeline">
          {dialogueSteps.map((s, i) => (
            <Reveal key={s.no} delay={i} className="tl-step">
              <div className="tl-dot">
                <span className="tl-ico">{s.icon}</span>
              </div>
              <div className="tl-body">
                <span className="tl-no">Bước {s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="comm-grid">
          <Reveal className="media">
            <img src="/img/fam2.jpg" alt="Bàn tay các thế hệ đặt chồng lên nhau" loading="lazy" />
            <div className="cap">
              <b>Lắng nghe → Giải thích → Thương lượng</b> · sự kết nối bắt đầu từ thấu hiểu
            </div>
          </Reveal>
          <Reveal delay={1} className="impact">
            <div className="beta">{communicationImpact.beta}</div>
            <div className="meta">
              <b>{communicationImpact.text}</b>
              <span className="p">{communicationImpact.p}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
