import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 fixed bottom-0 left-0 right-0 flex justify-center text-center">
      <div className="max-w-screen-xl mx-auto pt-4 pb-4">
        <h1>Copyright © 2021 Balaji</h1>
        <a
          href="https://github.com/K-Balaji/Website/blob/main/LICENSE"
          target="_blank"
          className="hover:underline hover:text-blue-600"
        >
          <h2>License</h2>
        </a>
      </div>
    </footer>
  );
}
