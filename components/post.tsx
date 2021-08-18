import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="flex justify-center">
      <div className="font-about w-2/3 border-b-2 border-gray-300 dark:border-gray-600 mt-4">
        <div>
          <Link href={`/blog/${post.slug}`} passHref={true}>
            <a>
              <p className="text-3xl font-extrabold font-sans hover:text-blue-800 dark:text-gray-200 dark:hover:text-cyan-500">
                {post.frontmatter.title}
              </p>
            </a>
          </Link>
          <p className="text-gray-600 text-lg dark:text-blue-300">
            {post.frontmatter.date}
          </p>
          <p className="text-lg mb-4 mt-2.5 text-gray-500 dark:text-gray-400">
            {post.frontmatter.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
