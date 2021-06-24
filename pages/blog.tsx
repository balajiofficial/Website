import Layout from "../components/layout";
import Head from "next/head";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | Balaji</title>
      </Head>

      <div className="dark:bg-gray-800 p-bottom">
        <div className="flex justify-center pt-72 pb-32">
          <div className="pb-2">
            <h1 className="text-4xl font-semibold dark:text-blue-300">
              Blog Coming Soon...
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
