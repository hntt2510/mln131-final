import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { sampleStats, reliability } from '../data/content'

export default function Data() {
  return (
    <section id="data" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">05 · Dữ liệu nghiên cứu</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Bằng chứng từ <span className="grad-text">164 người trẻ</span></h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Thiết kế hỗn hợp: khảo sát định lượng làm trọng tâm, 7 cặp gia đình phỏng vấn bổ trợ
              chiều sâu.
            </p>
          </Reveal>
        </div>

        <div className="stat-grid">
          {sampleStats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="stat">
              <div className="num"><Counter value={s.value} /></div>
              <div className="lab">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="reliab">
          <h3>Độ tin cậy thang đo</h3>
          <div className="hint">Cronbach's Alpha — tất cả thang đo đều &gt; 0.8 (độ tin cậy cao)</div>
          {reliability.map((r, i) => (
            <div className="bar-row" key={r.code}>
              <div className="name">
                {r.code}
                <small>{r.name}</small>
              </div>
              <div className="bar-track">
                <motion.div
                  className="bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(r.alpha / 1) * 100}%` }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="val">{r.alpha.toFixed(3)}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
