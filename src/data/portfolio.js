export const profile = {
  name: "Jasdev Singh Virdi",
  firstName: "Jasdev",
  initials: "JSV",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "Backend & Distributed Systems",
    "Full Stack Developer",
  ],
  description:
    "I build reliable backend systems and sharp web products. Right now I work with Erlang/OTP, Kafka and Postgres on warehouse automation — and I ship full-stack apps with React and TypeScript on the side.",
  location: "Bhilai, Chhattisgarh, India",
  availability: "Open to new opportunities",
  email: "jasdevvirdi987@gmail.com",
  phone: "+91 83190 55639",
  github: "https://github.com/Jasdev2910",
  linkedin: "https://www.linkedin.com/in/jasdev-singh-virdi-7386a5194/",
  twitter: "https://twitter.com/JasdevS02812520",
  resume: "/Jasdev_Singh_Resume_2026.pdf",
  image: "/HeroImage.jpg",
  imageCutout: "/HeroImage-cutout.png",
};

export const stats = [
  { value: "30%", label: "faster logistics operations" },
  { value: "40%", label: "less database dependency" },
  { value: "90%+", label: "test coverage" },
  { value: "1.5+", label: "years in industry" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Erlang/OTP", "JavaScript", "TypeScript", "SQL", "Mnesia"],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "Kafka",
      "Redis",
      "Cassandra",
      "PostgreSQL",
      "Prisma",
      "MongooseIM",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Redux Toolkit", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Linux CLI",
      "Docker",
      "Git & GitHub",
      "Pact",
      "Kowl",
      "Postman",
      "Jira",
      "Agile/Scrum",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Scalicon",
    context: "GreyOrange · Warehouse Automation",
    period: "Nov 2025 — Present",
    stack: ["Erlang/OTP", "Kafka", "Mnesia", "PostgreSQL", "Kowl", "Pact"],
    highlights: [
      "Built backend business logic for warehouse automation and outbound workflows in Erlang/OTP, improving critical logistics operations by 30%.",
      "Designed a Kafka-driven event architecture with Pact contract testing, catching breaking cross-service payload changes before they reach production.",
      "Cut database dependency by 40% with Mnesia-backed caching, and shipped two major features for a Walmart deployment plus a new high-throughput site rollout.",
      "Lifted code coverage above 90% through unit and common testing, validating changes with VM-based development and Erlang shell integration tests.",
      "Resolved live-site incidents by tracing failures across distributed services, analysing logs, reproducing issues in VMs and shipping fixes with minimal operational disruption.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Scramble Apps",
    context: "Comera · Chat Platform",
    period: "Apr 2025 — Present",
    stack: ["Erlang", "MongooseIM", "PostgreSQL", "Redis", "Cassandra"],
    highlights: [
      "Delivered phone-number masking for unknown contacts in MongooseIM, strengthening privacy compliance and user trust.",
      "Reduced backend database load by 35% with Redis caching for metadata and sessions, while using Cassandra for low-latency message storage under high traffic.",
      "Enabled cross-domain workspace collaboration, improving enterprise onboarding efficiency by 40%.",
      "Architected a push-notification pipeline from MongooseIM to Android and iOS, alongside AI chat and AI bot-calling capabilities.",
    ],
  },
];

export const projects = [
  {
    title: "Quillist",
    category: "Full Stack",
    featured: true,
    period: "2026",
    description:
      "A full-stack blog platform built with React, TypeScript and serverless Cloudflare functions, backed by Postgres and Prisma with JWT authentication.",
    highlights: [
      "Prisma Accelerate improved connection pooling by 30%.",
      "Published an npm package for Zod validations, raising validation consistency across frontend and backend by 20%.",
    ],
    stack: ["React", "TypeScript", "Cloudflare", "Postgres", "Prisma", "Zod"],
    github: "https://github.com/Jasdev2910/Quillist",
    live: "https://quillist.vercel.app/",
  },
  {
    title: "NetflixGPT",
    category: "Frontend",
    featured: true,
    period: "2023",
    description:
      "An IMDb-style movie discovery platform with detailed information from TMDB and AI-powered, context-aware search using the OpenAI API.",
    highlights: [
      "Built GPT-powered semantic search and Firebase authentication with form validation and data integrity checks.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Firebase", "TMDB API"],
    github: "https://github.com/Jasdev2910/Netflix-GPT",
    live: "https://netflix-gpt-six-tau.vercel.app/",
  },
  {
    title: "Payments App",
    category: "Full Stack",
    period: "2024",
    description:
      "A peer-to-peer payments app with transaction integrity — every transfer either completes fully or not at all.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Jasdev2910/Payments-App",
    live: "",
  },
  {
    title: "Food Hub",
    category: "Frontend",
    period: "2023",
    description:
      "A food ordering UI inspired by Swiggy, with restaurant browsing, cart flows and live API integration.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/Jasdev2910/Food-Hub",
    live: "",
  },
  {
    title: "MERN CRUD App",
    category: "Full Stack",
    period: "2024",
    description:
      "A user management system with a REST API for creating, reading, updating and deleting records.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Jasdev2910/mern-app",
    live: "",
  },
  {
    title: "Keeper App",
    category: "Frontend",
    period: "2023",
    description:
      "A lightweight notes app for creating, organising and deleting notes with a clean React interface.",
    stack: ["React", "CSS"],
    github: "https://github.com/Jasdev2910/Keeper-App",
    live: "",
  },
];

export const education = [
  {
    school: "Chhattisgarh Swami Vivekanand Technical University (CSVTU)",
    degree: "B.Tech, Information Technology",
    period: "Aug 2019 — Jun 2023",
    detail: "CGPA 8.03 · 8th semester 81.7% · Average 76.35%",
    location: "Bhilai, Chhattisgarh",
  },
];

export const certifications = [
  {
    title: "MERN, DevOps & Advanced Backend",
    issuer: "100xDevs",
    period: "2023 — 2024",
  },
  {
    title: "Advanced React & JavaScript",
    issuer: "NamasteDev",
    period: "2023",
  },
  {
    title: "Full Stack Web Development",
    issuer: "The App Brewery",
    period: "2023",
  },
];
