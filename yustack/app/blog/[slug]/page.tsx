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
      <article className="mx-auto max-w-3xl px-5 py-16">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#57705f] hover:text-[#17201b]"
        >
          Back to blog
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
          {post.category} / {post.date}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#17201b] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-[#526058]">{post.summary}</p>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-[#17201b]">
                {section.heading}
              </h2>
              <p className="mt-4 leading-8 text-[#526058]">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
