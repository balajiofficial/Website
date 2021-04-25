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
      "https://github.com/K-Balaji/CompetitiveProgramming",
    ],
    [
      "Project 5",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iusto nesciunt ipsam illo tempora eligendi ullam exercitationem est aspernatur obcaecati voluptates excepturi aliquam optio maxime, assumenda ea ab suscipit labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cupiditate, vitae ea quidem alias rerum voluptatum, reprehenderit ipsam perferendis odit, enim corporis labore explicabo distinctio. Sunt nostrum maxime explicabo libero?",
      "12 December 2020",
      "https://github.com/K-Balaji/CompetitiveProgramming",
    ],
  ];

  return (
    <Layout footer>
      <Head>
        <title>Projects | Balaji</title>
      </Head>
      <div className="dark:bg-gray-800">
        <div className="pt-4 flex justify-center pl-10 pr-10">
          <div className="width2">
            {content.map((e: Array<string>) => {
              return (
                <div
                  className={`rounded-lg bg-gradient-to-br ${
                    [
                      "dark:from-blue-400 dark:to-blue-700",
                      "dark:from-red-600 dark:to-pink-600",
                      "dark:from-green-400 dark:to-green-800",
                      "dark:from-yellow-400 dark:to-yellow-700",
                      "dark:from-purple-500 dark:to-purple-700",
                    ][content.indexOf(e) % 5]
                  } mb-4 p-5`}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="break-words">
                      <div className="flex justify-between pr-2">
                        <div>
                          <a href={e[3]} target="_blank">
                            <div className="break-words">
                              <h1 className="hover:underline text-2xl font-semibold text-purple-900 hover:text-black dark:text-purple-500 dark:hover:text-purple-700">
                                {e[0]}
                              </h1>
                            </div>
                          </a>
                          <p className="text-gray-500 text-sm">{e[2]}</p>
                          <div className="break-words"></div>
                          <h2 className="text-lg">{e[1]}</h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={e[3] + "/blob/main/images/Screenshot.png?raw=true"}
                        alt="Screenshot"
                        width={1920}
                        height={1080}
                      />
                    </div>
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
