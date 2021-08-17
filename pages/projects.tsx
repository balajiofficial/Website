import Layout from "../layouts/pageLayout";
import Image from "next/image";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";

export default function Projects(): ReactElement<ReactFragment> {
  let content: Array<Array<string>> = [
    [
      "Data Plotter",
      "Data Plotter is a software that can be used to read .xlsx and .csv files to plot different types of graphs. The GUI of the app has been created with tkinter. It has different GUI themes and all matplotlib's graph themes. The app uses pandas to read data files and uses matplotlib to plot this data to a graph. Data Plotter can be used by non developers and by developers who do not wish to spend time implementing their own programs.",
      "April 2021",
      "https://github.com/balajiofficial/DataPlotter/blob/main/images/Screenshot.png?raw=true",
    ],
    [
      "Website",
      "This uses github pages to redirect to the main site. The main site has been created using next.js, react and typescript. It uses cookies to store the user's theme choice. It uses Tailwind CSS for the UI. Nextjs enables the site to open web pages fast without reloading the website. Using react means components like the navigation bar and the footer don't have to repeated everytime and projects can be dynamically rendered.",
      "April 2021",
      "https://github.com/balajiofficial/balajiofficial.github.io/blob/main/images/Screenshot.png?raw=true",
    ],
    [
      "EncryptCLI",
      "EncryptCLI is a command line tool that encrypts documents. This program is written in golang and uses the golang standard library. It converts unicode text to an unintelligible document filled with numbers. It creates a pseudo-random key to encrypt each character in the document. It can encrypt documents with unicode characters. Since it's a command line tool it works by using the command prompt in windows.",
      "March 2021",
      "https://github.com/balajiofficial/EncryptCLI/blob/main/images/Screenshot.png?raw=true",
    ],
    [
      "Bala Notes",
      "Bala Notes is an open source desktop app created for taking notes. It was created using frontend technologies like HTML, CSS and Javascript. It uses a framework called Electron to convert web apps into functioning desktop apps. The app has a great UI thanks to the Tailwind CSS framework and works on high resolution systems as well but it is very ram and storage heavy because of the chromium engine used by electron.",
      "March 2021",
      "https://github.com/balajiofficial/BalaNotes/blob/main/images/Screenshot.png?raw=true",
    ],
    [
      "Competitive Programming",
      "This is a github repository is a library of my codes for some competitive programming problems and competitions. It includes codes for USACO, Codeforces and other such competitive programming platforms. It also has codes for several algorithms and data structures. The codes have been written in C++ because of its incredible fast runtime and the algorithm and data structures support provided by the C++ Standard Library.",
      "December 2020",
      "https://github.com/balajiofficial/CompetitiveProgramming/blob/main/images/Screenshot.png?raw=true",
    ],
  ];

  let keywords: Array<Array<string>> = [
    ["graph", "plotting", "matplotlib", "tkinter", "python"],
    [
      "vercel",
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "github-pages",
      "redirect",
    ],
    ["encryption", "command-line-tool", "unicode", "golang", "ascii"],
    ["electron", "tailwindcss", "javascript", "notes-app"],
    ["c++", "algorithm", "data-structures", "codeforces", "usaco"],
  ];

  let links: Array<Array<Array<string>>> = [
    [
      ["Github", "https://github.com/balajiofficial/DataPlotter"],
      [
        "Download",
        "https://github.com/balajiofficial/DataPlotter/releases/tag/4.0.0",
      ],
    ],
    [
      ["Github", "https://github.com/balajiofficial/Website"],
      ["Website", "https://balajiofficial.github.io"],
    ],
    [
      ["Github", "https://github.com/balajiofficial/EncryptCLI"],
      [
        "Download",
        "https://github.com/balajiofficial/EncryptCLI/releases/tag/4.0.0",
      ],
    ],
    [
      ["Github", "https://github.com/balajiofficial/BalaNotes"],
      [
        "Download",
        "https://github.com/balajiofficial/BalaNotes/releases/tag/7.0.0",
      ],
    ],
    [["Github", "https://github.com/balajiofficial/CompetitiveProgramming"]],
  ];

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
                            <h1 className="text-2xl font-semibold text-black hover:text-gray-800">
                              {e[0]}
                            </h1>
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
                          <h2 className="text-lg lg:mr-2 mr-0 font-about">
                            {e[1]}
                          </h2>
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
