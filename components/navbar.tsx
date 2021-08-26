import Link from "next/link";
import React, { Component, ReactElement } from "react";

export default class Navbar extends Component {
  state = {
    theme: "light",
  };

  componentDidMount(): void {
    window.document.body.classList.add("dark:bg-gray-800");
    window.document.body.classList.add("bg-white");

    localStorage.setItem(
      "balajiofficial_theme",
      localStorage.getItem("balajiofficial_theme") == "dark" ? "dark" : "light"
    );

    this.setState({ theme: localStorage.getItem("balajiofficial_theme") });

    window.document.documentElement.classList.add(
      localStorage.getItem("balajiofficial_theme")
    );
  }

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <nav className="min-h-full h-12 text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600  text-white dark:text-white dark:from-green-700 dark:via-cyan-600 dark:to-indigo-700">
          <div>
            <div className="flex justify-evenly font-medium">
              {[
                ["Home", ""],
                ["About", "about"],
                ["Projects", "projects"],
                ["Blog", "blog"],
              ].map((e) => {
                return (
                  <Link href={`/${e[1]}`} key={e[0]} passHref>
                    <div className="cursor-pointer">
                      <div
                        key={e[0]}
                        className="border-b-2 border-transparent dark:hover:border-white hover:border-white mt-2"
                      >
                        {e[0]}
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    window.document.documentElement.classList.remove(
                      localStorage.getItem("balajiofficial_theme")
                    );
                    window.localStorage.setItem(
                      "balajiofficial_theme",
                      localStorage.getItem("balajiofficial_theme") == "dark"
                        ? "light"
                        : "dark"
                    );
                    this.setState({
                      theme: localStorage.getItem("balajiofficial_theme"),
                    });
                    window.document.documentElement.classList.add(
                      localStorage.getItem("balajiofficial_theme")
                    );
                  }}
                >
                  <div className="mt-1.5 p-1 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-900 cursor-pointer">
                    {this.state.theme == "dark" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
