import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function FiveZeroZero() {
  return (
    <Layout>
      <Head>
        <title>Error 500 | Balaji</title>
      </Head>
      <div className="dark:bg-gray-800 p-bottom">
        <div className="pb-24 pt-4">
          <p className="flex justify-center align-middle pt-60 text-4xl font-extrabold text-center dark:text-gray-300">
            Error 500 Page Not Found
          </p>
          <div className="pt-2 flex justify-center pb-3">
            <Link href="/">
              <a>
                <p className="p-3 text-blue-600 hover:text-blue-400 text-lg dark:text-blue-400 dark:hover:text-blue-200">
                  Return to Home Page
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
