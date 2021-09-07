import Link from "next/link";

export default function BlogLink({ href, props, children }) {
  const isLocal = href.startsWith("/");

  const linkClass = "text-blue-500 hover:underline dark:text-blue-400";

  if (isLocal) {
    return (
      <Link href={href} passHref>
        <a className={linkClass} {...props}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        {...props}
        className={linkClass}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
}
