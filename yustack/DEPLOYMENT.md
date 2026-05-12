# Deployment

YuStack Phase 1 is designed for Vercel.

## Local Checks

Run these before pushing:

```bash
npm run lint
npm run build
```

## GitHub

Create a GitHub repository, then connect this local project:

```bash
cd ..
git remote add origin https://github.com/YOUR_USERNAME/yustack.git
git add .
git commit -m "Initial YuStack platform"
git push -u origin main
```

## Vercel

Import the GitHub repository into Vercel.

Use these defaults:

```txt
Framework Preset: Next.js
Root Directory: yustack
Build Command: npm run build
Install Command: npm ci
Output Directory: .next
```

Set this environment variable after you have the production URL:

```txt
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Smoke Tests

After deployment, check:

```txt
/
/projects
/blog
/roadmap
/about
/api/health
/sitemap.xml
/robots.txt
```
