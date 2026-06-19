import { BookOpenText, GraduationCap } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { education } from '../data/profileData'

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Academic path and formal learning."
          subtitle="Formal education, coursework, and structured learning across computer science, languages, and classical studies."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <AnimatedCard key={item.school} className={`p-6 ${item.placeholder ? 'border-dashed border-ember/35 bg-ember/5' : ''}`} delay={index * 0.07}>
              <div className="flex gap-4">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                  {item.placeholder ? <BookOpenText className="h-5 w-5" aria-hidden="true" /> : <GraduationCap className="h-5 w-5" aria-hidden="true" />}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{item.dates}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-frost">{item.school}</h3>
                  <p className="mt-1 text-base font-medium text-muted">{item.degree}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.details}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
