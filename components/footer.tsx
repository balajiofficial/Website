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
    }
  render(): ReactElement<HTMLDivElement> {
    return (
      <div>
        <footer className="bg-gray-200 bottom-0 left-0 right-0 font-footer dark:bg-gray-600">
          <div className="max-w-screen-xl mx-auto pt-5 pb-5 dark:text-gray-300">
            <span className="text-center md:flex md:justify-evenly">
              <div>
                <p id="device"></p>
              </div>
              <h1 className="md:inline-block">
                Copyright © 2021 Balaji K |{" "}
                <a
                  href="https://github.com/balajiofficial/Website/blob/main/LICENSE"
                  target="_blank"
                  className="underline md:inline-block hover:no-underline"
                  rel="noreferrer"
                >
                  License
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
