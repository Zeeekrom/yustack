import { SectionHeading, SiteShell } from "@/components/site-shell";
import { posts } from "@/lib/site-data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Research"
          title="Publications and patents."
        >
          Research and intellectual property from the LinkedIn profile, grouped
          as portfolio evidence for analytics, machine learning, and IoT work.
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className={`group border border-[var(--line)] bg-[#fffdf5] p-6 transition hover:-translate-y-1 hover:bg-[#111310] hover:text-[#f2efe6] ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <p className="text-sm font-black uppercase text-[#5c4b35] group-hover:text-[var(--acid)]">
                  {post.category}
                </p>
                <p className="text-sm text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                  {post.date}
                </p>
              </div>
              <h2 className="mt-16 text-4xl font-black uppercase leading-none text-[#111310] group-hover:text-[#f2efe6] sm:text-6xl">
                {post.title}
              </h2>
              <p className="mt-6 leading-7 text-[var(--ink-soft)] group-hover:text-[#d6d0c2]">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
