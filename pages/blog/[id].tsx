import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import React from "react";
import BlogComponent from "../../layouts/blog";
import readingTime from "reading-time";

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
            <p className="text-5xl font-extrabold mt-3 text-center dark:text-white">
              {postData.title}
            </p>
            <div className="font-semibold">
              <p className="text-gray-600 dark:text-gray-400 text-xl text-center">
                {postData.date}
              </p>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xl font-about font-medium text-gray-500 dark:text-gray-300 ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block mr-1 align-middle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="inline-block align-middle">
                      {readingTime(postData.content).minutes >= 1
                        ? Math.ceil(readingTime(postData.content).minutes) +
                          " minutes"
                        : Math.ceil(
                            readingTime(postData.content).minutes * 60
                          ) + " seconds"}
                    </p>
                  </div>
                </div>
                <p className="font-about font-medium text-gray-500 dark:text-gray-300 text-xl mr-1">
                  By Balaji K
                </p>
              </div>
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
