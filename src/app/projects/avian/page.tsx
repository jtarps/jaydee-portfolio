export default function AvianPage() {
  return (
    <main className="space-y-8 mt-10">
      <h1 className="text-3xl font-bold">Avian</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        International Student Platform · 2020–2022
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">What It Is</h2>
        <p className="text-sm leading-relaxed">
          A platform that helps international students apply to universities
          abroad and manage their entire application journey — including
          scholarships, visa processing, and admissions guidance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">My Role</h2>
        <p className="text-sm leading-relaxed">
          I was the Founder & CEO. I built and led the team, formed partnerships
          with Canadian universities, designed the product, and eventually led
          the acquisition of Avian by 8B Education Investments.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Built remote teams across India, Canada, and the US</li>
          <li>Supported hundreds of student applicants from Africa</li>
          <li>
            Formed key education, scholarship, and immigration partnerships
          </li>
          <li>Platform successfully acquired in 2022</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <p className="text-sm">Python, AWS, MySQL, Bootstrap (initial build)</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Mockups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs text-gray-500">
            Mockup 1 – Replace with actual screenshot
          </div>
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs text-gray-500">
            Mockup 2 – Replace with actual screenshot
          </div>
        </div>
      </section>
    </main>
  );
}
