"use client";

import { useState } from "react";

interface EmailCaptureProps {
  onSuccess?: () => void;
}

export default function EmailCapture({ onSuccess }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/capture-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage("✅ Thanks! Your download will start shortly.");
      setEmail("");
      if (onSuccess) onSuccess();
      window.open("/resume.pdf", "_blank");
    } else if (res.status === 409) {
      setMessage("You've already downloaded the resume.");
    } else {
      setMessage("🚨 Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!message && (
        <>
          <input
            type="email"
            placeholder="Enter your email to download"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded-md text-sm bg-white dark:bg-neutral-800 text-black dark:text-white border-gray-300 dark:border-neutral-700"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full text-sm p-2 rounded-md transition font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </>
      )}
      {message && <p className="text-sm text-center">{message}</p>}
    </form>
  );
}
