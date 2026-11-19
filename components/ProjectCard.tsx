import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const img = project.images[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg transition hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="flex h-44 items-center justify-center overflow-hidden bg-accent-soft">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img.src} alt={img.alt} className="h-full w-full object-cover object-top" loading="lazy" />
        ) : (
          <span className="px-6 text-center text-lg font-semibold tracking-tight text-accent-fg">{project.title}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-fg">
              {c}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
        <p className="mt-auto pt-1 text-xs text-muted">{project.stack.slice(0, 4).join(" · ")}</p>
      </div>
    </Link>
  );
}
