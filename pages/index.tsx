import Layout from "../layouts/pageLayout";
import Head from "next/head";
import { ReactElement, ReactFragment } from "react";

export default function Home(): ReactElement<ReactFragment> {
  return (
    <Layout>
      <Head>
        <title>Home | Balaji</title>
        <meta name="description" content="The Official Website of Balaji K." />
      </Head>
      <div className="dark:bg-gray-900">
        <div className="lg:pt-48 md:pt-36 sm:pt-12 pt-8">
          <h1 className="dark:text-gray-100 flex justify-center text-8xl sm:text-9xl pb-7 sm:pb-10 font-semibold font-about">
            Balaji
          </h1>
          <div className="flex justify-center mt-3 md:mt-7">
            <div className="text-white dark:text-blue-100 flex md:justify-evenly md:w-3/4 flex-col md:flex-row">
              <div className="pt-3 pb-3">
                <a
                  href="https://github.com/balajiofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <button className="bg-black hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg p-3 font-semibold h-14 hover:shadow-lg">
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
                <a href="" className="text-white">
                  <button
                    className="bg-blue-500 hover:bg-blue-400 rounded-lg p-3 font-semibold h-14 hover:shadow-lg"
                    onClick={() => {
                      alert("No Twitter account created yet");
                    }}
                  >
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
                <a href="" className="text-white">
                  <button
                    className="bg-gradient-to-tl from-red-600 via-purple-600 to-blue-600 rounded-lg p-3 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 font-semibold h-14 hover:shadow-lg"
                    onClick={() => {
                      alert("No Instagram account created yet");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current inline-block h-8 w-8"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>

                    <p className="inline-block text-lg align-middle ml-1.5">
                      Instagram
                    </p>
                  </button>
                </a>
              </div>
              <div className="pt-3 pb-3">
                <a href="mailto:notanemail@email.com" className="text-white">
                  <button className="bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg p-3 font-semibold h-14 hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 inline-block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
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
