import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import WorkDropdown from "./WorkDropdown";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 160); 
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navDesktop}>
        <ul className={styles.navbar}>
          <li><Link href="/">Home</Link></li>
          <li><WorkDropdown /></li>
          <li><Link href="/about">About me</Link></li>
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/contact">Contact me</Link></li>
          <li>
            <a href="/assets/resume.pdf" download>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}