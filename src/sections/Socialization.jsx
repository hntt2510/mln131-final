import Reveal from '../components/Reveal'
import { socialization } from '../data/content'

function GenCard({ gen, delay }) {
  return (
    <Reveal delay={delay} className={`gen-card ${gen.tone}`}>
      <div className="gen-head">
        <div className="gen-ico">{gen.icon}</div>
        <div>
          <h3>{gen.label}</h3>
          <span className="tag">{gen.tone === 'parent' ? 'Lớn lên trước thời số hóa' : 'Lớn lên cùng Internet'}</span>
        </div>
      </div>
      <ul className="gen-list">
        {gen.items.map((it) => (
          <li key={it.text}>
            <span className="li-ico">{it.icon}</span>
            <span>{it.text}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function Socialization() {
  return (
    <section id="socialization" className="section">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">01 · Điều kiện xã hội hóa</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h-lg">Hai thế hệ, <span className="grad-text">hai bối cảnh lớn lên</span></h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">
              Theo Mannheim (1952), thế hệ không chỉ khác nhau về tuổi sinh học mà còn bởi trải
              nghiệm lịch sử – xã hội. Cha mẹ và con cái được xã hội hóa trong hai thế giới khác nhau.
            </p>
          </Reveal>
        </div>

        <div className="versus">
          <GenCard gen={socialization.parent} delay={0} />
          <div className="vs-mid">
            <div className="vs-line" />
            <span className="vs-bolt">VS</span>
            <div className="vs-line" />
          </div>
          <GenCard gen={socialization.child} delay={1} />
        </div>

        <Reveal className="media media-center">
          <img src="/img/fam3.jpg" alt="Hai thế hệ đối diện nhau" loading="lazy" />
          <div className="cap">
            Hai thế hệ <b>đối diện nhau</b> — khác biệt không nằm ở tuổi tác, mà ở bối cảnh lớn lên
          </div>
        </Reveal>
      </div>
    </section>
  )
}
