import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Blog() {
  let content = []

  return (
    <Layout footer>
      <Head>
        <title>Blog | Balaji</title>
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
