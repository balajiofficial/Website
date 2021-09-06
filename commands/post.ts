import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import { remark } from "remark";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "posts");

export function getAllPostIds(): Array<{
  params: {
    slug: string;
  };
}> {
  const fileNames = readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<{
  slug: string;
  contentHtml: string;
  time: string;
  content: string;
  title: string;
  date: string;
  desc: string;
}> {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const reading_time = readingTime(fileContents);
  const time =
    reading_time.minutes >= 1
      ? Math.ceil(reading_time.minutes) + " minutes"
      : Math.ceil(reading_time.minutes * 60) + " seconds";

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    time,
    content: matterResult.content,
    ...(matterResult.data as {
      title: string;
      date: string;
      desc: string;
    }),
  };
}
