import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getProject, projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | YuStack`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/projects"
          className="text-sm font-black uppercase text-[#5c4b35] hover:text-[#111310]"
        >
          Back to projects
        </Link>

        <p className="mt-10 text-sm font-black uppercase text-[#5c4b35]">
          {project.type}
        </p>
        <h1 className="mt-4 text-6xl font-black uppercase leading-none text-[#111310] sm:text-8xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--ink-soft)]">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-[var(--line)] bg-[#fffdf5] px-3 py-2 text-sm font-semibold text-[#33382f]"
            >
              {item}
            </span>
          ))}
        </div>

        <section className="mt-14 grid gap-8 border-t border-[#111310] pt-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black uppercase text-[#111310]">
              Outcomes
            </h2>
            <ul className="mt-5 space-y-4 text-[var(--ink-soft)]">
              {project.outcomes.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--line)] bg-[#fffdf5] p-6">
            <h2 className="text-3xl font-black uppercase text-[#111310]">
              Next Steps
            </h2>
            <ul className="mt-5 space-y-4 text-[var(--ink-soft)]">
              {project.nextSteps.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
