import { SectionHeading, SiteShell } from "@/components/site-shell";
import { experiences } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Experience"
          title="Industry work across AI, games, systems, and startups."
        >
          A LinkedIn-aligned record of internships and entrepreneurial work
          across full-stack engineering, AIGC pipelines, technical game systems,
          operations, and interactive content.
        </SectionHeading>

        <div className="mt-12 border-t border-[#111310]">
          {experiences.map((experience, index) => (
            <article
              key={experience.slug}
              className="grid gap-6 border-b border-[var(--line)] py-8 lg:grid-cols-[120px_1fr_1.4fr]"
            >
              <p className="text-5xl font-black text-[#111310]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="text-sm font-black uppercase text-[#5c4b35]">
                  {experience.period}
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-none text-[#111310]">
                  {experience.role}
                </h2>
                <p className="mt-3 font-semibold text-[var(--ink-soft)]">
                  {experience.company} / {experience.type}
                </p>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">
                  {experience.location}
                </p>
              </div>
              <div>
                <p className="leading-7 text-[var(--ink-soft)]">
                  {experience.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="leading-7 text-[#33382f]">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[var(--line)] bg-[#fffdf5] px-3 py-2 text-sm font-semibold text-[#33382f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
