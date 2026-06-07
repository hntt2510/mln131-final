import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { valueZones, strongestCorrelation } from '../data/content'

export default function Values() {
  return (
    <section id="values" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">03 · Khác biệt giá trị</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Bốn vùng bất đồng <span className="grad-text">cốt lõi</span></h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Khác biệt điều kiện sống dẫn đến khác biệt giá trị. Bốn chủ đề thường xuyên va chạm
              nhất giữa cha mẹ và con cái.
            </p>
          </Reveal>
        </div>

        <div className="zones">
          {valueZones.map((z, i) => (
            <Reveal key={z.title} delay={i} className="zone">
              <div className="zone-top">
                <span className="ico">{z.icon}</span>
                <h3>{z.title}</h3>
              </div>
              <div className="zone-bar">
                <span className="p">{z.parent}</span>
                <span className="vs" />
                <span className="c">{z.child}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="corr">
          <div className="big">r = <Counter value={strongestCorrelation.r} /></div>
          <div className="cap">{strongestCorrelation.caption}</div>
          <p className="note">{strongestCorrelation.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
