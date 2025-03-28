import Link from "next/link";

type ExperienceCardProps = {
  company: string;
  role: string;
  industry: string;
  years: string;
  description: string;
  link: string;
};

export default function ExperienceCard({
  company,
  role,
  industry,
  years,
  description,
  link,
}: ExperienceCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="block border rounded-lg p-4 hover:shadow-md transition relative"
    >
      <div className="absolute top-2 right-2 text-gray-400 text-sm">↗</div>
      <div className="flex items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm text-gray-500">
            {role} — {years}
          </p>
          <p className="text-sm mt-1">{industry}</p>
          <p className="text-sm mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
