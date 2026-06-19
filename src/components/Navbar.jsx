import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profileData'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-midnight/68 backdrop-blur-2xl"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="group inline-flex items-center gap-3" aria-label="Arjun Ramesh home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-halo transition duration-300 group-hover:border-cyan/40">
            <Sparkles className="h-5 w-5 text-cyan" aria-hidden="true" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-[-0.02em] text-frost">{profile.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-muted">AI • Web • Design</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted transition duration-300 hover:text-frost"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-electric via-cyan to-aurora transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-frost transition duration-300 hover:border-cyan/40 hover:bg-white/[0.08]"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-frost md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="border-t border-white/[0.07] bg-midnight/96 px-5 py-4 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-frost"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
