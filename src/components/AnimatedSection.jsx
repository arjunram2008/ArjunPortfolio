import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedSection({ id, className = '', children, delay = 0 }) {
  const reduceMotion = useReducedMotion()
  const distance = reduceMotion ? 0 : 42

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  )
}
