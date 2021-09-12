import Link from "next/link";
import { ReactElement } from "react";

export default function PostLink({
  href,
  children,
  ...props
}): ReactElement<HTMLDivElement> {
  const isLocal = href.startsWith("/");

  const linkClass = "text-blue-600 dark:text-blue-500 font-semibold font-inter";

  if (isLocal) {
    return (
      <div>
        <Link href={href} passHref>
          <a className={linkClass} {...props}>
            {children}
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <a
          href={href}
          {...props}
          className={linkClass}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    );
  }
}
