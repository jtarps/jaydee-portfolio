// src/app/works/page.tsx
import Link from "next/link";

export default function WorksPage() {
    return (
      <main className="space-y-14 mt-10">
        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects I've Built</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Uncle</strong> - Appliance subscription platform for
              Africa.
              <Link href="/projects/uncle-ke" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
            <li>
              <strong>Avian</strong> - International student recruitment
              platform
              <Link href="/projects/avian" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
            <li>
              <strong>Mento Card</strong> - Digital business card platform (QR +
              NFC). Solo built on Bubble.
              <Link href="/projects/mento" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
            <li>
              <strong>Evisa Platfrom</strong> - Streamlined online visa
              processing platform for a developing country
              <Link href="/projects/evisa" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
            <li>
              <strong>Hawa Coliving</strong> - Coliving project to help digital
              nomads live and work in beautiful locations across Africa.
              <Link href="/projects/hawa" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
            <li>
              <strong>MortgageMate AI</strong> - A tool to automate mortgage
              underwriting for independate mortgage agents. Built with OpenAi
              and Streamlit.
              <Link href="/projects/mortgagemate" className="ml-2 underline">
                View Case Study
              </Link>
            </li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Where I’ve Worked</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>
                <Link href="https://uncle.ke" target="_blank" className="underline">
                  Uncle.ke
                </Link>
              </strong> — CEO & Founder (2023 – 2024)
              <p>
                Pioneered appliance rental in Kenya. Led ops, funding, and
                growth strategy.
              </p>
            </li>
            <li>
              <strong>
                <Link href="https://www.8b.africa" target="_blank" className="underline">
                  8B Education Investments
                </Link>
              </strong> — VP, Partnerships (2022 – 2023)
              <p>
                Drove education financing partnerships, enrollment growth, and
                digital outreach.
              </p>
            </li>
            <li>
              <strong>
                <Link href="https://www.avianedu.com" target="_blank" className="underline">
                  Avian
                </Link>
              </strong> — Founder & CEO (2020 – 2022)
              <p>
                Built student recruitment platform. Acquired by 8B Education
                Investments.
              </p>
            </li>
            <li>
              <strong>
                <Link href="https://www.pearson.com" target="_blank" className="underline">
                  Pearson Education
                </Link>
              </strong> — Sales & Editorial Rep (2017 – 2019)
              <p>
                Managed university accounts and aligned textbooks with learning
                outcomes.
              </p>
            </li>
            <li>
              <strong>
                <Link href="https://1millionteachers.com" target="_blank" className="underline">
                  1 Million Teachers
                </Link>
              </strong> — Head of Partnerships (2019 – 2020)
              <p>
                Scaled nonprofit teacher education in Africa through strategic
                partnerships.
              </p>
            </li>
          </ul>
        </section>

        {/* OTHER WORK */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Work</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>@JaydeeSpeaks (tiktok)</strong> — Influencer. Over 50K+
              followers, 20m views, 2m likes.
            </li>
            <li>
              <strong>Ten Thousand Africans Podcast</strong> — Host. Over 10K+
              downloads.
            </li>
            <li>
              <strong>Freelance Consultant + Explorer</strong> — Built and
              tested products while traveling through 6 African countries.
            </li>
            <li>
              <strong>President, University of Windsor Students’ Union</strong>{" "}
              — Led $7M nonprofit. Created UPass and campus bike-share.
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-sm">
            <strong>University of Windsor</strong> — B.Sc. in Biology &
            Economics (Minor in Business Administration)
          </p>
        </section>

        {/* TOOLBOX */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="underline"
            >
              Next.js
            </Link>
            <Link
              href="https://vercel.com"
              target="_blank"
              className="underline"
            >
              Vercel
            </Link>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              className="underline"
            >
              Tailwind CSS
            </Link>
            <Link
              href="https://bubble.io"
              target="_blank"
              className="underline"
            >
              Bubble
            </Link>
            <Link
              href="https://streamlit.io"
              target="_blank"
              className="underline"
            >
              Streamlit
            </Link>
            <Link
              href="https://canva.com"
              target="_blank"
              className="underline"
            >
              Canva
            </Link>
            <Link
              href="https://figma.com"
              target="_blank"
              className="underline"
            >
              Figma
            </Link>
            <Link
              href="https://aws.amazon.com"
              target="_blank"
              className="underline"
            >
              AWS
            </Link>
          </div>
        </section>
      </main>
    );
}