import { notFound } from "next/navigation";
import Link from "next/link";
import challenges from "@/data/challenges.json";
import { JoinForm } from "@/components/JoinForm";

export default function ChallengePage({ params }: any) {
  const challenge = challenges.find((c) => c.slug === params.slug);

  if (!challenge) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/challenges"
        className="mb-4 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to Challenges
      </Link>
      <h1 className="text-3xl font-bold mb-2">{challenge.title}</h1>
      <p className="text-gray-500 mb-4">{challenge.subtitle}</p>

      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-1">About the Challenge</h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {challenge.description}
        </p>
      </div>

      <div className="mb-6">
        <JoinForm challengeSlug={params.slug} />
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-2">Daily Log</h2>
        <div className="space-y-2">
          {challenge.dailyLog.map((entry, i) => (
            <details key={i} className="bg-yellow-100 border px-4 py-2 rounded">
              <summary className="font-medium">Day {i + 1}</summary>
              <p className="mt-2 text-sm">{entry}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
