import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Component, Fragment } from "react";

export default class Layout extends Component<{
  children;
}> {
  state = {
    children: this.props.children,
    theme: "light",
    footer: false,
  };

  themeFunc = (theme: string) => {
    this.setState({ theme: theme });
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

  render() {
    return (
      <Fragment>
        <Navbar themeFunc={this.themeFunc} />
        {this.state.children}
        <Footer />
      </Fragment>
    );
  }
}
