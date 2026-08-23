import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Challenge = {
  title: string;
  description: string;
  slug: string;
  progress: number;
  total: number;
};

export const getChallenges = (): Challenge[] => {
  const dir = path.join(process.cwd(), "content/challenges");
  const files = fs.readdirSync(dir);
  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      title: data.title,
      description: data.description,
      slug: data.slug,
      progress: data.progress,
      total: data.total,
    };
  });
};