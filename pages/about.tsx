import Layout from "../layouts/pageLayout";
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
      <div className="dark:bg-gray-800 pb-8">
        <div className="pb-3">
          <div>
            {aboutData.map((p) => {
              return (
                <div className="flex justify-center pt-2" key={p[0]}>
                  <div className="w-11/12 lg:w-3/5">
                    <p className="font-about-header font-semibold text-3xl mt-5 dark:text-blue-400">
                      {p[0]}
                    </p>
                    <p className="pt-2 text-lg dark:text-gray-400 font-about">
                      {p[1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
