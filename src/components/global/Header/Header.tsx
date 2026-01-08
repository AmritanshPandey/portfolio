import Link from "next/link";
import styles from "./Header.module.css";
import WorkDropdown from "./WorkDropdown";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.hamburgerMenu}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 size={24} />
        </button>

        <nav className={styles.navDesktop}>
          <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>
            <li><WorkDropdown /></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
            <li><a href="/assets/resume.pdf" download>Resume</a></li>
          </ul>
        </nav>
      </header>

      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
}