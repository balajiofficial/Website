import { ReactElement } from "react";

export default function PostH3({
  children,
  ...props
}): ReactElement<HTMLHeadingElement> {
  return (
    <h3 className="text-4xl font-inter font-semibold mb-2 mt-2" {...props}>
      {children}
    </h3>
  );
}
