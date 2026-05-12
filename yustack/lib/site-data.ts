export type Experience = {
  slug: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

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

export const profile = {
  name: "Evan Huang",
  headline: "IT, Data, AI, and Interactive Systems",
  location: "Australia / China",
  linkedin: "https://www.linkedin.com/in/evan-h-165976301/",
  summary:
    "Incoming Master of IT and Systems student at the University of Tasmania, focusing on IT Support, Data Analytics, AIGC workflows, and Game Development.",
  about: [
    "I will begin the Master of IT and Systems (MITS) at the University of Tasmania in 2026, focusing on IT Support, Data Analytics, AIGC workflows, and Game Development.",
    "My industry experience includes internships at Tencent (Honor of Kings), Lilith Games, and Perfect World, where I worked across IT support-related technical collaboration, data processing, AIGC pipeline development, model fine-tuning, workflow automation, and quest/system production support.",
    "Academically, I completed an exchange program in the United States and co-authored a machine-learning research paper published in ACM ICPS (DEIT 2025).",
    "I also have entrepreneurial experience, co-founding an AR/AIGC content platform, where I led technical design, workflow development, and external coordination.",
    "I aim to continue building expertise at the intersection of IT, data, AI, and interactive content.",
  ],
};

export const experiences: Experience[] = [
  {
    slug: "claw-software-engineer",
    role: "Software Engineer",
    company: "Chongqing Qingqiu Technology Co., Ltd.",
    type: "Internship",
    period: "Dec 2025 - Apr 2026",
    location: "Chongqing, China",
    summary:
      "Worked on the development of CLAW, an AI-powered coding assistant, contributing to full-stack engineering and AI system design.",
    bullets: [
      "Developed and maintained full-stack features using JavaScript and Node.js, implementing APIs, business logic, and data processing.",
      "Integrated large language models including OpenAI Codex and Anthropic Claude for code generation, debugging, and automated refactoring.",
      "Designed a web-based analysis module that extracts page context and routing information to generate structured AI outputs.",
      "Built intelligent workflows supporting both web interface interaction and CLI-based automation.",
      "Designed system prompts and few-shot examples to improve code completion, requirement understanding, and multi-turn interactions.",
    ],
    skills: [
      "Full-Stack Development",
      "AI / LLM Integration",
      "Prompt Engineering",
      "JavaScript",
      "Node.js",
    ],
  },
  {
    slug: "malou-recruitment-cofounder",
    role: "Recruitment Manager & Co-Founder",
    company: "Shanghai Malou Cultural Media Co., Ltd.",
    type: "Freelance / Startup",
    period: "Apr 2024 - Aug 2025",
    location: "Remote",
    summary:
      "Co-founded and operated a cultural media startup, focusing on recruiting, operations, communication, and team coordination.",
    bullets: [
      "Managed internet recruiting workflows and operational coordination for startup activities.",
      "Supported cross-functional communication, stakeholder coordination, and execution across remote work.",
      "Developed leadership, teamwork, communication, and operations management skills in a startup environment.",
    ],
    skills: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Internet Recruiting",
      "Operations Management",
    ],
  },
  {
    slug: "tencent-technical-game-systems",
    role: "Technical Game Systems",
    company: "Tencent",
    type: "Internship",
    period: "Jun 2025 - Jul 2025",
    location: "Chengdu, Sichuan, China",
    summary:
      "Worked on gameplay systems, data analysis, and system optimization in a large-scale live-service game environment.",
    bullets: [
      "Analyzed player behavior data including win rate, pick rate, and skill performance to support balancing decisions.",
      "Built and iterated numerical models using Excel and internal tools to evaluate system changes.",
      "Prototyped gameplay features using Lua scripting and in-engine tools to validate system logic.",
      "Contributed to collision detection, skill triggering logic, and state machine restructuring.",
      "Collaborated with engineering, design, and QA teams to deliver production-ready system features.",
    ],
    skills: [
      "Systems Analysis & Design",
      "Data Analytics",
      "Unity",
      "Game Development",
      "Database Management",
    ],
  },
  {
    slug: "ar-metaverse-aigc-lead",
    role: "AIGC Technical Lead & Co-Founder",
    company: "AR Metaverse Content Platform",
    type: "Freelance / Startup",
    period: "Nov 2023 - Jan 2024",
    location: "Remote",
    summary:
      "Led development of an AI-driven AR content platform combining interactive gameplay and spatial computing systems.",
    bullets: [
      "Designed core system architecture, including gameplay loops, spatial mapping, and interaction systems.",
      "Developed AIGC-based pipelines for 3D asset generation and scalable content production.",
      "Built spatial positioning logic and real-time interaction features in AR environments.",
      "Defined product scenarios for commercial deployment in malls, theme parks, and B2B contexts.",
      "Led seed-stage fundraising preparation and developed investor pitch materials.",
    ],
    skills: [
      "Generative AI Development",
      "Interactive Systems",
      "Unreal Engine",
      "Augmented Reality",
      "3D Modeling",
    ],
  },
  {
    slug: "perfect-world-ai-aigc",
    role: "AI / AIGC Engineer",
    company: "Perfect World Co., Ltd.",
    type: "Internship",
    period: "Nov 2023 - Dec 2023",
    location: "Shanghai, China",
    summary:
      "Worked on AI-driven content generation pipelines and automation tools in a large-scale game production environment.",
    bullets: [
      "Supported AIGC pipelines for 2D and 3D asset generation, including data collection, annotation, and style tagging.",
      "Trained and optimized LoRA models using ComfyUI workflows to improve generation quality.",
      "Developed automation scripts using Python and integrated workflows into Jenkins CI/CD pipelines.",
      "Tested asset rendering and integration workflows using Blender, Maya, and Unity.",
      "Created internal technical documentation for troubleshooting and configuration standards.",
    ],
    skills: ["Machine Learning", "Python", "ComfyUI", "Automation", "Blender"],
  },
  {
    slug: "lilith-aigc-ai-pipeline",
    role: "AIGC / AI Pipeline Engineer",
    company: "Lilith Games",
    type: "Internship",
    period: "Jun 2023 - Sep 2023",
    location: "Shanghai, China",
    summary:
      "Worked on AI-driven content generation pipelines and tooling for large-scale game asset production.",
    bullets: [
      "Built and optimized AIGC pipelines for image generation, dataset processing, tagging, and workflow design.",
      "Trained and fine-tuned LoRA models to improve generation quality and style consistency.",
      "Developed automated workflows using ComfyUI and Python to streamline asset generation.",
      "Managed model libraries and prompt configurations for efficient content creation.",
      "Collaborated with artists and engineers to integrate AI-generated assets into production pipelines.",
    ],
    skills: [
      "Generative AI",
      "Machine Learning",
      "AI Model Training and Testing",
      "Data Processing",
      "ComfyUI",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "afk-arena-2-project-management-plan",
    title: "AFK Arena 2 Project Management Plan",
    type: "Project Management / Game Production",
    description:
      "A full-scale project management plan for the next-generation AFK Arena 2 mobile RPG, applying Agile and Scrum methods across scope, schedule, HR, budgeting, and risk mitigation.",
    signal:
      "Demonstrates software delivery thinking, stakeholder planning, budgeting, and production management.",
    stack: ["Agile", "Scrum", "Excel", "Stakeholder Management"],
    outcomes: [
      "Defined scope, timeline, HR planning, budgeting, and risk mitigation for a large mobile RPG project.",
      "Applied Agile and Scrum delivery methods to structure production planning.",
      "Achieved a theoretical ROI of 132.79% with a projected 2-year payback.",
    ],
    nextSteps: [
      "Convert the plan into a public case study.",
      "Add charts showing budget, risk, timeline, and ROI assumptions.",
      "Connect the case study to project management and production roles.",
    ],
  },
  {
    slug: "ai-town-multi-agent-simulation",
    title: "AI Town Multi-Agent Virtual Town Simulation",
    type: "LLM / Multi-Agent Systems",
    description:
      "A multi-agent simulation inspired by Stanford's Generative Agents, implementing autonomous agents with observation, memory, reflection, and planning to simulate social behavior.",
    signal:
      "Shows applied LLM systems thinking, agent design, memory architecture, and real-time interaction analysis.",
    stack: ["LLMOps", "Agent-Based Simulation", "Large Language Models"],
    outcomes: [
      "Implemented autonomous agents with observation, memory, reflection, and planning loops.",
      "Built real-time visualization and replay features for interaction analysis.",
      "Explored human-like social behavior simulation through multi-agent coordination.",
    ],
    nextSteps: [
      "Publish an architecture diagram for agent memory and planning.",
      "Add a short demo video or replay capture.",
      "Write a technical note comparing the system with Generative Agents.",
    ],
  },
  {
    slug: "cyber-fincity-metaverse-financial-education",
    title: "Cyber FinCity Metaverse Financial Education Platform",
    type: "UE5 / FinTech / AI NPC",
    description:
      "A metaverse-based financial education platform built with Unreal Engine 5, integrating PBR rendering, Blueprint systems, AI-driven NPCs, memory, semantic understanding, VR-ready scenes, and AIGC-assisted asset workflows.",
    signal:
      "Connects FinTech education, UE5 interaction design, AI NPC behavior, and AIGC production workflows.",
    stack: ["Unreal Engine 5", "Blueprints", "LLM Dialogue", "AIGC", "VR"],
    outcomes: [
      "Designed modular UE5 scenes and VR-ready environments for financial education.",
      "Integrated LLM-based dialogue, memory, and semantic understanding for intelligent learning interactions.",
      "Used AIGC-assisted workflows to accelerate asset production and iteration.",
    ],
    nextSteps: [
      "Add screenshots and walkthrough clips.",
      "Document the AI NPC dialogue and memory design.",
      "Create a recruiter-facing case study for AI, games, and education technology.",
    ],
  },
  {
    slug: "digital-media-indie-game-production",
    title: "Digital Media Technology in Indie Game Production",
    type: "Game Development / Digital Media",
    description:
      "An indie game production project exploring narrative design, pixel art, asset creation, UE5 Blueprint systems, gameplay prototyping, and AIGC-assisted documentation and art workflows.",
    signal:
      "Shows full-cycle creative production across design, technical implementation, and AIGC workflow acceleration.",
    stack: ["UE5", "Blueprints", "Stable Diffusion", "ComfyUI", "Game Design"],
    outcomes: [
      "Explored full-cycle indie game production from narrative design to gameplay prototyping.",
      "Applied AIGC tools including Stable Diffusion and ComfyUI to accelerate art workflows.",
      "Built technical documentation and prototypes around digital media production methods.",
    ],
    nextSteps: [
      "Publish a visual process breakdown.",
      "Add prototype footage or screenshots.",
      "Connect the case study to technical artist and game development roles.",
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "predicting-student-performance-random-forest",
    title:
      "Predicting Student Performance in Software Engineering Education Using Random Forest",
    category: "Publication",
    date: "DEIT 2025 / ACM ICPS",
    summary:
      "A machine learning study using Random Forest to predict student performance in software engineering courses.",
    sections: [
      {
        heading: "Contribution",
        body: "Contributed feature engineering, model training, and evaluation using F1-score and precision-recall metrics as part of a university research team.",
      },
      {
        heading: "Analytics Layer",
        body: "Designed a visual analytics dashboard to support interpretation of model performance and student performance patterns.",
      },
      {
        heading: "Publication Context",
        body: "Published in the ACM International Conference Proceedings Series (ICPS), DEIT 2025.",
      },
    ],
  },
  {
    slug: "intelligent-pill-box-patent",
    title: "A Kind of Intelligent Pill Box",
    category: "Patent",
    date: "Issued Apr 1, 2024",
    summary:
      "An intelligent pill box integrating voice reminders, real-time medication tracking, and remote alert functions.",
    sections: [
      {
        heading: "Patent Number",
        body: "ZL 2023 2 1475234.2.",
      },
      {
        heading: "System Concept",
        body: "Designed an IoT-based healthcare device concept to support elderly users and chronic disease management through reminders, tracking, and remote alerts.",
      },
    ],
  },
];

export const education = [
  {
    school: "University of Tasmania",
    detail: "Master of IT and Systems (MITS), beginning in 2026",
  },
  {
    school: "Saint Martin's University",
    detail: "United States exchange program",
  },
  {
    school: "Sanda University",
    detail:
      "Coursework and skill development across software engineering, AI, systems, data, and game development.",
  },
];

export const stack = [
  "Data Processing",
  "Automation",
  "Generative AI Development",
  "Full-Stack Development",
  "AI / LLM Integration",
  "Prompt Engineering",
  "Technical Support",
  "Web Development",
  "IT Operations",
  "Data Analysis",
  "RAG",
  "TypeScript",
  "Node.js",
  "Python",
  "Pandas / NumPy",
  "React.js",
  "Django",
  "SQL",
  "Linux System Administration",
  "AWS",
  "Microsoft Azure",
  "Power BI",
  "ComfyUI",
  "Stable Diffusion",
  "Unreal Engine",
  "Unity",
  "Blender",
  "Autodesk Maya",
  "Machine Learning",
  "PyTorch",
  "Game Development",
  "AIGC",
  "Interactive Systems",
];

export const skillGroups = [
  {
    title: "AI and Data",
    items: [
      "AIGC",
      "Generative AI",
      "Machine Learning",
      "RAG",
      "Data Processing",
      "Data Analytics",
      "Visual Analytics",
      "Pandas / NumPy",
      "PyTorch",
      "LLMOps",
    ],
  },
  {
    title: "Software and Cloud",
    items: [
      "Full-Stack Development",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React.js",
      "Django",
      "SQL",
      "AWS",
      "Microsoft Azure",
      "DevOps",
    ],
  },
  {
    title: "Interactive Content",
    items: [
      "Unreal Engine",
      "Unity",
      "Game Development",
      "Game Programming",
      "Game Design",
      "Augmented Reality",
      "Computer Graphics",
      "Blender",
      "Autodesk Maya",
      "ComfyUI",
    ],
  },
  {
    title: "Delivery and Collaboration",
    items: [
      "Project Management",
      "Agile Methodologies",
      "Leadership",
      "Teamwork",
      "Communication",
      "Stakeholder",
      "Operations Management",
      "Technical Support",
      "Systems Analysis & Design",
    ],
  },
];

export const roadmap = [
  {
    phase: "2026 Focus",
    title: "Master of IT and Systems",
    status: "Upcoming",
    focus:
      "Begin MITS at the University of Tasmania and build stronger foundations in IT support, data analytics, AIGC workflows, and game development.",
    items: [
      "Strengthen IT support and cloud systems knowledge.",
      "Build data analytics and BI portfolio evidence.",
      "Expand AIGC and LLM workflow projects.",
      "Connect game development experience with interactive AI systems.",
    ],
  },
  {
    phase: "Portfolio",
    title: "YuStack Career Platform",
    status: "Active",
    focus:
      "Use YuStack as a public portfolio for internships, research, AI systems, technical game systems, and full-stack engineering work.",
    items: [
      "Publish LinkedIn-aligned experience pages.",
      "Create case studies for AI Town, Cyber FinCity, and AIGC pipelines.",
      "Add project visuals, architecture diagrams, and demo videos.",
      "Use GitHub and Vercel deployment as engineering evidence.",
    ],
  },
  {
    phase: "Next Build",
    title: "Data and AI Integration",
    status: "Planned",
    focus:
      "Add a safe content sync pipeline and AI assistant features without relying on fragile LinkedIn scraping.",
    items: [
      "Move profile content into a structured JSON data source.",
      "Optional sync from Notion, Google Sheets, or GitHub JSON.",
      "Add an AI assistant that answers questions about experience and projects.",
      "Create dashboards for projects, skills, publications, and site usage.",
    ],
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
