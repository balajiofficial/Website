import Link from "next/link";
import Image from "next/image";
import { Component } from "react";

export default class NavBar extends Component {
  themeChange = () => {
    window.document
      .getElementsByTagName("body")[0]
      .setAttribute(
        "class",
        window.document.getElementsByTagName("body")[0].getAttribute("class") ==
          "dark"
          ? "light"
          : "dark"
      );
  };

  render() {
    return (
      <nav className="nav shadow-lg text-lg bg-gradient-to-br from-pink-600 to-blue-600 text-white dark:text-indigo-200 dark:from-purple-700 dark:to-blue-700">
        <div>
          <ul className="flex justify-evenly font-medium">
            <Link href="/">
              <a>
                <li className="mt-3" key="home">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={41}
                    height={43}
                    className="rounded-full"
                  />
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li
                  key="about"
                  className="hover:text-gray-900 border-b-2 border-transparent hover:border-black"
                >
                  About
                </li>
              </a>
            </Link>
            <Link href="/projects">
              <a>
                <li
                  key="projects"
                  className="hover:text-gray-900 border-b-2 border-transparent hover:border-black"
                >
                  Projects
                </li>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <li
                  key="blog"
                  className="hover:text-gray-900 border-b-2 border-transparent hover:border-black"
                >
                  Blog
                </li>
              </a>
            </Link>
            <a className="mt-5">
              <li key="mode" onClick={this.themeChange}>
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
              </li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
