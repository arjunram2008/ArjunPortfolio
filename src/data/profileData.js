// Content source: ArjunResumeSC4.pdf, supplied by Arjun on October 3, 2026.
export const profile = {
  name: "Arjun Ramesh",
  email: "arjunramesh8002@gmail.com",
  github: "https://github.com/arjunram2008",
  linkedin: "https://www.linkedin.com/in/arjun-ramesh-b19481288",
};

export const projects = [
  {
    id: "true-fit",
    title: "True Fit",
    category: "AI / Commerce / Interaction",
    year: "2025",
    image: "/images/truefit.svg",
    alt: "An editorial visual study of fashion discovery, with a sculptural garment and connected recommendation nodes",
    deck: "A better way to find your fit.",
    description:
      "I connected language models to the shopping experience, then built the interfaces that let people explore. Eight MCP tools, four recommendation features, and interactive views across more than 50 products.",
    metric: "25%",
    metricLabel: "improvement in clothing-discovery personalization",
    tags: ["LLM integration", "MCP", "Three.js", "UI/UX"],
    detail:
      "As an AI/ML Engineer from July to November 2025, I integrated eight MCP tools with application data and services. Four LLM-powered features tailored recommendations to shopper preferences, while responsive Three.js interfaces supported interactive clothing exploration.",
  },
  {
    id: "helpinghands",
    title: "HelpingHands",
    category: "Full stack / Community / Design",
    year: "2023 to now",
    image: "/images/helpinghands.svg",
    alt: "A warm green visual study with interlocking forms symbolizing community and a small fundraising interface illustration",
    deck: "Small actions. More possibility.",
    description:
      "A crowdfunding platform for underprivileged children in Chennai. I developed 17 web and mobile workflows to make finding a cause and supporting it feel straightforward.",
    metric: "$3,000+",
    metricLabel: "raised with help from the platform",
    tags: ["Full-stack development", "Web & mobile", "Fundraising UX"],
    detail:
      "Since August 2023, my work has combined full-stack engineering and UI/UX across cause-specific fundraising flows. The aim is simple: help people understand a cause, take action, and see where their support goes.",
  },
  {
    id: "roar",
    title: "Finding the line",
    category: "Autonomous systems / Simulation",
    year: "2025",
    image: "/images/racing.svg",
    alt: "An overhead illustration of a racing circuit with an autonomous vehicle, a waypoint path, and telemetry markings",
    deck: "An autonomous agent. A thousand small corrections.",
    description:
      "For UC Berkeley’s ROAR competition, I built a Python driving agent in CARLA. Waypoint navigation, PID tuning, and live telemetry helped it stay on the Monza v1.1 track.",
    metric: "30%",
    metricLabel: "fewer off-track incidents after tuning",
    tags: ["Python", "CARLA", "PID control", "Telemetry"],
    detail:
      "Built in June and July 2025. I used telemetry to understand where the agent lost stability, then adjusted the PID controller to reduce off-track incidents. The project turned control theory into something I could watch, measure, and improve lap by lap.",
  },
];

export const experience = [
  {
    id: "randlab",
    company: "RANDLab, UC Santa Cruz",
    title: "Undergraduate Researcher",
    dates: "Sep. 2026 to present",
    description:
      "I investigate censorship devices across 23+ countries through network measurement and traffic analysis, looking for signs of connection tampering and deep packet inspection.",
  },
  {
    id: "acm",
    company: "ACM, UC Santa Cruz",
    title: "Lead Hackathon Coordinator",
    dates: "Oct. 2026 to present",
    description:
      "I coordinate logistics, technical programming, and outreach for 100+ participants and 30+ teams at a hackathon sponsored by Cisco, Google, and Baskin Engineering. With ACM officers and mentors, I’ve also hosted 30+ technical workshops.",
  },
  {
    id: "truefit",
    company: "True Fit",
    title: "AI/ML Engineer",
    dates: "Jul. to Nov. 2025",
    description:
      "I integrated eight MCP tools, built four LLM-powered recommendation features, and developed responsive Three.js interfaces across 50+ product views. The work improved clothing-discovery personalization by 25%.",
  },
  {
    id: "helpinghands",
    company: "HelpingHands",
    title: "Web Developer",
    dates: "Aug. 2023 to present",
    description:
      "I develop the web and mobile experience for a crowdfunding platform supporting underprivileged children in Chennai. Seventeen workflows and $3,000+ raised connect the engineering work to a tangible community outcome.",
  },
];

export const skills = [
  {
    category: "Languages & web",
    items: [
      "Python",
      "JavaScript",
      "C++",
      "MATLAB",
      "HTML/CSS",
      "React",
      "Node.js",
    ],
  },
  {
    category: "AI & systems",
    items: [
      "LLMs",
      "MCP",
      "Neural networks",
      "Claude",
      "Prompt engineering",
      "Raspberry Pi",
      "CARLA",
      "PID control",
    ],
  },
  {
    category: "Design & development",
    items: [
      "UI/UX",
      "Full-stack development",
      "Interactive interfaces",
      "Waypoint navigation",
    ],
  },
];

export const awards = [
  { name: "Berkeley ANova Hacks", result: "Best Website" },
  { name: "LancerHacks VII", result: "3rd Place" },
  { name: "Milpitas Hacks", result: "CodeForCause" },
  { name: "HackaKhan", result: "Finalist / Best UI/UX" },
];
