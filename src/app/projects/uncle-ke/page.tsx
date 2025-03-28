// src/app/projects/uncle-ke/page.tsx

export default function UnclePage() {
    return (
      <main className="space-y-8 mt-10">
        <h1 className="text-3xl font-bold">Uncle.ke</h1>
        <p className="text-sm text-gray-500 dark:text-graay-400">
          Appliance as a Service platform for Africa . 2023-2024
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2"> What It Is</h2>
          <p className="text-sm leading-relaxed">
            A circular economy platform to help people rent appliances instead
            of buying them. Based in Kenya, this was one of the first
            subscription-based models for household essentials in Africa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p className="text-sm leading-relaxed">
            I was the Founder & CEO. I built a small team, led product, partnerships, and
            go-to-market strategy, and funded most of the project with my own capital plus 
            $10K in pre-seed capital from family to launch the pilot.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
          <ul className="list-disc list-inside text-sm">
            <li>20% growth in customer acquisition in first 3 months</li>
            <li>
              Built partnerships with manufacturers and last-mile delivery
              providers
            </li>
            <li>
              Launched sustainable brand campaign around “access over ownership”
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-sm">
            TypeScript, SCSS, HTML/CSS, JavaScript, PostgreSQL, AWS, Vercel
          </p>
        </section>
      </main>
    );
}