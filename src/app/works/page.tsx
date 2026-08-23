import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Globe } from "lucide-react";

interface Project {
  title: string;
  slug: string;
  description: string;
  url?: string;
  platforms: string[];
  year: number;
  status: string;
}

function getProjects(): Project[] {
  const dir = path.join(process.cwd(), "content/works");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title as string,
        slug: data.slug as string,
        description: data.description as string,
        url: data.url as string | undefined,
        platforms: (data.platforms as string[]) || [],
        year: data.year as number,
        status: data.status as string,
      };
    })
    .sort((a, b) => b.year - a.year);
}

export default function WorksPage() {
  const projects = getProjects();

  const inProgress = projects.filter((p) => p.status === "in-progress");
  const shipped = projects.filter((p) => p.status !== "in-progress");

  return (
    <main className="mt-10 space-y-10 max-w-prose">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold">Things I think should exist</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If I looked for it and couldn&apos;t find it, I built it.
        </p>
      </div>

      {inProgress.length > 0 && (
        <ProjectSection label="In progress" projects={inProgress} />
      )}

      {shipped.length > 0 && (
        <ProjectSection label="Shipped" projects={shipped} />
      )}
    </main>
  );
}

function ProjectSection({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {label}
      </h2>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-3 min-w-0">
              <Link
                href={`/works/${project.slug}`}
                className="font-medium text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity shrink-0"
              >
                {project.title}
              </Link>
              <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">
                &mdash;
              </span>
              <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">
                {project.description}
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-sm text-gray-500 dark:text-gray-400">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  title={project.url.replace(/^https?:\/\//, "")}
                >
                  <Globe size={14} />
                </Link>
              )}
              {project.platforms.length > 0 && (
                <span className="hidden sm:inline">
                  {project.platforms.join(", ")}
                </span>
              )}
              <span className="tabular-nums">{project.year}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
