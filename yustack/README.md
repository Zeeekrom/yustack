# YuStack

YuStack is Evan Huang's personal portfolio for IT support, data analytics, AIGC workflows, game systems, full-stack engineering, and interactive content.

Phase 1 focuses on shipping a clean portfolio foundation with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static project pages
- Blog metadata structure
- Dynamic project and blog detail pages
- Roadmap page
- Health API route
- Sitemap and robots files
- GitHub Actions CI
- Vercel-ready deployment

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Quality Checks

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

## Current Pages

- `/` - Home
- `/experience` - LinkedIn-aligned work experience
- `/projects` - Project portfolio
- `/blog` - Research and patent evidence
- `/roadmap` - Build plan and delivery phases
- `/about` - Profile and stack summary
- `/api/health` - Basic service health endpoint

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub and Vercel setup.

## Roadmap

Phase 2:

- MDX blog posts
- FastAPI backend
- Supabase PostgreSQL
- AI assistant demo

Phase 3:

- Dockerized services
- AWS S3 assets
- GitHub Actions CI/CD
- Analytics dashboard
- Admin panel
