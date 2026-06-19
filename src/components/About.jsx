import { BrainCircuit, HeartHandshake, Palette, Trophy } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { profile } from '../data/profileData'

const icons = [BrainCircuit, HeartHandshake, Trophy, Palette]

export default function About() {
  return (
    <AnimatedSection id="about" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="A builder at the intersection of AI, web, design, and service."
          subtitle="Experience and achievements spanning web development, AI/ML projects, design, and community impact work."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedCard className="p-6 sm:p-8">
            <p className="text-pretty text-xl leading-9 tracking-[-0.02em] text-frost sm:text-2xl">{profile.aboutIntro}</p>
            <p className="mt-6 text-base leading-8 text-muted">{profile.aboutCloser}</p>
            <div className="mt-8 rounded-3xl border border-cyan/20 bg-cyan/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Source note</p>
              <p className="mt-3 text-sm leading-6 text-muted">{profile.sourceNote}</p>
            </div>
          </AnimatedCard>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {profile.themes.map((theme, index) => {
              const Icon = icons[index % icons.length]
              return (
                <AnimatedCard key={theme.title} className="p-5" delay={index * 0.07}>
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-frost">{theme.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{theme.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
