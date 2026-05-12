import Link from "next/link";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { projects, posts, stack } from "@/lib/site-data";

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
            Personal Technical Platform
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#17201b] sm:text-6xl">
            Yuxiang Huang builds software, AI, and interactive systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526058]">
            YuStack is a portfolio, technical blog, project lab, and future API
            platform for full-stack engineering, cloud deployment, data
            dashboards, and AI demos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[#17201b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d4035]"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold text-[#17201b] transition hover:bg-white"
            >
              Read Blog
            </Link>
          </div>
        </div>

        <div className="border-l border-black/10 pl-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
            Phase 1 Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.slice(0, 6).map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-[#38443e]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-3xl font-semibold text-[#17201b]">5</p>
              <p className="text-sm text-[#526058]">core portfolio projects</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#17201b]">3</p>
              <p className="text-sm text-[#526058]">planned build phases</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#17201b]">1</p>
              <p className="text-sm text-[#526058]">coherent technical story</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/45">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="rounded-lg bg-white p-5 transition hover:-translate-y-1 hover:shadow-sm"
            >
              <p className="text-sm font-medium text-[#57705f]">
                {project.type}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#526058]">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Latest Notes"
          title="Build logs that turn the project into evidence."
        >
          The blog will document decisions, architecture, deployment, and AI
          experiments so recruiters can see how the system grows.
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="border-t border-black/10 pt-5 transition hover:border-[#57705f]"
            >
              <p className="text-sm text-[#57705f]">{post.category}</p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#526058]">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
