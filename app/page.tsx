import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { certs, education, experience, profile, projects, skills } from "@/lib/data";

const btnPrimary = "rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#0b0b0b] hover:opacity-90";
const btnGhost = "rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      <section className="hero-glow">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open to work · {profile.location}
        </span>
        <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
          Where clean code meets <span className="text-gradient">curious data.</span>
        </h1>
        <p className="font-summary mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <p className="font-tagline mt-6 max-w-2xl text-xl leading-snug sm:text-2xl">{profile.seeking}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.roles.map((r) => (
            <span key={r} className="font-roles rounded-full border border-line px-3 py-1 text-[11px] text-muted">
              {r}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className={btnPrimary}>View projects</Link>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>LinkedIn</a>
        </div>
        <p className="mt-6 text-sm text-muted">{profile.visa}</p>
      </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
          {[
            ["3+ years", "Commercial software engineering"],
            ["MSc Merit", "Data Science and AI, Liverpool"],
            ["6 projects", "LLM, full-stack and data"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="text-2xl font-semibold tracking-tight">{a}</p>
              <p className="text-sm text-muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Featured projects</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">All projects</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border border-line bg-bg p-5">
                <h3 className="mb-3 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent-fg">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Experience and education</h2>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{experience.title}, {experience.company}</h3>
              <span className="text-sm text-muted">{experience.period}</span>
            </div>
            <ul className="mt-4 space-y-3 text-muted">
              {experience.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.title}>
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-muted">{e.place} · {e.period}</p>
              </div>
            ))}
            <div>
              <p className="mb-1 font-medium">Certifications</p>
              {certs.map((c) => (
                <p key={c} className="text-sm text-muted">{c}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Got a problem worth <span className="text-gradient">solving?</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            I&apos;m open to software engineering, Python and data roles across the UK. If you&apos;re building something
            interesting, I&apos;d love to hear about it.
          </p>
          <div className="mt-6">
            <a href={`mailto:${profile.email}`} className={btnPrimary}>{profile.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
