import { SectionHeading, SiteShell } from "@/components/site-shell";
import { roadmap } from "@/lib/site-data";

export default function RoadmapPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Roadmap"
          title="A staged build plan for a real technical platform."
        >
          YuStack grows in phases so the project can ship early, stay visible,
          and gradually add full-stack, AI, cloud, data, and DevOps depth.
        </SectionHeading>

        <div className="mt-10 space-y-5">
          {roadmap.map((phase) => (
            <article
              key={phase.phase}
              className="grid gap-6 rounded-lg bg-white p-6 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
                  {phase.phase}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#17201b]">
                  {phase.title}
                </h2>
                <p className="mt-3 inline-flex rounded-full bg-[#dfeee4] px-3 py-1 text-sm font-medium text-[#2f4438]">
                  {phase.status}
                </p>
              </div>

              <div>
                <p className="leading-7 text-[#526058]">{phase.focus}</p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-black/10 bg-[#f7f6f2] px-4 py-3 text-sm leading-6 text-[#38443e]"
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
