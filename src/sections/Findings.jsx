import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { BetaBars } from '../components/Charts'
import { hypotheses, modelFit, modelFlow, charts } from '../data/content'

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

        {/* Mô hình nghiên cứu */}
        <Reveal className="flow">
          <div className="flow-inputs">
            {modelFlow.inputs.map((n) => (
              <div className="flow-node in" key={n.code}>
                <b>{n.code}</b>
                <span>{n.label}</span>
                <em>{n.b}</em>
              </div>
            ))}
          </div>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <div className="flow-node mediator">
            <b>{modelFlow.mediator.code}</b>
            <span>{modelFlow.mediator.label}</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">
            <em>{modelFlow.link}</em>→
          </div>
          <div className="flow-node outcome">
            <b>{modelFlow.outcome.code}</b>
            <span>{modelFlow.outcome.label}</span>
          </div>
          <div className="flow-mod">
            <span className="mod-tag">Giảm mâu thuẫn</span>
            <b>{modelFlow.moderator.code}</b> · {modelFlow.moderator.label}
            <em>{modelFlow.moderator.b}</em>
          </div>
        </Reveal>

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

        <Reveal className="chart-card wide">
          <h4>Hệ số hồi quy B của các tác động chính</h4>
          <div className="hint">Cột tím = tác động làm tăng · cột xanh = tác động làm giảm mâu thuẫn</div>
          <BetaBars data={charts.beta} />
        </Reveal>

        <Reveal className="fit">
          <div className="r2"><Counter value={modelFit.r2} /></div>
          <p>{modelFit.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
