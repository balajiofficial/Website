import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import Layout from "../../layouts/pageLayout";
import BlogLayout from "../../layouts/blogLayout";

export default function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <Layout>
      <Head>
        <title>{title} - Blog | Balaji</title>
      </Head>
      <div className="flex justify-center mt-2">
        <div className="w-2/3">
          <div className="pb-3 border-b-2 dark:border-gray-400 border-gray-300 mb-2">
            <h1 className="text-5xl font-extrabold mt-3 text-center dark:text-white">
              {title}
            </h1>
            <div className="font-semibold">
              <h1 className="text-gray-600 dark:text-gray-400 text-lg text-center">
                {date}
              </h1>
            </div>
          </div>
          <div className="mr-2 ml-2 text-lg font-about">
            <BlogLayout>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </BlogLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
