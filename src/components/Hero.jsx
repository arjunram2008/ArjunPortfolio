import { ArrowDown, ExternalLink, Mail, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profileData'
import MagneticButton from './MagneticButton'

const nameWords = profile.name.split(' ')
const headlineParts = profile.headline.split(' • ')

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-hero-glow" />
      <motion.div
        className="absolute left-[6%] top-28 -z-10 h-72 w-72 rounded-full bg-electric/30 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 36, -12, 0], y: [0, -28, 18, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[4%] top-24 -z-10 h-96 w-96 rounded-full bg-cyan/16 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -42, 16, 0], y: [0, 28, -22, 0], scale: [1, 0.94, 1.08, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-aurora/16 blur-3xl"
        animate={reduceMotion ? undefined : { rotate: [0, 18, -12, 0], scale: [1, 1.05, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-sm text-muted shadow-halo backdrop-blur-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="h-4 w-4 text-cyan" aria-hidden="true" />
            <span>LinkedIn-grounded portfolio for recruiters, internships, and collaborators</span>
          </motion.div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.075em] text-frost sm:text-7xl lg:text-[6.8rem]">
            {nameWords.map((word, index) => (
              <motion.span
                key={word}
                className="mr-4 inline-block text-gradient"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 42, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.16 + index * 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Professional headline">
            {headlineParts.map((part, index) => (
              <motion.span
                key={part}
                className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-frost shadow-halo"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.66 + index * 0.09 }}
              >
                {part}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.heroSummary}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton href="#projects" variant="primary" icon={ArrowDown}>
              View Work
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} variant="secondary" icon={Mail}>
              Contact Me
            </MagneticButton>
            <MagneticButton href={profile.linkedin} variant="ghost" external icon={ExternalLink}>
              LinkedIn
            </MagneticButton>
          </motion.div>
        </div>

        <motion.aside
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 40, rotateX: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan/20 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">Portfolio Signal</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-frost">Builder profile</p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Sparkles className="h-6 w-6 text-cyan" aria-hidden="true" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {profile.heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.72 + index * 0.12 }}
                  >
                    <p className="text-3xl font-semibold tracking-[-0.06em] text-frost">{stat.value}</p>
                    <p className="mt-2 text-sm leading-5 text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">Current headline</p>
                <p className="mt-3 text-lg font-semibold leading-7 tracking-[-0.03em] text-frost">{profile.shortHeadline}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
