import Link from "next/link";
import React, { Component, ReactElement } from "react";

export default class Navbar extends Component {
  changeTheme = (): void => {
    if (localStorage.getItem("balajiofficial_theme") == "dark") {
      window.document
        .getElementsByTagName("html")[0]
        .setAttribute("class", "dark");
      document.getElementById(
        "theme"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>`;

      window.document.getElementById("svg_size").setAttribute("class", "mt-2");
    } else {
      window.document.getElementsByTagName("html")[0].setAttribute("class", "");
      document.getElementById(
        "theme"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /></svg>`;

      window.document
        .getElementById("svg_size")
        .setAttribute("class", "mt-1.5");
    }
  };

  componentDidMount(): void {
    localStorage.setItem(
      "balajiofficial_theme",
      localStorage.getItem("balajiofficial_theme") == "dark" ? "dark" : "light"
    );

    window.document
      .getElementsByTagName("body")[0]
      .setAttribute("class", "dark:bg-gray-800 bg-white");
    this.changeTheme();
  }

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <nav className="min-h-full h-12 text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600  text-white dark:text-indigo-200 dark:from-green-700 dark:to-indigo-700">
          <div>
            <ul className="flex justify-evenly font-medium">
              {[
                ["Home", ""],
                ["About", "about"],
                ["Projects", "projects"],
                ["Blog", "blog"],
              ].map((e) => {
                return (
                  <Link href={`/${e[1]}`} key={e[0]} passHref={true}>
                    <a>
                      <li
                        key={e[0]}
                        className="border-b-2 border-transparent dark:hover:border-indigo-200 hover:border-white mt-2"
                      >
                        {e[0]}
                      </li>
                    </a>
                  </Link>
                );
              })}
              <a id="svg_size">
                <li
                  key="mode"
                  className="p-1 rounded-lg hover:bg-blue-900 dark:hover:bg-indigo-900 cursor-pointer"
                  onClick={() => {
                    window.localStorage.setItem(
                      "balajiofficial_theme",
                      localStorage.getItem("balajiofficial_theme") == "dark"
                        ? "light"
                        : "dark"
                    );
                    this.changeTheme();
                  }}
                >
                  <div id="theme"></div>
                </li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
