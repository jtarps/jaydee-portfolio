import { getChallenges, Challenge } from "@/lib/getChallenges";
import { JoinForm } from "@/components/JoinForm";

export default function ChallengesPage() {
  const challenges: Challenge[] = getChallenges();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Challenges</h1>
      <p className="mb-8">
        A log of habit-building, skill-based, or experimental challenges I'm
        taking on.
      </p>

      <ul className="space-y-8">
        {challenges.map((challenge, idx) => {
          const percent = Math.round(
            (challenge.progress / challenge.total) * 100
          );
          return (
            <li key={idx}>
              <h2 className="text-xl font-semibold">{challenge.title}</h2>
              <p className="text-gray-600 mb-2">{challenge.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{`${challenge.progress} of ${challenge.total} days complete (${percent}%)`}</p>
              {percent === 100 && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded dark:bg-green-900 dark:text-green-100">
                  ✓ Completed
                </span>
              )}

              {challenge.slug === "no-ai-july" && (
                <>
                  <div className="prose text-sm max-w-none p-4 rounded border mb-4 bg-gray-100 border-gray-200 text-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-100">
                    <h3 className="font-semibold text-base mb-2">About the Challenge</h3>
                    <p>
                      For 30 days, I’m committing to not using any AI tools in my daily work, learning, or personal life — no ChatGPT, no Midjourney, no GitHub Copilot, no Notion AI, no voice assistants. Just me, my brain, and analog/digital tools that don’t do the thinking for me.
                    </p>
                    <p>
                      The purpose is to reset my cognitive habits, sharpen critical thinking, and reflect on what I may be outsourcing unconsciously.
                    </p>
                  </div>
                  <p className="text-sm mb-4">
                    <a href={`/challenges/${challenge.slug}`} className="text-blue-600 hover:underline">
                      View challenge details and daily logs
                    </a>
                  </p>
                </>
              )}

              <JoinForm challengeSlug={challenge.slug} />
              <p className="text-xs text-gray-500 mt-2"></p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
