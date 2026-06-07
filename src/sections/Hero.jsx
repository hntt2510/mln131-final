import { motion } from 'framer-motion'
import { meta } from '../data/content'

export default function Hero({ lenis }) {
  const go = (id) => {
    const el = document.getElementById(id)
    if (lenis) lenis.scrollTo(el, { duration: 1.4 })
    else el?.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="section hero">
      <motion.div className="wrap" variants={container} initial="hidden" animate="show">
        <motion.span className="hero-badge" variants={item}>
          {meta.org} · {meta.course}
        </motion.span>

        <motion.h1 variants={item}>
          Mâu thuẫn <span className="grad-text">thế hệ</span>
          <br /> trong gia đình số
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          Khác biệt cha mẹ – con cái là khác biệt tuổi tác hay khác biệt điều kiện xã hội?
        </motion.p>

        <motion.div className="hero-cta" variants={item}>
          <button className="btn btn-primary" onClick={() => go('socialization')}>
            Bắt đầu khám phá
          </button>
          <button className="btn btn-ghost" onClick={() => go('conclusion')}>
            Xem kết luận
          </button>
        </motion.div>

        <motion.div className="hero-meta" variants={item}>
          <span><b>164</b> mẫu khảo sát</span>
          <span><b>7</b> cặp gia đình</span>
          <span>r = <b>0.615</b> tương quan mạnh nhất</span>
        </motion.div>
      </motion.div>

      <div className="scroll-hint">
        <span className="mouse" />
        Cuộn xuống
      </div>
    </section>
  )
}
