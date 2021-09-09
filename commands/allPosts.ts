import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sortByDate } from "../functions/sortAlgo";

const postsDirectory = join(process.cwd(), "posts");

export function getSortedPostsData(): Array<{
  slug: string;
  title: string;
  date: string;
  desc: string;
}> {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map(
    (fileName): { slug: string; title: string; date: string; desc: string } => {
      const slug = fileName.replace(/\.mdx$/, "");

      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as {
          title: string;
          date: string;
          desc: string;
        }),
      };
    }
  );

  return allPostsData.sort(sortByDate);
}
