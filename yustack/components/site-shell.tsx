import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-black/10 bg-[#f7f6f2]/90">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            YuStack
          </Link>
          <div className="flex w-full items-center justify-between gap-1 rounded-full border border-black/10 bg-white/60 p-1 text-sm sm:w-auto sm:justify-start">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[#44504a] transition hover:bg-[#dfeee4] hover:text-[#142119] sm:px-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[#526058] sm:flex-row sm:items-center sm:justify-between">
          <p>YuStack / Software, AI, Cloud, Data</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#57705f]">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#17201b] sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <p className="mt-5 text-lg leading-8 text-[#526058]">{children}</p>
      ) : null}
    </div>
  );
}
