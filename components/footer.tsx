export default function Footer() {
  return (
    <footer className="bg-gray-200 bottom-0 left-0 right-0 flex justify-center text-center font-footer dark:bg-gray-600">
      <div className="max-w-screen-xl mx-auto pt-5 pb-5 dark:text-gray-300">
        <span>
          <h1 className="inline-block pr-1">Copyright © 2021 Balaji |</h1>
          <a
            href="https://github.com/K-Balaji/Website/blob/main/LICENSE"
            target="_blank"
            className="text-blue-600 inline-block hover:underline dark:text-blue-300"
          >
            <h2>License</h2>
          </a>
        </span>
        <p>
          Contact me at{" "}
          <a
            href="mailto:notanemail@email.com"
            className="underline hover:no-underline"
          >
            notanemail@email.com
          </a>
        </p>
      </div>
    </footer>
  );
}
