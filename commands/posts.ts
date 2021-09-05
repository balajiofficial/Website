import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import { sortByDate } from "../utils/sortAlgo";
import { remark } from "remark";

const postsDirectory = join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(sortByDate);
}

export function getAllPostIds() {
  const fileNames = readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    content: matterResult.content,
    ...matterResult.data,
  };
}
