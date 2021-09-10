import { Component } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

export default class PostCode extends Component {
  state = {
    children: (
      this.props as {
        children: string;
        className: string;
      }
    ).children.trim(),
    className: (
      this.props as {
        children: string;
        className: string;
      }
    ).className,
    copied: false,
  };

  language = this.state.className.replace("language-", "");
  languageText =
    this.language[0].toUpperCase() + this.language.slice(1).toLowerCase();

  copyIt = () => {
    this.setState({ copied: true });
    navigator.clipboard.writeText(this.state.children);
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Highlight
          {...defaultProps}
          theme={theme}
          code={this.state.children}
          language={this.language as Language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={
                className +
                " rounded-lg text-base text-left mt-2 mb-2 font-code"
              }
              style={style}
            >
              <div className="flex justify-end">
                <p className="bg-blue-600 text-white pl-2 pr-2 pb-0.5 mb-1 sm:mb-0 rounded-b-md mr-4 text-sm">
                  {this.languageText}
                </p>
                <button
                  className="bg-gray-300 hover:bg-gray-100 text-black pl-2 pr-2 pb-0.5 mb-1 sm:mb-0 text-sm rounded-b-md mr-5"
                  onClick={this.copyIt}
                >
                  {this.state.copied ? <p>Copied!</p> : <p>Copy</p>}
                </button>
              </div>
              <div className="pl-2 pb-5 pr-2 overflow-auto">
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className="table-row"
                  >
                    <div className="table-cell text-right pr-4 pl-1.5 text-gray-500">
                      {i + 1}
                    </div>
                    <div className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </pre>
          )}
        </Highlight>
      </div>
    );
  }
}
