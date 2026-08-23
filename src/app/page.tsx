import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  CalendarDays,
} from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jaydeetarpeh",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/jtarps",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jaydeespeaks",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@jaydeespeaks",
    icon: null,
  },
  {
    label: "Email",
    href: "mailto:jaydee@jayd.ee",
    icon: Mail,
  },
  {
    label: "Book a call",
    href: "https://calendly.com/jaydee-tarpeh/consultation",
    icon: CalendarDays,
  },
];

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V6.95a4.85 4.85 0 0 1-1.01-.26z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="mt-10 space-y-6 max-w-prose">
      <div className="flex items-center gap-4">
        <img
          src="/favicon.ico"
          alt="Jaydee"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">Hi, I&apos;m Jaydee</h1>
      </div>

      <p className="leading-relaxed text-gray-800 dark:text-gray-100">
        i like ideas. i like building stuff. not an engineer — but i like getting
        things out of my head and into the world.
        Currently building{" "}
        <Link href="https://havenathome.ca" target="_blank" className="hover:opacity-70 transition-opacity">
          Haven at Home
        </Link>.
      </p>

      <section className="space-y-1 pt-2">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 lowercase">
          about me:
        </p>
        <ul className="space-y-1 text-gray-800 dark:text-gray-100">
          <li>- raised in civil war Liberia</li>
          <li>- high school in Lesotho</li>
          <li>- university in Canada</li>
          <li>- Toronto-based since 2022</li>
          <li>- lived in Kenya, 2023 to 2024</li>
          <li>
            - a few hundred thousand followers across{" "}
            <Link
              href="https://tiktok.com/@jaydeespeaks"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              TikTok
            </Link>{" "}
            and{" "}
            <Link
              href="https://facebook.com/jaydeespeaks"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-1 pt-2">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 lowercase">
          currently:
        </p>
        <ul className="space-y-1 text-gray-800 dark:text-gray-100">
          <li>
            - shipping things
          </li>
          <li>
            - writing about it{" "}
            <Link
              href="/writings"
              className="hover:opacity-70 transition-opacity"
            >
              here
            </Link>
          </li>
          <li>- mostly between 10pm and 2am</li>
        </ul>
      </section>

      <section className="pt-4 space-y-3">
        <ul className="space-y-3">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="text-gray-400 dark:text-gray-500">
                  {s.icon ? <s.icon size={18} /> : <TikTokIcon size={18} />}
                </span>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-2 space-y-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Mostly shipping things between 10pm and 2am.
        </p>
        <img
          src="https://ghchart.rshah.org/jtarps"
          alt="GitHub contribution chart for jtarps"
          className="w-full rounded opacity-80 dark:opacity-60"
        />
      </section>

      <NewsletterSignup />
    </main>
  );
}
