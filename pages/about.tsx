import Layout from "../layouts/pageLayout";
import Image from "next/image";
import { ReactElement, ReactFragment } from "react";
import { aboutData } from "../content/dataAbout";
import PageSEO from "../components/seo";
import Typing from "../components/typing";

export default function About(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <PageSEO title="About" />
      <div className="dark:bg-gray-900">
        <div>
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
            <div className="font-quicksand font-semibold text-gray-700 dark:text-gray-200">
              <Typing>
                {[
                  "Hello!",
                  "Bonjour!",
                  "¡Hola!",
                  "你好!",
                  "नमस्कार!",
                  "Привет!",
                  "أهلا!",
                  "Hello!",
                ]}
              </Typing>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div>
                <div className="mt-7 xl:mt-10">
                  <ul>
                    {aboutData.map((e, i) => {
                      return (
                        <li
                          key={i}
                          className={
                            "list-none" + (i == 0 ? "" : " mt-2 sm:mt-4")
                          }
                        >
                          <div className="md:flex md:items-center sm:mb-0 mb-5">
                            <div className="flex sm:flex-none justify-center mb-2 md:mb-0 ml-0 sm:ml-1">
                              <Image
                                src={e.img}
                                width={44}
                                height={44}
                                alt="Image"
                                quality={50}
                              />
                            </div>
                            <div className="ml-3 mr-2 text-gray-600 dark:text-gray-400 font-about text-xl flex sm:flex-none justify-center">
                              <p className="text-center">{e.title}</p>
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
