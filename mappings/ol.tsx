import { ReactElement } from "react";

export default function PostOrderedList({
  children,
  ...props
}): ReactElement<HTMLOListElement> {
  return (
    <ol className="list-decimal" {...props}>
      {children}
    </ol>
  );
}
