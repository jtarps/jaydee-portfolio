// src/app/contact/page.tsx

import Link from "next/link";

export default function ContactPage() {
    return (
      <main className="space-y-10 mt-10">
        <section>
          <h1 className="text-2xl font-semibold mb-4">Let's Connect</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Whether you're reaching out about a project, partnership, or just
            want to say hello - I'd love to hear from you.
          </p>
        </section>

        <section>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <Link href="mailto:jaydee@jayd.ee" className="underline">
                jaydee@jayd.ee
              </Link>
            </li>
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <Link
                href="https://linkedin.com/in/jaydeetarpeh"
                target="_blank"
                className="underline"
              >
                linkedin.com/in/jaydeetarpeh
              </Link>
            </li>
            <li>
              <span className="font-medium">Instagram:</span>{" "}
              <Link
                href="https://instagram.com/jaydeespeaks"
                target="_blank"
                className="underline"
              >
                @jaydeespeaks
              </Link>
            </li>
            <li>
              <span className="font-medium">Calendly:</span>{" "}
              <Link
                href="https://calendly.com/jaydeetarpeh"
                target="_blank"
                className="underline"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </section>
      </main>
    );
}