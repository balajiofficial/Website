import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="flex justify-center">
      <div className="font-about md:w-2/3 w-11/12 mt-4">
        <div>
          <Link href={`/blog/${post.id}`} passHref>
            <div className="cursor-pointer">
              <p className="text-3xl font-extrabold font-sans hover:text-blue-700 dark:text-gray-200 dark:hover:text-purple-400">
                {post.title}
              </p>
            </div>
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
