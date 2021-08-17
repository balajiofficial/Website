import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";

export default function Blog(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Blog | Balaji</title>
        <meta
          name="description"
          content="My blog. A place for me to share my thoughts with the outside world."
        />
      </Head>

      <div className="dark:bg-gray-800">
        <div className="flex justify-center md:pt-72 pt-52">
          <div className="text-center">
            <h1 className="text-4xl font-semibold dark:text-blue-300">
              Blog Coming Soon...
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
