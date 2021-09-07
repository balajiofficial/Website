import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const reading_time = readingTime(fileContents);
  const time =
    reading_time.minutes >= 1
      ? Math.ceil(reading_time.minutes) + " minutes"
      : Math.ceil(reading_time.minutes * 60) + " seconds";

  const { content, data } = matter(fileContents);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    slug,
    time,
    source,
    ...data,
  };
}
