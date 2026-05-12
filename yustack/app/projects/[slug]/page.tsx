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
      <article className="mx-auto max-w-4xl px-5 py-16">
        <Link
          href="/projects"
          className="text-sm font-semibold text-[#57705f] hover:text-[#17201b]"
        >
          Back to projects
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
          {project.type}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#17201b] sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-[#526058]">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-[#38443e]"
            >
              {item}
            </span>
          ))}
        </div>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[#17201b]">Outcomes</h2>
            <ul className="mt-5 space-y-4 text-[#526058]">
              {project.outcomes.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#17201b]">
              Next Steps
            </h2>
            <ul className="mt-5 space-y-4 text-[#526058]">
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
