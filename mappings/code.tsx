import { useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

export default function PostCode({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const [copied, setCopied] = useState(false);

  children = children.trim();

  const language = className.replace("language-", "");
  const getLanguageText = () => {
    let languageText =
      language[0].toUpperCase() + language.slice(1).toLowerCase();
    switch (languageText) {
      case "Cpp":
        languageText = "C++";
        break;
      default:
        languageText = languageText;
        break;
    }
    return languageText;
  };

  const copyIt = () => {
    setCopied(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              " rounded-lg text-base text-left mt-2 mb-2 font-code border-2 border-white dark:border-gray-500"
            }
            style={style}
          >
            <div className="flex justify-end">
              <p className="bg-blue-600 text-white pl-2 pr-2 pb-0.5 mb-1 sm:mb-0 rounded-b-md mr-4 text-sm">
                {getLanguageText()}
              </p>
              <button
                className="bg-gray-300 hover:bg-gray-100 text-black pl-2 pr-2 pb-0.5 mb-1 sm:mb-0 text-sm rounded-b-md mr-5"
                onClick={copyIt}
              >
                {copied ? <p>Copied!</p> : <p>Copy</p>}
              </button>
            </div>
            <div className="pl-2 pb-5 pr-2 overflow-auto">
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className="table-row"
                >
                  <div className="table-cell text-right pr-4 pl-1.5 text-gray-500 select-none">
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
