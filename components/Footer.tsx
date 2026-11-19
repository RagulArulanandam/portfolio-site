import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted">
        <span>
          &copy; {profile.name}
        </span>
        <span className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-fg">Email</a>
        </span>
      </div>
    </footer>
  );
}
