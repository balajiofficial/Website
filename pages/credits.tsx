import Head from "next/head";
import Layout from "../layouts/pageLayout";

export default function CreditPage() {
  return (
    <Layout footer>
      <Head>
        <title>Credits | Balaji</title>
      </Head>
      <div className="mb-3">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="text-6xl sm:text-8xl font-extrabold mt-4 text-gray-900 dark:text-white">
                Credits
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-8">
          <div className="w-10/12 sm:w-3/4 lg:w-1/2 text-xl font-about text-gray-600 dark:text-gray-300">
            <p>
              The icons on this site have been used from the following sites -{" "}
            </p>
            <ul className="mt-1">
              <li>
                <a
                  href="https://heroicons.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heroicons
                </a>
              </li>
              <li>
                <a
                  href="https://www.freepik.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Freepik
                </a>
              </li>
              <li>
                <a
                  href="https://feathericons.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Feather Icons
                </a>
              </li>
            </ul>
            <p>
              The site has been created using a{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React.js
              </a>{" "}
              framework called{" "}
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                Next.js
              </a>{" "}
              and has been deployed on{" "}
              <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                Vercel
              </a>
              .
            </p>
            <p className="mt-1">
              It uses{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{" "}
              for styling.
            </p>
            <p className="mt-1">
              Fonts have been imported from{" "}
              <a
                href="https://fonts.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Google Fonts
              </a>
              .
            </p>
            <p className="mt-1">The following fonts have been used - </p>
            <ul className="mt-1">
              <li>
                <a
                  href="https://github.com/microsoft/cascadia-code"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cascadia Code
                </a>
              </li>
              <li>
                <a
                  href="https://fonts.google.com/specimen/Quicksand"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quicksand
                </a>
              </li>
              <li>
                <a
                  href="https://fonts.google.com/specimen/Roboto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Roboto
                </a>
              </li>
              <li>
                <a
                  href="https://www.jetbrains.com/lp/mono/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jetbrains Mono
                </a>
              </li>
            </ul>
            <p>
              The blogs were written in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Markdown"
                target="_blank"
                rel="noreferrer"
              >
                Markdown
              </a>{" "}
              and converted to HTML using{" "}
              <a href="https://remark.js.org/" target="_blank" rel="noreferrer">
                Remark.js
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
