import { ReactElement } from "react";

export default function PostBlockQuote({
  children,
  ...props
}): ReactElement<HTMLDivElement> {
  return (
    <div>
      <blockquote
        className="border-l-4 border-gray-300 text-xl pl-4"
        {...props}
      >
        {children}
      </blockquote>
    </div>
  );
}
