import Layout from "../layouts/pageLayout";
import Image from "next/image";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";
import { content, keywords, links } from "../data/dataProjects";

export default function Projects(): ReactElement<ReactFragment> {
  return (
    <Layout footer>
      <Head>
        <title>Projects | Balaji</title>
        <meta
          name="description"
          content="Several of my projects I did over the years."
        />
      </Head>
      <div className="dark:bg-gray-800">
        <div className="pt-4 flex justify-center pl-0 pr-0 sm:pl-10 sm:pr-10 w-screen sm:w-auto">
          <ul className="xl:w-10/12">
            {content.map((e: Array<string>) => {
              return (
                <li
                  className={`rounded-none sm:rounded-lg bg-gradient-to-br ${
                    [
                      "from-blue-400 to-blue-700",
                      "from-yellow-400 to-yellow-700",
                      "from-green-400 to-green-800",
                      "from-red-400 to-red-600",
                      "from-purple-400 to-purple-700",
                    ][content.indexOf(e) % 5]
                  } mb-4 p-5`}
                  key={e[0]}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="break-words">
                      <div className="flex justify-between">
                        <div>
                          <div className="break-words">
                            <p className="text-2xl font-semibold text-black hover:text-gray-800">
                              {e[0]}
                            </p>
                          </div>
                          <p className="text-white text-sm">{e[2]}</p>
                          <div className="mb-1">
                            <ul className="flex flex-wrap">
                              {keywords[content.indexOf(e)].map(
                                (keyword: string) => {
                                  return (
                                    <li
                                      className="mr-2 rounded bg-card p-1 mt-1.5 font-semibold"
                                      key={keyword}
                                    >
                                      {keyword}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                          <p className="text-lg lg:mr-2 mr-0 font-about">
                            {e[1]}
                          </p>
                          <ul className="flex pt-2">
                            <p className="font-semibold pr-1">Links :</p>
                            {links[content.indexOf(e)].map(
                              (link: Array<string>) => {
                                return (
                                  <li key={link[0]} className="flex">
                                    <div className="text-gray-100 font-semibold inline-block">
                                      {links[content.indexOf(e)].indexOf(
                                        link
                                      ) == 0
                                        ? ""
                                        : ", "}
                                      <p className="hover:underline inline-block">
                                        <a
                                          href={link[1]}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {link[0]}
                                        </a>
                                      </p>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 lg:pt-6">
                      <div className="bg-opacity-50 bg-gray-300 p-3 rounded-lg">
                        <a href={e[3]} target="_blank" rel="noreferrer">
                          <Image
                            src={e[3]}
                            alt="Screenshot"
                            width={1920}
                            height={1080}
                            quality={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
