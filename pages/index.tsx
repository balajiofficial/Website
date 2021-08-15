import Layout from "../components/layout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";

export default function Home(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Home | Balaji</title>
        <meta name="description" content="The Official Website of Balaji K." />
      </Head>
      <div className="dark:bg-gray-800">
        <div className="lg:pt-48 md:pt-36 sm:pt-12 pt-8">
          <h1 className="dark:text-blue-200 flex justify-center text-8xl sm:text-9xl pb-7 sm:pb-10 font-semibold">
            Balaji
          </h1>
          <div className="flex justify-center">
            <div className="text-white dark:text-blue-100 flex md:justify-evenly md:w-3/4 flex-col md:flex-row">
              <div className="pt-3 pb-3">
                <a
                  href="https://github.com/balajiofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-black hover:bg-gray-700 rounded-lg p-3 font-semibold h-14 hover:shadow-lg">
                    <div className="whitespace-nowrap">
                      <svg
                        height="32"
                        className="fill-current inline-block w-10 pr-1"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="32"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                      <p className="inline-block text-lg align-middle">
                        Github
                      </p>
                    </div>
                  </button>
                </a>
              </div>
              <div className="pt-3 pb-3">
                <a href="#" target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-400 rounded-lg p-3 font-semibold h-14 hover:shadow-lg">
                    <div className="whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        className="fill-current inline-block w-10 pr-1"
                      >
                        <g>
                          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </g>
                      </svg>
                      <p className="inline-block text-lg align-middle">
                        Twitter
                      </p>
                    </div>
                  </button>
                </a>
              </div>
              <div className="pt-3 pb-3">
                <a href="#" target="_blank">
                  <button className="bg-gradient-to-tl from-red-600 via-purple-600 to-blue-600 rounded-lg p-3 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 font-semibold h-14 hover:shadow-lg">
                    <svg
                      fill="#ffffff"
                      xmlns="http://www.w4.org/2000/svg"
                      className="inline-block w-10 pr-1"
                      viewBox="0 0 26 26"
                      width="26px"
                      height="26px"
                    >
                      <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" />
                    </svg>
                    <p className="inline-block text-lg align-middle">
                      Instagram
                    </p>
                  </button>
                </a>
              </div>
              <div className="pt-3 pb-3">
                <a href="mailto:notanemail@email.com">
                  <button className="bg-indigo-600 hover:bg-indigo-500 rounded-lg p-3 font-semibold h-14 hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="inline-block text-lg align-middle pl-1">
                      Email
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
