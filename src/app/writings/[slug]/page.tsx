import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/writings");
  const files = await fs.readdir(dir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/writings", `${slug}.mdx`);

  let fileContent: string;

  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }

  const { content, data } = matter(fileContent);

  return (
    <main className="prose prose-neutral dark:prose-invert max-w-none mt-10 space-y-6">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </main>
  );
}
