import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function WritingsPage() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/writings"));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "content/writings", filename),
      "utf-8"
    );
    const { data } = matter(fileContent);
    return {
      title: data.title,
      slug: data.slug,
    };
  });

  return (
    <main className="space-y-14 mt-10">
      {/* Beehiiv Writings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Featured on The Nomad's Stoa
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/how-anger-can-harm-you"
              target="_blank"
              className="underline"
            >
              How anger can harm you
            </Link>
          </li>
          <li>
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/learnings-on-living-and-dying"
              target="_blank"
              className="underline"
            >
              Learnings on living and dying
            </Link>
          </li>
          <li>
            <Link
              href="https://thenomadsstoa.beehiiv.com/p/look-to-the-people-around-you"
              target="_blank"
              className="underline"
            >
              Look to the people around your for inspiration
            </Link>
          </li>
          <li>
            <Link
              href="https://thenomadsstoa.beehiiv.com/"
              target="_blank"
              className="underline"
            >
              Browse All Posts →
            </Link>
          </li>
        </ul>
      </section>

      {/* Local Writings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Other Writings</h2>
        <ul className="list-disc list-inside text-sm space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writings/${post.slug}`} className="underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}