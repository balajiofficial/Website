import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className={styles.nav + " shadow-md text-lg bg-blue-100"}>
      <div>
        <ul className="flex justify-evenly font-medium">
          <Link href="/">
            <a>
              <li className="mt-3">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={41}
                  height={43}
                  className="rounded-full"
                />
              </li>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <li className="text-gray-600 hover:text-gray-900">Projects</li>
            </a>
          </Link>
          <Link href="/resume">
            <a>
              <li className="text-gray-600 hover:text-gray-900">Resume</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className="text-gray-600 hover:text-gray-900">Contact Me</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li className="text-gray-600 hover:text-gray-900">Blog</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
