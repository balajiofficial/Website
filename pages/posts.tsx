import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment, Component, Fragment } from "react";
import Post from "../components/post";
import { getSortedPostsData } from "../lib/posts";
import { searchAlgo } from "../utils/searchAlgo";

export async function getStaticProps() {
  let data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
}

export default class BlogPage extends Component {
  state = {
    content: (
      this.props as {
        data: Array<{ id: string; title: string; date: string; desc: string }>;
      }
    ).data,
    searchText: "",
  };

  render(): ReactElement<ReactFragment> {
    return (
      <Layout>
        <Head>
          <title>Blog | Balaji</title>
        </Head>

        <div className="dark:bg-gray-900 mt-5"></div>
        <div>
          <div className="flex justify-center">
            <div className="w-11/12 md:w-2/3">
              <div className="mb-4">
                <div className="flex justify-between w-full p-2 rounded-lg border-2 border-cyan-600 dark:border-cyan-500 dark:bg-gray-800">
                  <input
                    type="search"
                    placeholder="Search posts"
                    className=" dark:text-white font-medium font-about w-full dark:bg-gray-800"
                    spellCheck={false}
                    onChange={(e) => {
                      this.setState({ searchText: e.target.value });
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.content.map((post, index) => {
              if (searchAlgo(post, this.state.searchText))
                return <Post post={post} key={post.id} index={index} />;
              else return <Fragment></Fragment>;
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
