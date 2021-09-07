import React, { ReactFragment, Component } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../commands/post";
import PageSEO from "../../components/seo";
import BlogLink from "../../mapping/link";

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

export default class Post extends Component {
  state = {
    postData: (
      this.props as {
        postData;
      }
    ).postData,
    components: {
      a: BlogLink,
    },
  };

  componentDidMount() {
    /*
    let preElements = document.getElementsByTagName("pre");
    let codeElements = document.getElementsByTagName("code");
    let imgElements = document.getElementsByTagName("img");
    for (let i = 0; i < preElements.length; i++) {
      preElements[i].className = "bg-pre rounded-lg";
      let language = codeElements[i].className
        .replaceAll("hljs", "")
        .replaceAll(" ", "")
        .replace("language-", "");
      language = language[0].toUpperCase() + language.slice(1);
      preElements[i].innerHTML =
        `<div class="mr-6 mt-3 text-white flex justify-end"><p class="text-base pl-2 pr-2 pb-0.5 bg-blue-600 rounded-b-md">${language}</p></div>` +
        preElements[i].innerHTML;
    }
    for (let i = 0; i < codeElements.length; i++) {
      codeElements[i].className =
        "rounded-b-lg font-code font-medium text-base";
      hljs.highlightElement(codeElements[i]);
      codeElements[i].className = codeElements[i].className.replace("hljs", "");
      codeElements[i].className +=
        " pl-4 pr-4 pb-4 overflow-x-auto block bg-pre bg-code";
    }
    for (let i = 0; i < imgElements.length; i++) {
      imgElements[i].parentElement.className += "flex justify-center";
    }
    */
  }

  render(): ReactFragment {
    return (
      <Layout footer>
        <PageSEO title={this.state.postData.title + " - Post"} />
        <div className="flex justify-center mt-2 mb-2">
          <div className="lg:w-2/3 md:w-5/6 w-screen">
            <div className="pb-2 dark:border-gray-400 border-gray-300 mb-2">
              <p className="text-5xl font-bold mt-3 text-center dark:text-white">
                {this.state.postData.title}
              </p>
              <div className="font-about mb-4">
                <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
                  {this.state.postData.date}
                </p>
              </div>
              <div className="mb-3">
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
              <main>
                <MDXRemote
                  {...this.state.postData.source}
                  components={this.state.components}
                />
              </main>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
