import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const PostCode = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.trim()}
        language={className.replace("language-", "") as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className + " rounded-lg text-base text-left mt-2 mb-2 font-code"
            }
            style={style}
          >
            <div className="flex justify-end mr-5">
              <button
                className="bg-gray-300 hover:bg-gray-100 text-black pl-2 pr-2 pb-0.5 mb-1 sm:mb-0 text-sm rounded-b-md "
                onClick={() => {
                  navigator.clipboard.writeText(children);
                }}
              >
                Copy
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
};

export default PostCode;
