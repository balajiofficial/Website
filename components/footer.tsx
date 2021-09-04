import { Component, ReactElement } from "react";
import Link from "next/link";

export default class Footer extends Component {
  state = {
    device: "",
    fixEnd: false,
  };

  getDeviceType = (): string => {
    const user_agent = window.navigator.userAgent;
    return RegExp("(tablet|ipad|playbook|silk)|(android(?!.*mobi))", "i").test(
      user_agent
    )
      ? "Tablet"
      : RegExp(
          "Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)"
        ).test(user_agent)
      ? "Mobile"
      : "Desktop";
  };

  componentDidMount() {
    const device = this.getDeviceType();
    this.setState({ device: device });
    this.setState({
      fixEnd:
        location.href.endsWith("/about") || location.href.endsWith("/credits"),
    });
  }

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <footer
          className={`bg-gray-200 bottom-0 left-0 right-0 font-footer dark:bg-gray-800 ${
            this.state.fixEnd ? "xl:absolute" : ""
          }`}
        >
          <div className="mx-auto pt-3 pb-3 dark:text-gray-300">
            <span className="text-center sm:flex sm:justify-evenly">
              <div>
                <Link href="/credits">
                  <a className="text-black dark:text-gray-300 hover:no-underline border-b-2 hover:border-black border-transparent dark:border-gray-300 dark:hover:border-transparent">
                    Credits
                  </a>
                </Link>
              </div>
              <div className="mb-1 md:mb-0">
                <a
                  href="https://github.com/balajiofficial/Website/blob/main/LICENSE"
                  target="_blank"
                  className="text-black dark:text-gray-300 hover:no-underline border-b-2 border-black hover:border-transparent dark:border-gray-300 dark:hover:border-transparent"
                  rel="noreferrer"
                >
                  Copyright © 2021 Balaji K
                </a>
              </div>
              <div>
                <div>
                  {this.state.device == "Desktop" ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline-block mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.4}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="inline-block align-middle">Desktop</p>
                    </div>
                  ) : this.state.device == "Mobile" ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="inline-block align-middle">Mobile</p>
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline-block mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="inline-block align-middle">Tablet</p>
                    </div>
                  )}
                </div>
              </div>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
