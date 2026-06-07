import Reveal from '../components/Reveal'
import { problem } from '../data/content'

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">00 · Vì sao mâu thuẫn xảy ra?</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">
              Cùng một hành vi, <span className="grad-text">hai cách hiểu</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Phần lớn mâu thuẫn không bắt đầu từ bản thân hành vi, mà từ ý nghĩa mà mỗi thế hệ gán
              cho hành vi đó.
            </p>
          </Reveal>
        </div>

        <Reveal className="behavior-chip">
          <span className="bc-ico">📱</span>
          {problem.behavior}
        </Reveal>

        <div className="split">
          <Reveal className="persp parent">
            <div className="persp-head">
              <span className="pico">{problem.parent.icon}</span>
              <h3>{problem.parent.label}</h3>
            </div>
            <ul>
              {problem.parent.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1} className="persp child">
            <div className="persp-head">
              <span className="pico">{problem.child.icon}</span>
              <h3>{problem.child.label}</h3>
            </div>
            <ul>
              {problem.child.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="insight-line">{problem.insight}</Reveal>
      </div>
    </section>
  )
}
