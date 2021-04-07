import styles from "../styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav + " shadow-md text-lg"}>
      <div>
        <ul className="flex justify-evenly font-medium">
          <li>
            <p className={styles.name + " text-gray-600"}>
              <Link href="/">Balaji</Link>
            </p>
          </li>
          <Link href="/about">
            <a>
              <li className="text-gray-600 hover:text-gray-400">About Me </li>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <li className="text-gray-600 hover:text-gray-400">Projects</li>
            </a>
          </Link>
          <Link href="/resume">
            <a>
              <li className="text-gray-600 hover:text-gray-400">Resume</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className="text-gray-600 hover:text-gray-400">Contact Me</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li className="text-gray-600 hover:text-gray-400">Blog</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
