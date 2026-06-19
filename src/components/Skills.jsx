import { Bot, Code2, Languages, Palette, ShieldCheck, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { skills } from '../data/profileData'

const categoryIcons = [ShieldCheck, Bot, Code2, Palette, UsersRound, Languages]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
}

const badge = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="A practical toolkit: technical, creative, and leadership-oriented."
          subtitle="Featured competencies spanning AI/ML, web development, design, product leadership, languages, and creative disciplines."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = categoryIcons[index % categoryIcons.length]
            return (
              <AnimatedCard key={group.category} className="p-6" delay={index * 0.05}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-frost">{group.category}</h3>
                </div>

                <motion.div className="flex flex-wrap gap-2.5" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={badge}
                      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-sm font-medium text-frost shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-cyan/40 hover:bg-cyan/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
