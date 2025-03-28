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

export async function generateMetadata({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    "content/writings",
    `${params.slug}.mdx`
  );
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      title: data.title || "Writing",
      description: data.description || "Blog post by Jaydee Tarpeh",
      openGraph: {
        title: data.title,
        description: data.description,
        type: "article",
      },
    };
  } catch {
    return {
      title: "Not Found",
    };
  }
}

export default async function BlogPostPage({ params }: any) {
  const slug = params?.slug;

  if (!slug) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "content/writings", `${slug}.mdx`);

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
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
