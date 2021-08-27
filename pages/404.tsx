import Layout from "../layouts/pageLayout";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, ReactFragment } from "react";

export default function FourOFour(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Error 404 | Balaji</title>
      </Head>
      <div className="dark:bg-gray-900">
        <div className="pt-4">
          <p className="flex justify-center align-middle pt-60 text-4xl font-extrabold text-center dark:text-gray-300">
            Error 404 Page Not Found
          </p>
          <div className="pt-2 flex justify-center">
            <Link href="/" passHref>
              <div className="cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">
                <p className="p-3 text-blue-600 hover:text-blue-500 text-lg dark:text-blue-300 dark:hover:text-blue-200">
                  Return to Home Page
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
