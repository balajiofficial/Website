import { Component, ReactElement } from "react";

export default class Footer extends Component {
  state = {
    device: "",
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
  }

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <footer className="bg-gray-200 bottom-0 left-0 right-0 font-footer dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto pt-3 pb-3 dark:text-gray-300">
            <span className="text-center md:flex md:justify-evenly">
              <div>
                <a
                  href="https://github.com/balajiofficial/Website/blob/main/LICENSE"
                  target="_blank"
                  className="text-black dark:text-gray-300 hover:no-underline border-b-2 border-black hover:border-transparent dark:border-gray-300 dark:hover:border-transparent"
                  rel="noreferrer"
                >
                  License
                </a>
              </div>
              <div className="mt-1 sm:mt-0">Copyright © 2021 Balaji K</div>
              <div>
                <div>
                  {this.state.device == "Desktop" ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 inline-block mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="inline-block align-middle">Desktop</p>
                    </div>
                  ) : this.state.device == "Mobile" ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 mr-1 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="inline-block align-middle">Mobile</p>
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 inline-block mr-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="4"
                          y="2"
                          width="16"
                          height="20"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
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
