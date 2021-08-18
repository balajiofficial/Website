import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import Post from "../components/post";
import matter from "gray-matter";
import { sortByDate } from "../utils/sortAlgo";

export default function Blog({ posts }): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Blog | Balaji</title>
      </Head>

      <div className="dark:bg-gray-800 mt-5"></div>
      <div>
        <div id="blog">
          {posts.map((post) => {
            return <Post key={post.slug} post={post} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = readdirSync(join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = readFileSync(join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
