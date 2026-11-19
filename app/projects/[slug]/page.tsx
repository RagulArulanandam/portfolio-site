import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | Ragul Arulanandam` : "Project", description: p?.tagline };
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="space-y-3 text-muted">
        {items.map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <Link href="/projects" className="text-sm text-muted hover:text-fg">&larr; All projects</Link>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.categories.map((c) => (
          <span key={c} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-fg">{c}</span>
        ))}
      </div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-3 text-lg text-muted">{p.tagline}</p>
      {p.repo && (
        <a href={p.repo} className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
          View code on GitHub
        </a>
      )}
      {p.images.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {p.images.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="rounded-xl border border-line" />
          ))}
        </div>
      )}
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold tracking-tight">Objective</h2>
        <p className="leading-relaxed text-muted">{p.objective}</p>
      </section>
      <Block title="Approach and architecture" items={p.approach} />
      <Block title="Results" items={p.results} />
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold tracking-tight">Tech stack</h2>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</span>
          ))}
        </div>
      </section>
    </article>
  );
}
