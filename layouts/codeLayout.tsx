import { Component, Fragment } from "react";
import hljs from "highlight.js";
//import "highlight.js/styles/github-dark-dimmed.css";
import "highlight.js/styles/base16/solarized-dark.css";

export default class CodeLayout extends Component {
  componentDidMount() {
    let preElements = document.getElementsByTagName("pre");
    let codeElements = document.getElementsByTagName("code");
    for (let i = 0; i < preElements.length; i++) {
      preElements[i].className = "bg-pre rounded-lg";
      let language = codeElements[i].className
        .replaceAll("hljs", "")
        .replaceAll(" ", "")
        .replace("language-", "");
      language = language[0].toUpperCase() + language.slice(1);
      preElements[i].innerHTML =
        `<div class="mr-6 mt-3 text-white flex justify-end"><p class="text-base pl-2 pr-2 pb-0.5 bg-blue-500 rounded-b-md">${language}</p></div>` +
        preElements[i].innerHTML;
    }
    for (let i = 0; i < codeElements.length; i++) {
      codeElements[i].className = "rounded-b-lg text-base";
      hljs.highlightElement(codeElements[i]);
      codeElements[i].className += " p-0";
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}
