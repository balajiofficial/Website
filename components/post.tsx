import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="flex justify-center">
      <div className="font-about md:w-2/3 w-11/12 mt-4">
        <div>
          <Link href={`/post/${post.id}`} passHref>
            <a className="text-3xl font-extrabold font-sans text-black hover:text-blue-700 dark:text-gray-100 dark:hover:text-cyan-400 hover:no-underline">
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
