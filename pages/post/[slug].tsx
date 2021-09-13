import React, { ReactFragment, Component } from "react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../commands/post";
import PageSEO from "../../components/seo";
import { components } from "../../content/blogComponents";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
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

export default class Post extends Component<{
  postData: {
    slug: string;
    time: string;
    source;
    title: string;
    date: string;
    desc: string;
  };
}> {
  state = {
    postData: this.props.postData,
    components: components,
  };

  render(): ReactFragment {
    return (
      <Layout footer={true}>
        <PageSEO title={this.state.postData.title + " - Post"} />
        <div className="flex justify-center mt-2 mb-2">
          <div className="lg:w-2/3 md:w-5/6 w-screen">
            <div className="pb-2 border-b dark:border-gray-400 border-gray-300 mb-2">
              <p className="text-5xl font-bold mt-3 text-center dark:text-white">
                {this.state.postData.title}
              </p>
              <div className="font-about mb-4">
                <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
                  {this.state.postData.date}
                </p>
              </div>
              <div className="mb-1.5">
                <div className="flex justify-between">
                  <div>
                    <div className="text-lg font-about text-gray-500 dark:text-gray-300 ml-2">
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
                          {this.state.postData.time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="font-about text-gray-500 dark:text-gray-300 text-lg mr-2">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/profile.png"
                        width={26.25}
                        height={27.5625}
                        alt="Profile Pic"
                      />
                      <p>Balaji K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2 ml-2 text-lg dark:text-gray-300 leading-relaxed">
              <div>
                <MDXRemote
                  {...this.state.postData.source}
                  components={this.state.components}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
