import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Ragul Arulanandam, Software Engineer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-black.png" alt="" className="logo-light h-8 w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="" className="logo-dark h-8 w-auto" />
          <span className="border-l border-fg/70 pl-3 leading-none">
            <span className="block font-serif text-base tracking-tight">Ragul Arulanandam</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.3em] text-muted">
              Software Engineer
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hidden px-2 py-1 text-muted hover:text-fg sm:inline">
              {l.label}
            </Link>
          ))}
          <Link href="/projects" className="px-2 py-1 text-muted hover:text-fg sm:hidden">
            Projects
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
