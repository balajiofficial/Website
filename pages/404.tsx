import Layout from "../layouts/pageLayout";
import Link from "next/link";
import { ReactElement, ReactFragment } from "react";
import PageSEO from "../components/seo";

export default function FourOFour(): ReactElement<ReactFragment> {
  return (
    <Layout footer={false}>
      <PageSEO title="Error 404" />
      <div className="dark:bg-gray-900">
        <div className="pt-4">
          <p className="flex justify-center align-middle pt-60 text-4xl font-extrabold text-center dark:text-gray-300">
            Error 404 - Page Not Found
          </p>
          <div className="mt-3 flex justify-center">
            <Link href="/" passHref>
              <div className="cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">
                <p className="p-1 pl-2 pr-2 text-blue-600 hover:text-blue-500 text-lg dark:text-blue-300 dark:hover:text-blue-200">
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
