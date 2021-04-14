import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Projects() {
  let content = [
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
  ];

  return (
    <Layout footer>
      <Head>
        <title>Projects | Balaji</title>
      </Head>
      <div>
        <div className="mt-4 flex justify-center">
          <div className="width2">
            {content.map((e) => {
              return (
                <div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="break-words pt-4 pb-4">
                      <div className="flex justify-between">
                        <div>
                          <a
                            href={e[3]}
                            className="hover:underline"
                            target="_blank"
                          >
                            <div className="break-words">
                              <h1 className="text-2xl font-semibold text-purple-900 hover:text-black">
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
                    <div className="pt-4 pb-4">
                      <Image
                        src={e[3] + "/blob/main/images/Screenshot.png?raw=true"}
                        alt="Screenshot"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
