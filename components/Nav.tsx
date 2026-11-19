import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

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
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.dev</span>
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
