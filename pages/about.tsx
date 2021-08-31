import Layout from "../layouts/pageLayout";
import Image from "next/image";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import { aboutData } from "../data/dataAbout";

export default function About(): ReactElement<ReactFragment> {
  return (
    <Layout footer>
      <Head>
        <title>About | Balaji</title>
        <meta name="description" content="About me and my passions." />
      </Head>
      <div className="dark:bg-gray-900">
        <div className="mb-4">
          <div className="flex justify-center pt-5">
            <Image
              src="/profile.png"
              alt="Profile"
              width={205}
              height={215}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-center mt-1">
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-300 font-about">
              Balaji K
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 font-about">
              Student
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="w-11/12 lg:w-3/5">
                <p className="pt-2 text-lg dark:text-gray-400 font-about">
                  {aboutData[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
