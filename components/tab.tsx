import { Component } from "react";

export default class PostTab extends Component<{
  title: string;
  description;
}> {
  state = {
    title: this.props.title,
    description: this.props.description,
    expand: false,
  };

  render() {
    return (
      <div>
        <div className="cursor-pointer">
          <div
            className={`bg-gradient-to-r from-sky-500 to-purple-700 text-white text-lg sm:text-2xl ${
              this.state.expand ? "sm:rounded-t-lg" : "sm:rounded-lg"
            } flex items-center h-11 mt-5`}
            onClick={() => {
              this.setState({ expand: !this.state.expand });
            }}
          >
            <div className="ml-3">
              {this.state.expand ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="ml-2 font-inter font-semibold">{this.state.title}</p>
          </div>
          <div>{this.state.expand ? this.state.description() : <></>}</div>
        </div>
      </div>
    );
  }
}
