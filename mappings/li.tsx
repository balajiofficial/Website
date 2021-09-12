import { ReactElement } from "react";

export default function PostListItem({
  children,
  ...props
}): ReactElement<HTMLLIElement> {
  return (
    <li className="font-inter ml-10 mt-1 mb-1" {...props}>
      {children}
    </li>
  );
}
