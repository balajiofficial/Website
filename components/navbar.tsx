import Link from "next/link";
import React, { Component, ReactElement } from "react";

export default class Navbar extends Component {
  state = {
    theme: "light",
    pages: [
      { label: "Home", page: "" },
      { label: "About", page: "about" },
      { label: "Curriculum Vitae" },
      { label: "Posts", page: "posts" },
    ],
    cvMenu: false,
    cvMenuLinks: [
      { label: "Projects", page: "projects" },
      { label: "Skills", page: "skills" },
    ],
  };

  setTheme = () => {
    window.document.body.classList.add("dark:bg-gray-900");
    window.document.body.classList.add("bg-white");

    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") == "dark" ? "dark" : "light"
    );

    this.setState({ theme: localStorage.getItem("theme") });

    window.document.documentElement.classList.add(
      localStorage.getItem("theme")
    );
  };

  componentDidMount() {
    this.setTheme();
  }

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <nav className="min-h-full h-12 text-base sm:text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600  text-white dark:text-white dark:from-fuchsia-600 dark:via-indigo-600 dark:to-cyan-600">
          <div>
            <div className="flex justify-evenly font-medium">
              {this.state.pages.map((e) => {
                return e.label == "Curriculum Vitae" ? (
                  <div
                    key={e.label}
                    className="text-white hover:no-underline no-underline"
                    onClick={() => {
                      this.setState({ cvMenu: !this.state.cvMenu });
                    }}
                  >
                    <div className="cursor-pointer">
                      <div className="border-b-2 border-transparent dark:hover:border-white hover:border-white mt-2.5 sm:mt-2">
                        {e.label}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={`/${e.page}`} key={e.label} passHref>
                    <a>
                      <div className="cursor-pointer">
                        <div
                          key={e[0]}
                          className="border-b-2 border-transparent dark:hover:border-white hover:border-white mt-2.5 sm:mt-2"
                        >
                          {e.label}
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}

              <div className="mt-2 sm:mt-1.5">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    window.document.documentElement.classList.remove(
                      localStorage.getItem("theme")
                    );
                    window.localStorage.setItem(
                      "theme",
                      localStorage.getItem("theme") == "dark" ? "light" : "dark"
                    );
                    this.setState({
                      theme: localStorage.getItem("theme"),
                    });
                    window.document.documentElement.classList.add(
                      localStorage.getItem("theme")
                    );
                  }}
                >
                  <div className="p-1 rounded-lg hover:bg-blue-900 dark:hover:bg-sky-500 cursor-pointer">
                    {this.state.theme == "dark" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:h-7 sm:w-7 h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:h-7 sm:w-7 h-6 w-6"
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
        {this.state.cvMenu ? (
          <div className="flex justify-center">
            <div className="w-11/12 md:w-2/3 mt-3">
              <div className="text-lg bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="font-medium">
                  <div className="pt-2.5 pb-2.5 flex justify-evenly">
                    {this.state.cvMenuLinks.map((e) => {
                      return (
                        <Link href={`/cv/${e.page}`} passHref key={e.label}>
                          <a className="text-black dark:text-white border-b-2 border-transparent hover:border-black dark:border-transparent dark:hover:border-white">
                            <p>{e.label}</p>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
