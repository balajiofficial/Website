import { Component, ReactElement } from "react";

export default class Footer extends Component {
  componentDidMount(): void {
    fetch("https://ipapi.co/json/")
      .then((r) => {
        r.json().then((rnew) => {
          var country_code: string = rnew["country_code"];
          document.getElementById(
            "footer"
          ).innerHTML = `<img class="inline-block" src=https://www.countryflags.io/${country_code.toLowerCase()}/flat/64.png width=24/>`;
          document.getElementById(
            "footer"
          ).innerHTML += `<p class="inline-block pl-2">${rnew["country_name"]}</p>`;
        });
      })
      .catch((e) => {
        document.getElementById("footer").innerHTML +=
          "<a class=hover:underline href=mailto:notanemail@email.com>Email</a>";
      });

    const device = this.getDeviceType();
    if (device == "Desktop") {
      window.document.getElementById(
        "device"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><p class="inline-block align-middle">Desktop</p>`;
    } else if (device == "Mobile") {
      window.document.getElementById(
        "device"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg><p class="inline-block align-middle">Mobile</p>`;
    } else {
      window.document.getElementById(
        "device"
      ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tablet"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg><p class="inline-block align-middle">Tablet</p>`;
    }
  }

  // From https://abdessalam.dev/blog/detect-device-type-javascript/
  getDeviceType = (): string => {
    const user_agent = window.navigator.userAgent;
    if (
      RegExp("(tablet|ipad|playbook|silk)|(android(?!.*mobi))", "i").test(
        user_agent
      )
    ) {
      return "Tablet";
    }
    if (
      RegExp(
        "Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)"
      ).test(user_agent)
    ) {
      return "Mobile";
    }
    return "Desktop";
  };

  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <footer className="bg-gray-200 bottom-0 left-0 right-0 font-footer dark:bg-gray-600">
          <div className="max-w-screen-xl mx-auto pt-5 pb-5 dark:text-gray-300">
            <span className="text-center md:flex md:justify-evenly">
              <div>
                <p id="device"></p>
              </div>
              <h1>
                <a
                  href="https://github.com/balajiofficial/Website/blob/main/LICENSE"
                  target="_blank"
                  className="underline hover:no-underline"
                  rel="noreferrer"
                >
                  Copyright © 2021 Balaji K
                </a>
              </h1>
              <p id="footer" className="md:inline-block"></p>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
