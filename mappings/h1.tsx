import { ReactElement } from "react";

export default function PostH1({
  children,
  ...props
}): ReactElement<HTMLHeadingElement> {
  return (
    <h1 className="text-6xl font-inter font-semibold mb-3 mt-3" {...props}>
      {children}
    </h1>
  );
}
