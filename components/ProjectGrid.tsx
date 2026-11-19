"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "@/lib/data";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.categories.includes(filter));
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === c ? "border-accent bg-accent text-white" : "border-line text-muted hover:text-fg"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
