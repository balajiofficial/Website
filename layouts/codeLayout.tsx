import { Component } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default class CodeLayout extends Component {
  componentDidMount() {
    let codeElements = document.getElementsByTagName("code");
    for (let i = 0; i < codeElements.length; i++) {
      codeElements[i].className = "rounded-md mt-2 mb-2 text-base";
      hljs.highlightElement(codeElements[i]);
    }
  }

  render() {
    return <div></div>;
  }
}
