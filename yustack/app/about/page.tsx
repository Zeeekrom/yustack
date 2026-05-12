import { SectionHeading, SiteShell } from "@/components/site-shell";
import { education, profile, skillGroups, stack } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="IT support, data analytics, AIGC, and interactive content."
        >
          {profile.summary}
        </SectionHeading>

        <div className="border border-[var(--line)] bg-[#fffdf5] p-6">
          <h2 className="text-3xl font-black uppercase text-[#111310]">
            About
          </h2>
          <div className="mt-4 space-y-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-[var(--ink-soft)]">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-8 text-3xl font-black uppercase text-[#111310]">
            Education
          </h2>
          <div className="mt-4 space-y-3">
            {education.map((item) => (
              <div
                key={item.school}
                className="border border-[var(--line)] bg-[#f2efe6] p-4"
              >
                <p className="font-black uppercase text-[#111310]">
                  {item.school}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-3xl font-black uppercase text-[#111310]">
            Skills
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.slice(0, 28).map((item) => (
              <span
                key={item}
                className="border border-[var(--line)] bg-[#f2efe6] px-3 py-2 text-sm font-semibold text-[#33382f]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="border border-[var(--line)] bg-[#fffdf5] p-6"
            >
              <h2 className="text-3xl font-black uppercase text-[#111310]">
                {group.title}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--line)] bg-[#f2efe6] px-3 py-2 text-sm font-semibold text-[#33382f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
