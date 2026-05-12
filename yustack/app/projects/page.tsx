import { SectionHeading, SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/site-data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Projects"
          title="LinkedIn-aligned technical projects."
        >
          Project work across game production, multi-agent simulation, financial
          education, UE5, AIGC workflows, and project management.
        </SectionHeading>

        <div className="mt-12 border-t border-[#111310]">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="group grid gap-6 border-b border-[var(--line)] py-8 transition hover:bg-[#111310] hover:px-5 hover:text-[#f2efe6] lg:grid-cols-[120px_1fr_1.2fr]"
            >
              <p className="text-5xl font-black text-[#111310] group-hover:text-[var(--acid)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="text-sm font-black uppercase text-[#5c4b35] group-hover:text-[var(--acid)]">
                  {project.type}
                </p>
                <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                  {project.signal}
                </p>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none text-[#111310] group-hover:text-[#f2efe6] sm:text-6xl">
                {project.title}
              </h2>
              <p className="lg:col-start-3 leading-7 text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
