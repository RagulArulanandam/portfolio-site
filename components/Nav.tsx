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
        <Link href="/" className="leading-none">
          <span className="font-display block text-lg font-extrabold tracking-tight">
            Ragul <span className="text-gradient">Arulanandam</span>
          </span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            Software Engineer
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
