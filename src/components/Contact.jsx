import { ArrowUpRight, ExternalLink, Mail, MapPin, Send } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import MagneticButton from './MagneticButton'
import { profile } from '../data/profileData'

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="px-5 pb-16 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 font-mono text-xs uppercase tracking-[0.22em] text-cyan">Contact</p>
              <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-frost sm:text-5xl lg:text-6xl">
                Let’s build something useful, polished, and ambitious.
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted">
                Open to internships, collaborations, hackathon teams, product-building opportunities, and conversations around AI, web, accessibility, design, and social-impact technology.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href={`mailto:${profile.email}`} variant="primary" icon={Send}>
                  Email Arjun
                </MagneticButton>
                <MagneticButton href={profile.linkedin} variant="secondary" external icon={ExternalLink}>
                  View My Profile
                </MagneticButton>
              </div>
            </div>

            <div className="grid gap-3">
              <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:border-cyan/40 hover:bg-white/[0.08]">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-frost">Email</span>
                    <span className="block truncate text-sm text-muted">{profile.email}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" aria-hidden="true" />
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:border-cyan/40 hover:bg-white/[0.08]">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-frost">LinkedIn</span>
                    <span className="block truncate text-sm text-muted">linkedin.com/in/arjun-ramesh-b19481288</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.045] p-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-frost">Location</span>
                  <span className="block text-sm text-muted">{profile.location}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Built with React, Tailwind CSS, Framer Motion, and Lucide React.</p>
          <a href="#home" className="font-medium text-frost transition hover:text-cyan">Back to top ↑</a>
        </footer>
      </div>
    </AnimatedSection>
  )
}
