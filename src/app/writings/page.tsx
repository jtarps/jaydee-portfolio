import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function WritingsPage() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/writings"));
  const posts = files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "content/writings", filename),
        "utf-8"
      );
      const { data } = matter(fileContent);
      return {
        title: data.title as string,
        slug: data.slug as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="mt-10 space-y-10 max-w-prose">
      <h1 className="text-2xl sm:text-3xl font-bold">Writing</h1>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Essays
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="text-sm">
              <Link
                href={`/writings/${post.slug}`}
                className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2"
              >
                {post.title}
              </Link>
              {post.date && (
                <span className="text-gray-400 dark:text-gray-500 ml-3">
                  {formatDate(post.date)}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          The Nomad&apos;s Stoa
        </h2>
        <ul className="space-y-4">
          <li className="text-sm">
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/how-anger-can-harm-you"
              target="_blank"
              className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2"
            >
              How anger can harm you
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/learnings-on-living-and-dying"
              target="_blank"
              className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2"
            >
              Learnings on living and dying
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/look-to-the-people-around-you"
              target="_blank"
              className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2"
            >
              Look to the people around you for inspiration
            </Link>
          </li>
          <li className="text-sm mt-2">
            <Link
              href="https://thenomadsstoa.beehiiv.com/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Browse all posts →
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
