import { Component } from "react";

export default class Footer extends Component {
  componentDidMount() {
    fetch("https://ipapi.co/json/").then((r) => {
      r.json()
        .then((rnew) => {
          var data = rnew["country_name"];
          document.getElementById("footer").innerHTML += data;
        })
        .catch((e) => {});
    });
  }

  render() {
    return (
      <div>
        <footer className="bg-gray-200 bottom-0 left-0 right-0 font-footer dark:bg-gray-600">
          <div className="max-w-screen-xl mx-auto pt-5 pb-5 dark:text-gray-300">
            <span className="flex justify-evenly">
              <a href="#" className="hover:underline">
                License
              </a>
              <h1 className="inline-block pr-1">Copyright © 2021 Balaji K</h1>
              <p id="footer" className="inline-block"></p>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
