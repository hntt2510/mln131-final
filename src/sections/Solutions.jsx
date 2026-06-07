import Reveal from '../components/Reveal'
import { solutions, familyPairs } from '../data/content'

export default function Solutions() {
  return (
    <section id="solutions" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">07 · Giải pháp</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Ba cấp độ <span className="grad-text">giảm mâu thuẫn</span></h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Không cấm đoán hay kiểm soát, mà chuyển từ kiểm soát hành vi sang hiểu mục đích.
            </p>
          </Reveal>
        </div>

        <div className="sol-grid">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i} className="sol">
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="pairs">
          <h3>Insight từ 7 cặp gia đình</h3>
          <div className="hint">Vuốt ngang để xem các tình huống thực tế →</div>
          <div className="pair-track">
            {familyPairs.map((p) => (
              <div className="pair" key={p.id}>
                <div className="id">{p.id}</div>
                <div className="row">
                  <span className="k">Điểm căng</span>
                  {p.valueGap}
                </div>
                <div className="row">
                  <span className="k">Ví dụ</span>
                  {p.example}
                </div>
                <div className="row fix">
                  <span className="k">Hướng giải quyết</span>
                  {p.fix}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
