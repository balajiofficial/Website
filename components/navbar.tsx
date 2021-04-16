import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav
      className={
        styles.nav +
        " shadow-lg text-lg bg-gradient-to-tl from-pink-600 to-blue-600 text-white"
      }
    >
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
              <li className="hover:text-gray-900">Projects</li>
            </a>
          </Link>
          <Link href="/academics">
            <a>
              <li className="hover:text-gray-900">Academic Milestones</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li className="hover:text-gray-900">Blog</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
