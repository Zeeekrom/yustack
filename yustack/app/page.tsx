import Link from "next/link";
import { SectionHeading, SiteShell } from "@/components/site-shell";
import { experiences, posts, profile, stack } from "@/lib/site-data";

export default function Home() {
  return (
    <SiteShell>
      <section className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <div className="reveal">
          <p className="text-sm font-black uppercase text-[#5c4b35]">
            {profile.name} / Portfolio
          </p>
          <h1 className="mt-5 max-w-5xl text-7xl font-black uppercase leading-none text-[#111310] sm:text-8xl lg:text-9xl">
            IT Data AI Systems
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--ink-soft)]">
            {profile.summary} Built from real experience across Tencent,
            Lilith Games, Perfect World, CLAW, startups, research, and
            interactive AI systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="border border-[#111310] bg-[#111310] px-5 py-3 text-sm font-black uppercase text-[#f2efe6] transition hover:-translate-y-1 hover:bg-[var(--clay)] hover:text-[#111310]"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="border border-[#111310] bg-[var(--acid)] px-5 py-3 text-sm font-black uppercase text-[#111310] transition hover:-translate-y-1 hover:bg-[#fffdf5]"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="reveal border-l border-[var(--line)] pl-6 lg:pt-16">
          <p className="text-sm font-black uppercase text-[#5c4b35]">
            LinkedIn Signal
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.slice(0, 8).map((item) => (
              <span
                key={item}
                className="border border-[var(--line)] bg-[#fffdf5] px-3 py-2 text-sm font-semibold text-[#33382f]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 lg:grid-cols-1">
            <div className="border-t border-[#111310] pt-4">
              <p className="text-5xl font-black text-[#111310]">6</p>
              <p className="text-sm text-[var(--ink-soft)]">industry roles</p>
            </div>
            <div className="border-t border-[#111310] pt-4">
              <p className="text-5xl font-black text-[#111310]">4</p>
              <p className="text-sm text-[var(--ink-soft)]">portfolio projects</p>
            </div>
            <div className="border-t border-[#111310] pt-4">
              <p className="text-5xl font-black text-[#111310]">2</p>
              <p className="text-sm text-[var(--ink-soft)]">research assets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#111310] bg-[var(--acid)] py-4">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-3xl font-black uppercase text-[#111310] sm:text-5xl">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[#fffdf5]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-0 md:grid-cols-3">
          {experiences.slice(0, 3).map((experience) => (
            <Link
              key={experience.slug}
              href="/experience"
              className="group min-h-80 border-x border-[var(--line)] p-6 transition hover:bg-[#111310] hover:text-[#f2efe6]"
            >
              <p className="text-sm font-black uppercase text-[#5c4b35] group-hover:text-[var(--acid)]">
                {experience.company}
              </p>
              <h2 className="mt-20 text-4xl font-black uppercase leading-none">
                {experience.role}
              </h2>
              <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                {experience.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Research / IP"
          title="Published research and patent evidence."
        >
          Academic and invention outputs aligned with machine learning,
          analytics, IoT, and applied systems.
        </SectionHeading>
        <div className="mt-10 grid border-t border-[#111310]">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="group grid gap-4 border-b border-[var(--line)] py-6 transition hover:bg-[#111310] hover:px-5 hover:text-[#f2efe6] md:grid-cols-[220px_1fr_120px]"
            >
              <p className="text-sm font-black uppercase text-[#5c4b35] group-hover:text-[var(--acid)]">
                {post.category}
              </p>
              <div>
                <h2 className="text-2xl font-black uppercase">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                  {post.summary}
                </p>
              </div>
              <p className="text-sm font-semibold text-[var(--ink-soft)] group-hover:text-[#f2efe6]">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
