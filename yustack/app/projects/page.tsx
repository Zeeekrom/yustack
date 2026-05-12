import { SectionHeading, SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/site-data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Projects"
          title="A portfolio shaped around AI, systems, and interaction."
        >
          These projects are selected to support one clear career narrative:
          full-stack engineering with AI and cloud-ready product thinking.
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="rounded-lg bg-white p-6 transition hover:-translate-y-1 hover:shadow-sm"
            >
              <p className="text-sm font-medium text-[#57705f]">
                {project.type}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#17201b]">
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-[#526058]">
                {project.description}
              </p>
              <p className="mt-5 border-t border-black/10 pt-4 text-sm font-medium text-[#2f4438]">
                {project.signal}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
