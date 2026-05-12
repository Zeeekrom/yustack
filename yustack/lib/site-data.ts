export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  signal: string;
  stack: string[];
  outcomes: string[];
  nextSteps: string[];
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "cyber-finance-city",
    title: "Cyber Finance City",
    type: "UE5 / AI / Simulation",
    description:
      "An interactive finance-city concept combining game systems, cyberpunk worldbuilding, and scenario-driven user interaction.",
    signal: "Shows interactive systems thinking beyond standard web apps.",
    stack: ["UE5", "Blueprints", "AI Systems", "Interactive Design"],
    outcomes: [
      "Built a stronger bridge between finance concepts and interactive product design.",
      "Created a project story that can support both game technology and AI product roles.",
      "Established a flagship project for the interactive systems side of YuStack.",
    ],
    nextSteps: [
      "Publish screenshots or a short gameplay clip.",
      "Write a technical breakdown on systems, interaction loops, and AI opportunities.",
      "Connect the project page to a future AI demo or simulation dashboard.",
    ],
  },
  {
    slug: "ai-npc-prototype",
    title: "AI NPC Prototype",
    type: "AI / FastAPI / Gameplay",
    description:
      "A conversational NPC experiment using backend AI services to explore richer player interaction loops.",
    signal: "Connects AI integration with real-time product experience.",
    stack: ["FastAPI", "LLM API", "Prompt Design", "Gameplay Systems"],
    outcomes: [
      "Turned AI experimentation into a product-facing interaction pattern.",
      "Built a natural bridge from UE5 work toward web-based AI assistants.",
      "Prepared the foundation for a future RAG-backed YuStack AI demo.",
    ],
    nextSteps: [
      "Document the conversation flow and backend API contract.",
      "Add a small web demo for prompt, response, and memory behavior.",
      "Compare game NPC use cases with portfolio assistant use cases.",
    ],
  },
  {
    slug: "claw-internship",
    title: "CLAW Internship",
    type: "Information Systems / Delivery",
    description:
      "Practical business and systems work focused on documentation, delivery flow, and stakeholder communication.",
    signal: "Gives the portfolio a professional systems narrative.",
    stack: ["Business Analysis", "Documentation", "Process Mapping"],
    outcomes: [
      "Connected technical work with business communication and delivery constraints.",
      "Practiced translating unclear requirements into usable system notes.",
      "Added professional context beyond classroom projects.",
    ],
    nextSteps: [
      "Add anonymized process artifacts if allowed.",
      "Write a short case note about systems thinking and delivery communication.",
      "Map the internship skills to full-stack product delivery.",
    ],
  },
  {
    slug: "pmp-learning-track",
    title: "PMP Learning Track",
    type: "Project Management",
    description:
      "A structured project-management learning thread mapped to software delivery and cross-functional execution.",
    signal: "Supports cloud and DevOps work with delivery discipline.",
    stack: ["Project Planning", "Risk", "Stakeholders", "Delivery"],
    outcomes: [
      "Strengthened the non-coding side of engineering delivery.",
      "Built vocabulary for planning, risk, scope, and stakeholder tradeoffs.",
      "Made YuStack easier to explain as a managed long-term project.",
    ],
    nextSteps: [
      "Create a public roadmap page for YuStack phases.",
      "Track milestones and scope decisions as project-management evidence.",
      "Connect delivery notes to GitHub issues once the repo is published.",
    ],
  },
  {
    slug: "web-database-project",
    title: "Web Database Project",
    type: "Full Stack / Data",
    description:
      "A database-backed web project foundation for SQL, API design, and future dashboard features.",
    signal: "The bridge toward Supabase, PostgreSQL, and analytics.",
    stack: ["SQL", "API Design", "PostgreSQL", "Data Modeling"],
    outcomes: [
      "Prepared the strongest path from portfolio site to full-stack platform.",
      "Created a natural reason to introduce Supabase and analytics later.",
      "Supports the data and BI side of the career story.",
    ],
    nextSteps: [
      "Design the first PostgreSQL schema for project and blog analytics.",
      "Add a simple dashboard after Vercel deployment is stable.",
      "Write an article about database choices for YuStack.",
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "why-yustack-is-more-than-a-portfolio",
    title: "Why YuStack Is More Than a Portfolio",
    category: "Career System",
    date: "2026-05-12",
    summary:
      "The project strategy: combine full-stack, AI, cloud, data, and interactive systems into one coherent technical platform.",
    sections: [
      {
        heading: "The problem",
        body: "A normal portfolio only lists work. YuStack is designed to prove engineering range by becoming the container for projects, writing, demos, deployment, and future backend services.",
      },
      {
        heading: "The positioning",
        body: "The platform connects web development with AI, data, cloud, and interactive systems. That makes it easier to explain a background that includes UE5, FastAPI, information systems, and project delivery.",
      },
      {
        heading: "The first milestone",
        body: "Phase 1 keeps the scope intentionally small: ship a clean Next.js site, publish it, and start writing technical build logs before adding heavier infrastructure.",
      },
    ],
  },
  {
    slug: "phase-1-shipping-the-first-nextjs-mvp",
    title: "Phase 1: Shipping the First Next.js MVP",
    category: "Web",
    date: "2026-05-12",
    summary:
      "A practical build note covering Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel deployment.",
    sections: [
      {
        heading: "Why Next.js first",
        body: "Next.js gives the project a modern React foundation, file-based routing, static generation, and a clean path to Vercel deployment without adding backend complexity too early.",
      },
      {
        heading: "What Phase 1 includes",
        body: "The first version includes Home, Projects, Blog, About, reusable data structures, and dynamic detail pages. The goal is to have something visible and expandable quickly.",
      },
      {
        heading: "What comes later",
        body: "After deployment, the next useful additions are MDX posts, Supabase, FastAPI, and an AI assistant demo. Those pieces will land after the public foundation is stable.",
      },
    ],
  },
  {
    slug: "from-ue5-ai-npcs-to-web-ai-assistants",
    title: "From UE5 AI NPCs to Web AI Assistants",
    category: "AI",
    date: "Draft",
    summary:
      "How game AI experiments can become a credible web-based AI demo using FastAPI and retrieval workflows.",
    sections: [
      {
        heading: "The shared pattern",
        body: "An AI NPC and a portfolio assistant both need context, intent handling, response generation, and a user-facing interaction loop. The surface changes, but the product problem is related.",
      },
      {
        heading: "The backend bridge",
        body: "FastAPI can become the service layer for experiments that start in games and later move to web demos. That makes the AI work easier to reuse across YuStack.",
      },
      {
        heading: "The demo direction",
        body: "A future YuStack assistant can answer questions about projects, skills, resume evidence, and build decisions using curated project content as retrieval context.",
      },
    ],
  },
];

export const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "AWS",
  "GitHub Actions",
  "OpenAI API",
  "UE5",
];

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Public Web Platform",
    status: "In progress",
    focus: "Ship the portfolio foundation with Next.js, project pages, blog structure, SEO, CI, and Vercel deployment.",
    items: [
      "Create the Next.js application shell.",
      "Publish project and blog detail pages.",
      "Add health API, sitemap, robots, and CI checks.",
      "Connect GitHub and deploy to Vercel.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Full-Stack and AI Layer",
    status: "Planned",
    focus: "Add backend services, database storage, AI assistant functionality, and structured technical writing.",
    items: [
      "Add MDX for long-form build logs.",
      "Introduce Supabase PostgreSQL for project and analytics data.",
      "Create a FastAPI service for AI experiments.",
      "Build the first YuStack AI assistant demo.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Cloud and DevOps Maturity",
    status: "Planned",
    focus: "Turn the platform into stronger evidence for cloud, data, and DevOps roles.",
    items: [
      "Dockerize backend services.",
      "Move selected assets to AWS S3.",
      "Add GitHub Actions deployment checks.",
      "Build an analytics dashboard and admin workflow.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
