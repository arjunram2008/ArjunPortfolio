import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-10 ${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && (
        <motion.p
          className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.24em] text-cyan"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-frost sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">{subtitle}</p>}
    </div>
  )
}
