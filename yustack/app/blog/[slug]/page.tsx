import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getPost, posts } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | YuStack`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto max-w-4xl px-5 py-16">
        <Link
          href="/blog"
          className="text-sm font-black uppercase text-[#5c4b35] hover:text-[#111310]"
        >
          Back to blog
        </Link>

        <p className="mt-10 text-sm font-black uppercase text-[#5c4b35]">
          {post.category} / {post.date}
        </p>
        <h1 className="mt-4 text-5xl font-black uppercase leading-none text-[#111310] sm:text-7xl">
          {post.title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--ink-soft)]">
          {post.summary}
        </p>

        <div className="mt-14 space-y-10 border-t border-[#111310] pt-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-black uppercase text-[#111310]">
                {section.heading}
              </h2>
              <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
