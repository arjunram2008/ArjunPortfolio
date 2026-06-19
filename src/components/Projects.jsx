import { ArrowUpRight, Boxes, Cpu, Sparkles } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import { projects } from '../data/profileData'

const icons = [Sparkles, Boxes, Cpu, ArrowUpRight]

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-pad px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Project cards shaped from real work."
          subtitle="A selection of recent and ongoing projects spanning web development, AI systems, game design, and accessibility work. Links and details available upon request."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = icons[index % icons.length]
            return (
              <AnimatedCard key={project.title} className="group min-h-[22rem] p-6" delay={index * 0.06}>
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan transition duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{project.kicker}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.045em] text-frost">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-frost/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-muted">
                      <span>No public link listed yet</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
