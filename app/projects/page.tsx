import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = { title: "Projects | Ragul Arulanandam" };

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mb-8 mt-3 max-w-2xl text-muted">
        LLM systems, data pipelines and full-stack applications I&apos;ve designed and built.
      </p>
      <ProjectGrid />
    </section>
  );
}
