import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment, Component, Fragment } from "react";
import Post from "../components/post";
import { searchAlgo } from "../utils/searchAlgo";
import { getSortedPostsData } from "../lib/posts";

export function getStaticProps() {
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
        data;
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

        <div className="mt-5">
          <div className="flex justify-center">
            <div className="w-11/12 md:w-2/3">
              <div className="mb-3">
                <div>
                  <div className="relative max-w-lg">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-100 border-2 border-transparent focus:border-cyan-500 rounded-md  dark:bg-gray-800 font-medium p-1 font-about "
                      placeholder="Search posts"
                      spellCheck={false}
                      onChange={(e) => {
                        this.setState({ searchText: e.target.value });
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute right-3 top-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.content.map((post, index) => {
              if (searchAlgo(post, this.state.searchText))
                return (
                  <div key={post.id}>
                    <Post post={post} keyValue={post.id} index={index} />
                  </div>
                );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
