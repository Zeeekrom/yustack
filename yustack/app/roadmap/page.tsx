import { SectionHeading, SiteShell } from "@/components/site-shell";
import { roadmap } from "@/lib/site-data";

export default function RoadmapPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Roadmap"
          title="A 2026 direction for IT, data, AI, and interactive systems."
        >
          A LinkedIn-aligned roadmap connecting the University of Tasmania MITS
          program, industry experience, portfolio case studies, and future AI
          data products.
        </SectionHeading>

        <div className="mt-12 border-t border-[#111310]">
          {roadmap.map((phase) => (
            <article
              key={phase.phase}
              className="grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[260px_1fr]"
            >
              <div>
                <p className="text-sm font-black uppercase text-[#5c4b35]">
                  {phase.phase}
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-none text-[#111310]">
                  {phase.title}
                </h2>
                <p className="mt-4 inline-flex bg-[var(--acid)] px-3 py-1 text-sm font-black uppercase text-[#111310]">
                  {phase.status}
                </p>
              </div>

              <div>
                <p className="max-w-3xl leading-7 text-[var(--ink-soft)]">
                  {phase.focus}
                </p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="border border-[var(--line)] bg-[#fffdf5] px-4 py-3 text-sm leading-6 text-[#33382f]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
