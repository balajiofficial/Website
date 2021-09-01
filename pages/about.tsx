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
        <div className="mb-8 xl:mb-0">
          <div className="flex justify-center mt-1.5 sm:mt-5">
            <Image
              src="/profile.png"
              alt="Profile"
              width={205}
              height={215}
              className="rounded-full"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <p className="text-4xl sm:text-6xl text-gray-600 dark:text-gray-200 font-footer">
              Balaji K
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="lg:ml-0 lg:mr-0 ml-2 mr-2">
                <div className="mt-4 sm:mt-7 xl:mt-10">
                  <ul>
                    {aboutData.map((e, i) => {
                      return (
                        <li
                          key={i}
                          className={
                            "list-none" + (i == 0 ? "" : " mt-2 sm:mt-4")
                          }
                        >
                          <div className="sm:flex sm:items-center">
                            <div className="flex sm:flex-none justify-center sm:mb-0 mb-2">
                              <Image
                                src={e[0]}
                                width={35}
                                height={35}
                                alt="Image"
                                quality={50}
                              />
                            </div>
                            <div className="ml-4 text-gray-600 dark:text-gray-400 font-about text-lg">
                              <p>{e[1]}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
