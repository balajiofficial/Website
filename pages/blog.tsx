import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import Post from "../components/post";
import { data } from "../data/dataBlog";
import { sortByDate } from "../utils/sortAlgo";

export default function BlogPage(): ReactElement<ReactFragment> {
  let data_new = data.sort(sortByDate);

  return (
    <Layout>
      <Head>
        <title>Blog | Balaji</title>
      </Head>

      <div className="dark:bg-gray-800 mt-5"></div>
      <div>
        <div id="blog">
          {data_new.map((post) => {
            return <Post post={post} key={post[0]} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
