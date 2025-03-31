import { notFound } from "next/navigation";
import Link from "next/link";

interface ProjectProps {
  params: {
    slug: string;
  };
}

const projects = {
  "uncle-ke": {
    title: "Uncle.ke",
    subtitle: "Appliance as a Service platform for Africa · 2023–2024",
    what: "A circular economy platform to help people rent appliances instead of buying them. Based in Kenya, this was one of the first subscription-based models for household essentials in Africa.",
    role:
      "I was the Founder & CEO. I built a small team, led product, partnerships, and go-to-market strategy, and funded most of the project with my own capital plus $10K in pre-seed capital from family to launch the pilot.",
    outcomes: [
      "20% growth in customer acquisition in first 3 months",
      "Built partnerships with manufacturers and last-mile delivery providers",
      "Launched sustainable brand campaign around “access over ownership”",
    ],
    tech: "TypeScript, SCSS, HTML/CSS, JavaScript, PostgreSQL, AWS, Vercel",
  },
  avian: {
    title: "Avian",
    subtitle: "International Student Platform · 2020–2022",
    what: "A platform that helps international students apply to universities abroad and manage their entire application journey — including scholarships, visa processing, and admissions guidance.",
    role:
      "I was the Founder & CEO. I built and led the team, formed partnerships with Canadian universities, designed the product, and eventually led the acquisition of Avian by 8B Education Investments.",
    outcomes: [
      "Built remote teams across India, Canada, and the US",
      "Supported hundreds of student applicants from Africa",
      "Formed key education, scholarship, and immigration partnerships",
      "Platform successfully acquired in 2022",
    ],
    tech: "Python, AWS, MySQL, Bootstrap (initial build)",
  },
  "mento-card": {
    title: "Mento Card",
    subtitle: "Digital business card platform (QR + NFC) · 2022–2023",
    what: "A solo-built platform to create and share digital business cards using QR codes and NFC. Built for founders, creators, and professionals.",
    role:
      "I designed, built, and marketed the product myself using Bubble.io. Managed everything from UX to integrations and customer onboarding.",
    outcomes: [
      "Launched MVP in 3 weeks",
      "Over 500 cards created in beta phase",
      "Integrated NFC tags for in-person networking",
    ],
    tech: "Bubble.io, custom domain + scripts",
  },
  "evisa-platform": {
    title: "Evisa Platform",
    subtitle: "Online visa processing platform · 2022–Present",
    what: "A platform to help simplify visa applications for travelers, starting with Liberia.",
    role:
      "Spearheaded UX, content, and front-end development. Streamlined visa steps and introduced automation for application tracking and notifications.",
    outcomes: [
      "Increased application conversion rates by 40%",
      "Integrated real-time updates and status checks",
      "Reduced support tickets through better design and guidance",
    ],
    tech: "TypeScript, MongoDB, Vercel, Resend, Cloudinary",
  },
  "hawa-coliving": {
    title: "Hawa Coliving",
    subtitle: "Coliving project for digital nomads in Africa · 2023–Present",
    what: "Concept and pilot for coliving spaces tailored for remote workers and digital nomads traveling across Africa.",
    role:
      "Researched markets, coordinated pilots in Kenya, and built landing pages and forms for early community building.",
    outcomes: [
      "Piloted first stays in Nairobi",
      "Generated over 100 signups in 3 weeks",
      "Featured in digital nomad communities and newsletters",
    ],
    tech: "Canva, Typeform, Notion, Webflow (MVP)",
  },
  "mortgagemate-ai": {
    title: "MortgageMate AI",
    subtitle: "AI tool for mortgage underwriting · 2024–Present",
    what: "Built a prototype to help automate underwriting decisions for mortgage agents using AI and OCR.",
    role:
      "Spearheaded AI integration, document analysis flows, and user-friendly dashboard. Led testing with early users and mortgage brokers.",
    outcomes: [
      "Automated T4 and paystub extraction",
      "Implemented risk scoring using LLMs",
      "Created version with Streamlit for fast demos",
    ],
    tech: "Python, Streamlit, OpenAI, Pandas, OCR libraries",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: ProjectProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      <Link
        href="/works"
        className="text-sm text-gray-500 dark:text-gray-400 hover:underline mb-4 inline-block"
      >
        ← Back to Works
      </Link>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        {project.subtitle}
      </p>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-1">What It Is</h2>
        <p>{project.what}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-1">My Role</h2>
        <p>{project.role}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-1">Outcomes</h2>
        <ul className="list-disc pl-5 space-y-1">
          {project.outcomes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-1">Tech Stack</h2>
        <p>{project.tech}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-1">Mockups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className="bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            Mockup 1 – Replace with actual screenshot
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            Mockup 2 – Replace with actual screenshot
          </div>
        </div>
      </section>
    </main>
  );
}
