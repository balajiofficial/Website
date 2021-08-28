import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import readingTime from "reading-time";
import CodeLayout from "../../layouts/codeLayout";

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
    <Layout footer>
      <Head>
        <title>{postData.title} - Blog | Balaji</title>
      </Head>
      <div className="flex justify-center mt-2">
        <div className="md:w-2/3 w-screen">
          <div className="pb-2 dark:border-gray-400 border-gray-300 mb-2">
            <p className="text-5xl font-bold mt-3 text-center dark:text-white">
              {postData.title}
            </p>
            <div className="font-about mb-4">
              <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
                {postData.date}
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <div>
                  <div className="text-lg font-about text-gray-500 dark:text-gray-300 ml-1">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="align-middle">
                        {readingTime(postData.content).minutes >= 1
                          ? Math.ceil(readingTime(postData.content).minutes) +
                            " minutes"
                          : Math.ceil(
                              readingTime(postData.content).minutes * 60
                            ) + " seconds"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="font-about text-gray-500 dark:text-gray-300 text-lg mr-1">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/profile.png"
                      width={30}
                      height={31.5}
                      alt="Profile"
                    />
                    <p>Balaji K</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="mr-2 ml-2 text-lg font-about dark:text-gray-300">
            <CodeLayout />
            <div
              dangerouslySetInnerHTML={{
                __html: postData.contentHtml,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
