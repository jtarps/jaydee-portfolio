import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mt-10 space-y-10 max-w-prose">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Things I think should exist</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If I looked for it and couldn&apos;t find it, I built it.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          In progress
        </h2>
        <ul className="space-y-4">
          <li className="text-sm">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              <Link
                href="https://booklinks.co"
                target="_blank"
                className="underline underline-offset-2"
              >
                BookLinks
              </Link>
            </span>{" "}
            <span className="text-gray-600 dark:text-gray-300">
              — Discover the books referenced inside the books you love.
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
