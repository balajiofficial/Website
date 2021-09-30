import Link from "next/link";
import { ReactElement } from "react";

export default function PostsBox({ post }): ReactElement<HTMLDivElement> {
  return (
    <div className="xl:w-3/4 lg:w-5/6 mt-7">
      <div>
        <div>
          <Link href={`/post/${post.slug}`} passHref>
            <a className="text-2xl md:text-3xl font-extrabold text-black hover:text-sky-500 dark:text-white dark:hover:text-cyan-400">
              {post.title}
            </a>
          </Link>
          <div className="flex">
            <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
              {post.date}
            </div>
            <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1 mr-1 ml-1">
              •
            </div>
            <div className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
              {post.time}
            </div>
          </div>
          <p className="font-about text-base md:text-lg text-gray-600 dark:text-gray-400">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
