import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Projects() {
  let content: Array<Array<string>> = [
    [
      "Project 1",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "12 December 2020",
      "https://github.com/K-Balaji/CompetitiveProgramming",
    ],
    [
      "Project 2",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "16 February 2019",
      "https://github.com/K-Balaji/BalaNotes",
    ],
    [
      "Project 3",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "16 February 2019",
      "https://github.com/K-Balaji/BalaNotes",
    ],
    [
      "Project 4",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "12 December 2020",
      "https://github.com/K-Balaji/DataPlotter",
    ],
    [
      "Project 5",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "12 December 2020",
      "https://github.com/K-Balaji/CompetitiveProgramming",
    ],
  ];

  let keywords: Array<Array<string>> = [
    ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
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
                      "from-red-400 to-red-600",
                      "from-green-400 to-green-800",
                      "from-yellow-400 to-yellow-700",
                      "from-purple-400 to-purple-700",
                    ][content.indexOf(e) % 5]
                  } mb-4 p-5`}
                  key={e[0]}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="break-words">
                      <div className="flex justify-between pr-2">
                        <div>
                          <a href={e[3]} target="_blank">
                            <div className="break-words">
                              <h1 className="hover:underline text-2xl font-semibold text-black hover:text-gray-800">
                                {e[0]}
                              </h1>
                            </div>
                          </a>
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
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 lg:pt-6">
                      <div className="dark:bg-indigo-700 bg-gray-300 p-3 rounded-lg">
                        <Image
                          src={
                            e[3] + "/blob/main/images/Screenshot.png?raw=true"
                          }
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
