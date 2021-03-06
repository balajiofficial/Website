import { ReactElement } from "react";

export default function PostH2({
  children,
  ...props
}): ReactElement<HTMLHeadingElement> {
  return (
    <h2 className="text-5xl font-inter font-semibold mb-3 mt-3" {...props}>
      {children}
    </h2>
  );
}
