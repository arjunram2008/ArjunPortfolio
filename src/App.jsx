import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  Menu,
  X,
} from "lucide-react";
import {
  projects,
  experience,
  skills,
  awards,
  profile,
} from "./data/profileData";
import "./App.css";

const ease = [0.22, 1, 0.36, 1];
const MotionPreference = createContext(false);

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useContext(MotionPreference);
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduced ? { duration: 0 } : { duration: 0.85, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Experience", "#experience"],
  ];
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Arjun Ramesh home">
        ar<span className="brand-dot">.</span>
        <span className="brand-caption">
          Arjun Ramesh
          <br />
          Engineer & maker
        </span>
      </a>
      <nav
        className={`navigation ${open ? "is-open" : ""}`}
        id="navigation"
        aria-label="Primary navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Say hello <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const reduced = useContext(MotionPreference);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 18]);
  return (
    <section id="home" ref={ref} className="hero page-width">
      <Reveal className="hero-eyebrow">
        <span className="status-dot" /> Computer Engineering at UC Santa Cruz{" "}
        <span className="edition">Portfolio / 2026</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="hero-name">
          Arjun <em>Ramesh</em>
          <span className="name-period">.</span>
        </h1>
      </Reveal>
      <div className="hero-body">
        <div className="hero-copy">
          <Reveal delay={0.18}>
            <h2>
              Logic, with a little
              <br />
              <em>imagination.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.26}>
            <p>
              I write code, chase questions, and turn ideas into things people
              can use. Currently exploring AI, the web, and the systems
              underneath.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <a className="round-link" href="#work">
              <span className="round-icon">
                <ArrowDown size={21} />
              </span>{" "}
              Explore my work
            </a>
          </Reveal>
        </div>
        <motion.div
          className="hero-art"
          style={reduced ? {} : { y, rotate }}
          aria-hidden="true"
        >
          <img src="/images/orbit.svg" alt="" fetchPriority="high" />
          <span className="art-coordinate">
            FIG. 01 / A CHANGE IN PERSPECTIVE
          </span>
        </motion.div>
      </div>
      <div className="hero-footer">
        <span>Based in California</span>
        <span>Research. Code. A good eye.</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

