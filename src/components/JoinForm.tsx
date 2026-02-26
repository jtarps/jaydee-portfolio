"use client";
import { useEffect, useState } from "react";

export function JoinForm({ challengeSlug }: { challengeSlug: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(200); // base number

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbwpxhf86rXXPoyooBya5AJRpYfp8W9D7pOFOpCx6COYuXgAjHwN6GbzudKlJ2lceV0aOw/exec"
        );
        const data = await res.json();
        const filtered = data.filter(
          (entry: any) => entry.ChallengeSlug === challengeSlug
        );
        setCount(200 + filtered.length);
      } catch (err) {
        console.error("Error fetching join count:", err);
      }
    }
    fetchData();
  }, [challengeSlug]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      challenge: challengeSlug,
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
      setMessage("✅ Thanks for joining!");
      form.reset();
      setCount((prev) => prev + 1); // optimistic update
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again later.");
    }
    setSubmitting(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm px-3 py-2 rounded text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 transition"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm px-3 py-2 rounded text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 transition"
          required
        />
        <button
          type="submit"
          className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-sm px-4 py-2 rounded disabled:opacity-60 transition font-medium"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Join Challenge"}
        </button>
        {message && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {message}
          </p>
        )}
      </form>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        {count} people joined this challenge
      </p>
    </>
  );
}
