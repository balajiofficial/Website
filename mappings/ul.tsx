import { ReactElement } from "react";

export default function PostUnorderedList({
  children,
  ...props
}): ReactElement<HTMLUListElement> {
  return (
    <ul className="list-disc" {...props}>
      {children}
    </ul>
  );
}
