"use client";
import { useState } from "react";

function NewsletterSignup() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      challenge: "newsletter",
    };

    setSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwpxhf86rXXPoyooBya5AJRpYfp8W9D7pOFOpCx6COYuXgAjHwN6GbzudKlJ2lceV0aOw/exec",
        {
          method: "POST",
          body: new URLSearchParams(payload),
        }
      );
      setMessage("You're in.");
      form.reset();
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    }
    setSubmitting(false);
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        Stay in the loop
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        No spam. Just occasional updates when I ship something.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
          />
          <button
            type="submit"
            disabled={submitting}
            className="text-sm px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 disabled:opacity-40 transition-opacity font-medium whitespace-nowrap"
          >
            {submitting ? "..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{message}</p>
        )}
      </form>
    </div>
  );
}

export default NewsletterSignup;
