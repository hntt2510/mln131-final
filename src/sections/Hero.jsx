import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { meta } from '../data/content'

export default function Hero({ lenis }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.5])
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.92])
  const textY = useTransform(scrollYProgress, [0, 0.6], reduce ? [0, 0] : [0, -70])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const go = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenis) lenis.scrollTo(el, { duration: 1.4 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="hero" className="hero-cine" ref={ref}>
      <motion.div className="hero-bg" style={{ scale, y: bgY }}>
        <img
          src="/img/hero.jpg"
          alt="Một em nhỏ chăm chú nhìn vào màn hình máy tính bảng trong bóng tối"
        />
      </motion.div>
      <motion.div className="hero-overlay" style={{ opacity: overlay }} />
      <div className="hero-grain" aria-hidden="true" />

      <motion.div className="hero-inner" style={{ y: textY, opacity: textOpacity }}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="hero-badge" variants={item}>
            {meta.org} · {meta.course}
          </motion.span>

          <motion.h1 className="hero-title" variants={item}>
            Mâu Thuẫn Thế Hệ
            <br />
            <span className="grad-text">Trong Gia Đình Số</span>
          </motion.h1>

          <motion.p className="hero-sub" variants={item}>
            Khi khoảng cách giữa cha mẹ và con cái không chỉ nằm ở tuổi tác, mà còn nằm trong cách họ
            lớn lên, sử dụng công nghệ và trò chuyện với nhau.
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <button className="btn btn-primary" onClick={() => go('problem')}>
              Khám phá nghiên cứu
            </button>
            <button className="btn btn-ghost" onClick={() => go('findings')}>
              Xem kết quả chính
            </button>
          </motion.div>

          <motion.div className="hero-micro" variants={item}>
            164 mẫu khảo sát <span>•</span> 7 cặp gia đình phỏng vấn <span>•</span> MLN311
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="scroll-hint">
        <span className="mouse" />
        Cuộn xuống
      </div>
    </section>
  )
}
