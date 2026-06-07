import { motion } from 'framer-motion'

const variants = {
  hidden: (d) => ({ opacity: 0, y: 36, filter: 'blur(6px)' }),
  show: (d) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: d * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px' }}
    >
      {children}
    </M>
  )
}
