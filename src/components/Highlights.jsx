import { Award, BadgeCheck, Gem, HandHeart } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { awards, certifications, highlights } from '../data/profileData'

const icons = [Award, BadgeCheck, Gem, HandHeart]

export default function Highlights() {
  return (
    <AnimatedSection id="highlights" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Highlights"
          title="Awards, certifications, and proof points."
          subtitle="A polished snapshot of the achievements listed on LinkedIn — formatted for fast recruiter scanning."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <AnimatedCard key={item.label} className="p-6 text-center" delay={index * 0.06}>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-4xl font-semibold tracking-[-0.07em] text-gradient">{item.metric}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-[-0.035em] text-frost">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
              </AnimatedCard>
            )
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <AnimatedCard className="p-6">
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-frost">Awards & honors</h3>
            <ul className="mt-5 grid gap-3">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-muted">
                  <Award className="mt-0.5 h-4 w-4 flex-none text-cyan" aria-hidden="true" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard className="p-6" delay={0.08}>
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-frost">Certifications</h3>
            <ul className="mt-5 grid gap-3">
              {certifications.map((certification) => (
                <li key={certification} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-muted">
                  <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-cyan" aria-hidden="true" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </div>
      </div>
    </AnimatedSection>
  )
}
