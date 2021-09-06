import Layout from "../../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import PageSEO from "../../components/seo";

export default function Skills(): ReactElement<ReactFragment> {
  return (
    <Layout footer>
      <PageSEO title="Skills" />

      <div className="mb-3">
        <div className="flex justify-center">
          <div className="mt-7">
            <p className="text-5xl font-bold dark:text-white">Skills</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="font-about text-xl text-gray-600 dark:text-gray-300 mt-5 w-max md:w-1/5">
            <li className="mt-2">
              <div>Programming Languages</div>
              <ul className="ml-10">
                <li className="mt-2">C++</li>
                <li className="mt-2">Python</li>
                <li className="mt-2">Javascript</li>
                <li className="mt-2">Typescript</li>
                <li className="mt-2">Go</li>
                <li className="mt-2">Java</li>
                <li className="mt-2">SQL</li>
              </ul>
            </li>
            <li className="mt-2">
              Languages
              <ul className="ml-10">
                <li className="mt-2">English</li>
                <li className="mt-2">French (Just Barely)</li>
                <li className="mt-2">Hindi</li>
                <li className="mt-2">Tamil</li>
              </ul>
            </li>
            <li className="mt-2">
              Frameworks
              <ul className="ml-10">
                <li className="mt-2">React.js</li>
                <li className="mt-2">Next.js</li>
                <li className="mt-2">Electron</li>
                <li className="mt-2">Matplotlib</li>
                <li className="mt-2">Tkinter</li>
                <li className="mt-2">Tailwind CSS</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