function Project({ project, index }) {
  const ref = useRef(null);
  const reduced = useContext(MotionPreference);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.08]);
  return (
    <article
      className={`project project-${project.id}`}
      ref={ref}
      id={project.id}
    >
      <div className="project-image">
        <motion.img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          style={reduced ? {} : { y, scale }}
        />
        <div className="image-topline">
          <span>Selected work / 0{index + 1}</span>
          <span>{project.year}</span>
        </div>
        <span className="image-caption">Original project illustration</span>
      </div>
      <div className="project-copy">
        <Reveal>
          <span className="eyebrow">{project.category}</span>
          <h3>{project.title}</h3>
          <p className="project-deck">{project.deck}</p>
          <p>{project.description}</p>
        </Reveal>
        <Reveal>
          <div className="project-metric">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
          </div>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
        <details className="project-details">
          <summary>
            Behind the work <Plus size={18} />
          </summary>
          <p>{project.detail}</p>
        </details>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section
      className="work page-width"
      id="work"
      aria-labelledby="work-heading"
    >
      <Reveal className="section-heading">
        <span className="eyebrow">01 / Selected work</span>
        <h2 id="work-heading">
          Ideas out
          <br />
          in the <em>world.</em>
        </h2>
        <p>
          A few things I’ve helped build.
          <br />
          Each one taught me something different.
        </p>
      </Reveal>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ImageRibbon() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const reduced = useContext(MotionPreference);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const moveGallery = (direction) => {
    const section = ref.current;
    if (window.matchMedia("(max-width:760px)").matches) {
      trackRef.current.scrollBy({
        left:
          direction *
          (trackRef.current.querySelector("figure").clientWidth + 20),
        behavior: reduced ? "instant" : "smooth",
      });
    } else {
      const start = section.offsetTop;
      const length = section.offsetHeight - window.innerHeight;
      const current = Math.round(
        Math.max(0, Math.min(1, (window.scrollY - start) / length)) * 2,
      );
      const next = Math.max(0, Math.min(2, current + direction));
      window.scrollTo({
        top: start + (length * next) / 2,
        behavior: reduced ? "instant" : "smooth",
      });
    }
  };
  useEffect(() => {
    const measure = () =>
      setDistance(
        Math.max(0, trackRef.current.scrollWidth - ref.current.clientWidth),
      );
    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);
    observer.observe(trackRef.current);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <section
      className={`ribbon-section ${reduced ? "motion-off" : ""}`}
      ref={ref}
      aria-label="Life beyond the screen"
    >
      <div className="ribbon-sticky">
        <div className="ribbon-heading page-width">
          <span className="eyebrow">A few other sides of me</span>
          <h2>
            Life beyond
            <br />
            the <em>screen.</em>
          </h2>
          <span className="ribbon-hint">
            Keep scrolling <ArrowDown size={16} />
          </span>
          <div className="ribbon-controls">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => moveGallery(-1)}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => moveGallery(1)}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <motion.div
          className="ribbon-track"
          ref={trackRef}
          style={reduced ? {} : { x }}
        >
          <figure>
            <img
              src="/images/landscape.svg"
              alt="An abstract green landscape with a rising sun"
              loading="lazy"
            />
            <figcaption>
              <span>01 / The outdoors</span>
              <h3>Leave it better.</h3>
              <p>Eagle Scout. A habit of showing up and helping out.</p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/images/music.svg"
              alt="Sculptural rhythm lines in a deep blue field"
              loading="lazy"
            />
            <figcaption>
              <span>02 / Carnatic music</span>
              <h3>Listen. Then improvise.</h3>
              <p>20+ vocal performances. A different kind of practice.</p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/images/discipline.svg"
              alt="Balanced geometric forms in warm vermilion"
              loading="lazy"
            />
            <figcaption>
              <span>03 / Taekwondo</span>
              <h3>Teach what you learn.</h3>
              <p>4+ years of instruction. Patience, repeated.</p>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      className="about page-width"
      id="about"
      aria-labelledby="about-heading"
    >
      <span className="eyebrow">02 / A little context</span>
      <div className="about-content">
        <Reveal>
          <h2 id="about-heading">
            I like the moment
            <br />
            an idea <em>starts to work.</em>
          </h2>
        </Reveal>
        <div className="about-text">
          <Reveal>
            <p>
              A car finds its line. A fundraiser finds its audience. An
              interface makes something complicated feel simple. Those are the
              moments I build for.
            </p>
            <p>
              I’m working toward a B.S. in Computer Engineering at UC Santa
              Cruz, with graduation expected in June 2030. At RANDLab, I study
              how internet censorship shows up in network traffic. Elsewhere, I
              build AI features, shape interfaces, and bring people together to
              make things.
            </p>
            <a
              className="text-link"
              href="/Arjun-Ramesh-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
      <div className="toolkit">
        <span className="eyebrow">Tools I work with</span>
        {skills.map((group) => (
          <div key={group.category}>
            <h3>{group.category}</h3>
            <p>{group.items.join(" / ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [expanded, setExpanded] = useState("randlab");
  return (
    <section
      className="experience page-width"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <Reveal className="experience-heading">
        <span className="eyebrow">03 / Along the way</span>
        <h2 id="experience-heading">
          Learning by
          <br />
          <em>doing.</em>
        </h2>
      </Reveal>
      <div className="experience-list">
        {experience.map((item) => (
          <div
            className={`experience-item ${expanded === item.id ? "expanded" : ""}`}
            key={item.id}
          >
            <h3>
              <button
                type="button"
                aria-expanded={expanded === item.id}
                aria-controls={`experience-${item.id}`}
                onClick={() =>
                  setExpanded(expanded === item.id ? null : item.id)
                }
              >
                <span className="experience-date">{item.dates}</span>
                <span className="experience-company">
                  {item.company}
                  <span>{item.title}</span>
                </span>
                {expanded === item.id ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>
            </h3>
            <div
              id={`experience-${item.id}`}
              className="experience-description"
              hidden={expanded !== item.id}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Reveal className="recognition">
        <span className="eyebrow">Recognition</span>
        <div>
          {awards.map((award) => (
            <p key={award.name}>
              <span>{award.name}</span>
              <span>{award.result}</span>
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact({ onToggleMotion, motionLocked }) {
  const reduced = useContext(MotionPreference);
  return (
    <footer className="contact" id="contact">
      <div className="page-width">
        <Reveal>
          <span className="eyebrow">04 / What’s next?</span>
          <h2>
            Have a good
            <br />
            <em>question?</em>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Arjun"
              className="contact-arrow"
            >
              <ArrowUpRight />
            </a>
          </h2>
          <div className="contact-bottom">
            <p>
              I’m always up for an interesting problem,
              <br />a new collaboration, or a conversation.
            </p>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight size={19} />
            </a>
          </div>
        </Reveal>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} Arjun Ramesh</span>
          <div>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="#home">
              Back to top <ArrowUpRight size={14} />
            </a>
          </div>
          <span>Made with a little imagination.</span>
          <button
            className="motion-toggle"
            type="button"
            onClick={onToggleMotion}
            disabled={motionLocked}
          >
            {motionLocked
              ? "Motion reduced"
              : reduced
                ? "Restore motion"
                : "Reduce motion"}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const systemReduced = useReducedMotion();
  const [motionPaused, setMotionPaused] = useState(false);
  const reduced = systemReduced || motionPaused;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      anchors: { offset: -95 },
    });
    return () => lenis.destroy();
  }, [reduced]);
  return (
    <MotionPreference.Provider value={reduced}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reduced ? scrollYProgress : scaleX }}
        aria-hidden="true"
      />
      <Navigation />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <ImageRibbon />
        <Experience />
      </main>
      <Contact
        onToggleMotion={() => setMotionPaused((paused) => !paused)}
        motionLocked={systemReduced}
      />
    </MotionPreference.Provider>
  );
}
