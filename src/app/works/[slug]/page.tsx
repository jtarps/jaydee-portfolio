import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Globe } from "lucide-react";
import { type ReactNode } from "react";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/works");
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/works", `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      title: `${data.title} — Jaydee Tarpeh`,
      description: data.description || `${data.title} project log`,
      openGraph: {
        title: data.title,
        description: data.description,
        type: "article",
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(content: string) {
  const lines = content.split("\n");
  const headings: { text: string; id: string }[] = [];
  for (const line of lines) {
    const match = line.match(/^## (.+)$/);
    if (match) {
      const text = match[1].trim();
      headings.push({ text, id: slugify(text) });
    }
  }
  return headings;
}

function createHeadingComponent(tag: "h2" | "h3") {
  return function HeadingWithAnchor({ children }: { children?: ReactNode }) {
    const text = typeof children === "string" ? children : String(children ?? "");
    const id = slugify(text);
    return tag === "h2" ? (
      <h2 id={id}>{children}</h2>
    ) : (
      <h3 id={id}>{children}</h3>
    );
  };
}

const mdxComponents = {
  h2: createHeadingComponent("h2"),
  h3: createHeadingComponent("h3"),
};

export default async function ProjectPage(props: any) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const filePath = path.join(process.cwd(), "content/works", `${slug}.mdx`);

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }

  const { content, data } = matter(fileContent);
  const headings = extractHeadings(content);

  return (
    <main className="mt-10 space-y-6 max-w-prose">
      <Link
        href="/works"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors block"
      >
        &larr; Back to Works
      </Link>

      <div className="space-y-1">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl sm:text-3xl font-semibold">{data.title}</h1>
          {data.url && (
            <Link
              href={data.url}
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Globe size={16} />
            </Link>
          )}
        </div>
        {data.description && (
          <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
        )}
      </div>

      {headings.length > 1 && (
        <nav className="flex flex-wrap gap-2">
          {headings.map((h, i) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              {i + 1}. {h.text}
            </a>
          ))}
        </nav>
      )}

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none prose-h2:text-lg prose-h2:font-medium prose-h2:mt-8 prose-h2:mb-1 prose-p:leading-relaxed prose-hr:my-8 prose-hr:border-gray-200 dark:prose-hr:border-gray-800">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </main>
  );
}
