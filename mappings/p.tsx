import { ReactElement } from "react";

export default function PostParagraph({
  children,
  ...props
}): ReactElement<HTMLParagraphElement> {
  return (
    <p className="font-inter" {...props}>
      {children}
    </p>
  );
}
