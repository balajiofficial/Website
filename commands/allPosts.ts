import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sortByDate } from "../functions/sort";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "posts");

export function getSortedPostsData(): Array<{
  slug: string;
  title: string;
  date: string;
  desc: string;
  time: string;
}> {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map(
    (
      fileName
    ): {
      slug: string;
      title: string;
      date: string;
      desc: string;
      time: string;
    } => {
      const slug = fileName.replace(/\.mdx$/, "");

      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);
      const reading_time = readingTime(matterResult.content);
      const time =
        (reading_time.minutes >= 1
          ? Math.ceil(reading_time.minutes) + " min"
          : Math.ceil(reading_time.minutes * 60) + " sec") + " read";

      return {
        slug,
        ...(matterResult.data as {
          title: string;
          date: string;
          desc: string;
        }),
        time,
      };
    }
  );

  return allPostsData.sort(sortByDate);
}
