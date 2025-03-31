import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";

export default function WorksPage() {
  return (
    <main className="space-y-14 mt-10">
      {/* PROJECTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects I've Built</h2>
        <ul className="space-y-3 text-sm">
          <li key="uncle">
            <strong>Uncle</strong> - Appliance subscription platform for Africa.
            <Link
              href="/projects/uncle-ke"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
          <li key="avian">
            <strong>Avian</strong> - International student recruitment platform
            <Link
              href="/projects/avian"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
          <li key="mento">
            <strong>Mento Card</strong> - Digital business card platform (QR +
            NFC). Solo built on Bubble.
            <Link
              href="/projects/mento-card"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
          <li key="evisa">
            <strong>Evisa Platfrom</strong> - Streamlined online visa processing
            platform for a developing country
            <Link
              href="/projects/evisa-platform"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
          <li key="hawa">
            <strong>Hawa Coliving</strong> - Coliving project to help digital
            nomads live and work in beautiful locations across Africa.
            <Link
              href="/projects/hawa-coliving"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
          <li key="mortgagemate">
            <strong>MortgageMate AI</strong> - Tool to automate mortgage
            underwriting. Built with OpenAi and Streamlit.
            <Link
              href="/projects/mortgagemate-ai"
              className="inline-block align-middle text-base ml-1"
            >
              ↗
            </Link>
          </li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Where I’ve Worked</h2>
        <div className="space-y-4">
          <ExperienceCard
            company="Uncle.ke"
            role="CEO & Founder"
            industry="#E-commerce, #Retail, #Logistics"
            years="2023 – 2024"
            description="Pioneered appliance rental in Kenya. Led ops, funding, and growth strategy."
            link="https://uncle.ke"
          />
          <ExperienceCard
            company="8B Education Investments"
            role="VP, Partnerships"
            industry="#Education Finance, #Social Impact, #International Students"
            years="2022 – 2023"
            description="Drove education financing partnerships, enrollment growth, and digital outreach."
            link="https://www.8b.africa"
          />
          <ExperienceCard
            company="Avian"
            role="Founder & CEO"
            industry="#EdTech, #Student Recruitment"
            years="2020 – 2022"
            description="Built student recruitment platform. Acquired by 8B Education Investments."
            link="https://www.avianedu.com"
          />
          <ExperienceCard
            company="Pearson Education"
            role="Sales & Editorial Rep"
            industry="#Publishing, #Higher Education"
            years="2017 – 2019"
            description="Managed university accounts and aligned textbooks with learning outcomes."
            link="https://www.pearson.com"
          />
          <ExperienceCard
            company="1 Million Teachers"
            role="Head of Partnerships"
            industry="#Education, #Nonprofit, #E-Learning"
            years="2019 – 2020"
            description="Scaled nonprofit teacher education in Africa through strategic partnerships."
            link="https://1millionteachers.com"
          />
        </div>
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
            <strong>Freelance Consultant + Explorer</strong> — Built and tested
            products while traveling through 6 African countries.
          </li>
          <li>
            <strong>President, University of Windsor Students’ Union</strong> —
            Led $7M nonprofit. Created UPass and campus bike-share.
          </li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-sm">
          <strong>University of Windsor</strong> — B.Sc. in Biology & Economics
          (Minor in Business Administration)
        </p>
      </section>

      {/* TOOLBOX */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="https://nextjs.org" target="_blank" className="underline">
            Next.js
          </Link>
          <Link href="https://vercel.com" target="_blank" className="underline">
            Vercel
          </Link>
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="underline"
          >
            Tailwind CSS
          </Link>
          <Link href="https://bubble.io" target="_blank" className="underline">
            Bubble
          </Link>
          <Link
            href="https://streamlit.io"
            target="_blank"
            className="underline"
          >
            Streamlit
          </Link>
          <Link href="https://canva.com" target="_blank" className="underline">
            Canva
          </Link>
          <Link href="https://figma.com" target="_blank" className="underline">
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
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center mt-4 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
      >
        download my resume →
      </a>
    </main>
  );
}
