import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Projects() {
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
    ["data-plotter", "graph", "plotting", "matplotlib", "python"],
    ["github-pages", "redirect", "vercel", "nextjs", "react", "typescript"],
    ["encryption", "command-line-tool", "encrypting", "unicode", "golang"],
    ["notes-app", "electron-app", "bala-notes", "notes", "javascript"],
    ["competitive-programming", "c++", "algorithm", "codeforces", "usaco"],
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
      ["Github", "https://github.com/balajiofficial/balajiofficial.github.io"],
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
      </Head>
      <div className="dark:bg-gray-800">
        <div className="pt-4 flex justify-center pl-10 pr-10">
          <ul className="width2">
            {content.map((e: Array<string>) => {
              return (
                <li
                  className={`rounded-lg bg-gradient-to-br ${
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
                      <div className="flex justify-between pr-2">
                        <div>
                          <div className="break-words">
                            <h1 className="text-2xl font-semibold text-black hover:text-gray-800">
                              {e[0]}
                            </h1>
                          </div>
                          <p className="text-white text-sm">{e[2]}</p>
                          <div className="flex mt-1 mb-1">
                            <p className="font-semibold mr-2 p-1">Keywords: </p>
                            <ul className="flex">
                              {keywords[content.indexOf(e)].map(
                                (keyword: string) => {
                                  return (
                                    <li
                                      className="mr-2 rounded font-semibold bg-card p-1"
                                      key={keyword}
                                    >
                                      {keyword}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                          <h2 className="text-lg">{e[1]}</h2>
                          <ul className="flex pt-2">
                            <p className="font-semibold pr-1">Links :</p>
                            {links[content.indexOf(e)].map(
                              (link: Array<string>) => {
                                return (
                                  <li key={link[0]} className="flex">
                                    <a href={link[1]} target="_blank">
                                      <p className="hover:underline text-gray-100 font-semibold">
                                        {(links[content.indexOf(e)].indexOf(
                                          link
                                        ) == 0
                                          ? ""
                                          : ", ") + link[0]}
                                      </p>
                                    </a>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 lg:pt-6">
                      <div className="dark:bg-indigo-700 bg-gray-300 p-3 rounded-lg ">
                        <Image
                          src={e[3]}
                          alt="Screenshot"
                          width={1920}
                          height={1080}
                          quality={1}
                        />
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
