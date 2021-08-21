import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import React from "react";
import BlogComponent from "../../layouts/blog";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - Blog | Balaji</title>
      </Head>
      <div className="flex justify-center mt-2">
        <div className="md:w-2/3 w-screen">
          <div className="pb-3 border-b-2 dark:border-gray-400 border-gray-300 mb-2">
            <h1 className="text-5xl font-extrabold mt-3 text-center dark:text-white">
              {postData.title}
            </h1>
            <div className="font-semibold">
              <h1 className="text-gray-600 dark:text-gray-400 text-lg text-center">
                {postData.date}
              </h1>
            </div>
            <div className="flex justify-end">
              <h1 className="text-xl font-medium dark:text-gray-300 mr-2 mt-2">
                By Balaji K
              </h1>
            </div>
          </div>
          <div className="mr-2 ml-2 text-lg font-about dark:text-gray-300">
            <BlogComponent>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </BlogComponent>
          </div>
        </div>
      </div>
    </Layout>
  );
}
