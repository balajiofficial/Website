import Head from "next/head";
import Layout from "../layouts/pageLayout";

export default function Blog({ children = {}, title, date }) {
  return (
    <Layout>
      <Head>
        <title>{title} - Blog | Balaji</title>
      </Head>
      <div className="flex justify-center mt-2">
        <div className="md:w-2/3 w-screen">
          <div className="pb-3 border-b-2 dark:border-gray-400 border-gray-300 mb-2">
            <h1 className="text-5xl font-extrabold mt-3 text-center dark:text-white">
              {title}
            </h1>
            <div className="font-semibold">
              <h1 className="text-gray-600 dark:text-gray-400 text-lg text-center">
                {date}
              </h1>
            </div>
            <div className="flex justify-end">
            <h1 className="text-xl font-medium dark:text-gray-300 mr-2 mt-2">By Balaji K</h1>
            </div>
          </div>
          <div className="mr-2 ml-2 text-lg font-about dark:text-gray-300">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
