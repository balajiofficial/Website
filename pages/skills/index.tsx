import Link from "next/link";
import Layout from "../../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";

export default function Skills(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Skills | Balaji</title>
      </Head>
      <div className="flex justify-center">
        <div className="mt-56">
          <Link href="/skills/projects" passHref>
            <a className="text-black dark:text-white hover:no-underline hover:text-blue-600 dark:hover:text-cyan-500">
              <p className="text-5xl font-bold">Projects</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-7">
          <Link href="/skills/skills" passHref>
            <a className="text-black dark:text-white hover:no-underline hover:text-blue-600 dark:hover:text-cyan-500">
              <p className="text-5xl font-bold">Skills</p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
