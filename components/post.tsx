import Link from "next/link";

export default function Post({ post, index }) {
  return (
    <div className="flex justify-center" key={post.id}>
      <div className="font-about md:w-2/3 w-11/12 mt-4">
        <div>
          <Link href={`/post/${post.id}`} passHref>
            <a
              className={`text-3xl font-extrabold font-sans text-black dark:text-gray-300 ${
                [
                  "hover:text-purple-700 dark:hover:text-purple-500",
                  "hover:text-fuchsia-700 dark:hover:text-fuchsia-500",
                  "hover:text-cyan-700 dark:hover:text-cyan-500",
                  "hover:text-lime-600 dark:hover:text-lime-600",
                  "hover:text-rose-700 dark:hover:text-rose-500",
                ][index % 5]
              } hover:no-underline`}
            >
              <div className="cursor-pointer">
                <p>{post.title}</p>
              </div>
            </a>
          </Link>
          <p className="text-gray-600 text-lg dark:text-blue-300">
            {post.date}
          </p>
          <p className="text-lg mb-3 mt-1 text-gray-500 dark:text-gray-400">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
