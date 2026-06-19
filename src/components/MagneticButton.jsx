import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const styles = {
  primary:
    'bg-frost text-midnight shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_18px_52px_rgba(124,109,255,0.30)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.28),0_22px_70px_rgba(37,216,255,0.22)]',
  secondary:
    'border border-white/10 bg-white/[0.055] text-frost hover:border-white/20 hover:bg-white/[0.09]',
  ghost:
    'border border-white/10 bg-transparent text-muted hover:border-cyan/40 hover:text-frost',
}

export default function MagneticButton({ href, children, variant = 'secondary', className = '', external = false, icon: Icon }) {
  const reduceMotion = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.35 })
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.35 })

  function onMouseMove(event) {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - rect.left - rect.width / 2) * 0.16)
    rawY.set((event.clientY - rect.top - rect.height / 2) * 0.16)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-300 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />}
    </motion.a>
  )
}
