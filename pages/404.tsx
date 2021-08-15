import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, ReactFragment } from "react";

export default function FourOFour(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Error 404 | Balaji</title>
      </Head>
      <div className="dark:bg-gray-800">
        <div className="pt-4">
          <p className="flex justify-center align-middle pt-60 text-4xl font-extrabold text-center dark:text-gray-300">
            Error 404 Page Not Found
          </p>
          <div className="pt-2 flex justify-center">
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
