import Reveal from '../components/Reveal'
import { conclusion, team, meta } from '../data/content'

export default function Conclusion({ lenis }) {
  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="conclusion" className="section conclusion">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            08 · Kết luận
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="lead2 grad-text">{conclusion.lead}</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="body2">{conclusion.body}</p>
        </Reveal>
        <Reveal delay={3}>
          <div className="key-line">🔑 {conclusion.key}</div>
        </Reveal>

        <Reveal delay={2} className="media media-center">
          <img src="/img/fam4.jpg" alt="Gia đình cùng nhau bước trên con đường" loading="lazy" />
          <div className="cap">
            Đồng hành thay vì đối đầu — <b>cùng nhau bước tiếp</b>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="team">
            {team.map((m) => (
              <div className="member" key={m.id}>
                <b>{m.name}</b>
                <span>{m.id}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <button className="btn btn-ghost" onClick={toTop}>↑ Về đầu trang</button>
        </Reveal>

        <Reveal delay={3}>
          <p className="foot">
            {meta.org} · {meta.course} · GVHD {meta.instructor}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
