import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { experience } from '../data/profileData'

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatedSection id="experience" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="A timeline of product-building, leadership, and long-term craft."
          subtitle="Professional experience spanning web development, social-impact work, AI systems, and community leadership — presented in clear, impact-focused language."
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" aria-hidden="true" />
          <ol className="grid gap-8">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0
              const direction = reduceMotion ? 0 : isLeft ? -46 : 46
              return (
                <li key={`${item.company}-${item.title}`} className="relative grid gap-5 pl-14 md:grid-cols-[1fr_72px_1fr] md:pl-0">
                  <div className={`${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-3'} ${!isLeft ? 'md:row-start-1' : ''}`}>
                    <motion.article
                      className="glass-panel spotlight-card animated-border rounded-3xl p-5 sm:p-6"
                      onMouseMove={(event) => {
                        const rect = event.currentTarget.getBoundingClientRect()
                        event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
                        event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
                      }}
                      initial={{ opacity: 0, x: direction, y: reduceMotion ? 0 : 18 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      whileHover={reduceMotion ? undefined : { y: -6 }}
                      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative z-10">
                        <div className={`mb-4 flex flex-wrap items-center gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                            {item.category}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted">{item.duration}</span>
                        </div>
                        <h3 className="text-xl font-semibold tracking-[-0.035em] text-frost">{item.title}</h3>
                        <p className="mt-1 text-base font-medium text-muted">{item.company}</p>
                        <div className={`mt-4 flex flex-wrap gap-3 text-sm text-muted ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-4 w-4 text-cyan" aria-hidden="true" /> {item.dates}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-cyan" aria-hidden="true" /> {item.location}
                          </span>
                        </div>
                        <ul className={`mt-5 space-y-3 text-sm leading-6 text-muted ${isLeft ? 'md:ml-auto md:max-w-[92%]' : ''}`}>
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 md:block">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan md:hidden" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  </div>

                  <div className="absolute left-0 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-midnight text-cyan shadow-glow md:static md:col-start-2 md:row-start-1 md:mx-auto md:mt-6">
                    <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  )
}
