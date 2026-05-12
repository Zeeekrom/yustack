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
    <div className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#f2efe6]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-xl font-black uppercase">
            YuStack
          </Link>
          <div className="flex w-full items-center gap-1 overflow-x-auto border border-[var(--line)] bg-[#fffdf5]/80 p-1 text-sm sm:w-auto sm:justify-start">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[#33382f] transition hover:bg-[#111310] hover:text-[#f2efe6] sm:px-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--line)] bg-[#111310] text-[#f2efe6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-black uppercase sm:text-5xl">
              YuStack
            </p>
            <p className="mt-2 text-sm text-[#d6d0c2]">
              Software / AI / Cloud / Data
            </p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#d6d0c2]">
            A personal technical platform built in public with Next.js,
            TypeScript, and a staged full-stack roadmap.
          </p>
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
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase text-[#5c4b35]">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-black uppercase leading-none text-[#111310] sm:text-6xl">
        {title}
      </h1>
      {children ? (
        <p className="mt-5 text-lg leading-8 text-[var(--ink-soft)]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
