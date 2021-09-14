import Link from "next/link";
import { ReactElement } from "react";

export default function PostsBox({ post }): ReactElement<HTMLDivElement> {
  return (
    <div className="xl:w-3/4 lg:w-5/6 mt-10">
      <div>
        <div>
          <Link href={`/post/${post.slug}`} passHref>
            <a className="text-2xl md:text-3xl font-extrabold text-black hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400">
              {post.title}
            </a>
          </Link>
          <p className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
            {post.date}
          </p>
          <p className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
