import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { hypotheses, modelFit } from '../data/content'

export default function Findings() {
  return (
    <section id="findings" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">06 · Kết quả kiểm định</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Các <span className="grad-text">giả thuyết</span> nói gì?</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Hồi quy tuyến tính trên 5 nhóm biến. Khác biệt giá trị là yếu tố dự báo mạnh nhất; giao
              tiếp cởi mở làm giảm mâu thuẫn.
            </p>
          </Reveal>
        </div>

        <div className="hyp-grid">
          {hypotheses.map((h, i) => (
            <Reveal key={h.id} delay={i % 2} className={`hyp ${h.status}`}>
              <div className="id">{h.id}</div>
              <div className="body">
                <b>{h.text}</b>
                <span className="stat">{h.stat}</span>
                <span className="badge">
                  {h.status === 'accept' ? '✓ Chấp nhận' : '⚠ Chưa đủ bằng chứng'}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="fit">
          <div className="r2"><Counter value={modelFit.r2} /></div>
          <p>{modelFit.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
