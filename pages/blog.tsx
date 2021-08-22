import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import Post from "../components/post";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  let data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
}

export default function BlogPage({ data }): ReactElement<ReactFragment> {
  let data_new = data;

  return (
    <Layout>
      <Head>
        <title>Blog | Balaji</title>
      </Head>

      <div className="dark:bg-gray-800 mt-5"></div>
      <div>
        <div>
          {data_new.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
