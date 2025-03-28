// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10 mt-10">
      <section>
        <h1 className="text-3xl font-bold">Hi, I'm Jaydee Tarpeh</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Liberian-born Canadian founder, product builder, and pan-African
          explorer
        </p>
        <p className="mt-4">
          I've launched startups, built software products, and worked across
          education, ecommerce, logistics, and government. I'm curently open to
          roles in product, partnerships, and platform strategy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Stuff I Like</h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            <Link
              href="https://vercel.com"
              target="_blank"
              className="underline"
            >
              Vercel
            </Link>{" "}
            - for smooth hosting
          </li>
          <li>
            <Link
              href="https://thenomadsstoa.beehiiv.com/"
              target="_blank"
              className="underline"
            >
              My writing on Beehiiv
            </Link>
          </li>
          <li>Building with small teams</li>
          <li>Local travel + African innovation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Interests</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Africa, tech, co-living, building in public, education, wellness,
          writing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Connect</h2>
        <ul className="flex gap-4 text-sm underline">
          <li>
            <Link href="https://linkedin.com/in/jaydeetarpeh" target="_blank">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="mailto:jaydee@jayd.ee" target="_blank">
              Email
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/jaydeespeaks" target="_blank">
              Instagram
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}