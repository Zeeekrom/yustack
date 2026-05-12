import { SectionHeading, SiteShell } from "@/components/site-shell";
import { posts } from "@/lib/site-data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Blog"
          title="Technical writing for the build journey."
        >
          Phase 1 uses structured post metadata first. MDX can be added after
          the main site is deployed.
        </SectionHeading>

        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="grid gap-4 rounded-lg bg-white p-6 md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-[#57705f]">
                  {post.category}
                </p>
                <p className="mt-2 text-sm text-[#69746e]">{post.date}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#17201b]">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-[#526058]">{post.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
