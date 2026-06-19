import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedCard({ children, className = '', delay = 0, as: Element = motion.div }) {
  const reduceMotion = useReducedMotion()

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  return (
    <Element
      onMouseMove={handleMouseMove}
      className={`spotlight-card animated-border glass-panel rounded-3xl ${className}`}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.012 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="relative z-10">{children}</div>
    </Element>
  )
}
