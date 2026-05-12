import { SectionHeading, SiteShell } from "@/components/site-shell";
import { stack } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="Software plus AI plus information systems."
        >
          YuStack is designed to connect Yuxiang Huang&apos;s experience across web
          development, UE5, AI experiments, business systems, and project
          delivery into one credible technical identity.
        </SectionHeading>

        <div className="border border-[var(--line)] bg-[#fffdf5] p-6">
          <h2 className="text-3xl font-black uppercase text-[#111310]">
            Current Focus
          </h2>
          <p className="mt-4 leading-7 text-[var(--ink-soft)]">
            Phase 1 is about shipping: Next.js, TypeScript, Tailwind CSS,
            GitHub, and Vercel. After that, the platform can grow into FastAPI,
            Supabase PostgreSQL, AI retrieval demos, Docker, and AWS assets.
          </p>

          <h2 className="mt-8 text-3xl font-black uppercase text-[#111310]">
            Technical Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
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
    </SiteShell>
  );
}
