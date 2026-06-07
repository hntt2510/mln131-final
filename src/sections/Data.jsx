import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { ShareDonut, AlphaBars } from '../components/Charts'
import { sampleStats, charts } from '../data/content'

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

        <div className="chart-grid">
          <Reveal className="chart-card">
            <h4>Khu vực sinh sống</h4>
            <ShareDonut data={charts.area} colors={['#38bdf8', 'rgba(255,255,255,0.08)']} />
          </Reveal>
          <Reveal delay={1} className="chart-card">
            <h4>Nhóm tuổi 19–22</h4>
            <ShareDonut data={charts.age} colors={['#8b5cf6', 'rgba(255,255,255,0.08)']} />
          </Reveal>
          <Reveal delay={2} className="chart-card">
            <h4>Dùng Internet ≥ 3 giờ/ngày</h4>
            <ShareDonut data={charts.usage} colors={['#22d3ee', 'rgba(255,255,255,0.08)']} />
          </Reveal>
        </div>

        <Reveal className="chart-card wide">
          <h4>Độ tin cậy thang đo — Cronbach's Alpha</h4>
          <div className="hint">Tất cả thang đo đều &gt; 0.8 (độ tin cậy cao)</div>
          <AlphaBars data={charts.reliability} />
        </Reveal>
      </div>
    </section>
  )
}
