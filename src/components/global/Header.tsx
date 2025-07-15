import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from '../../styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li
            onMouseEnter={() => setIsWorkDropdownOpen(true)}
            onMouseLeave={() => setIsWorkDropdownOpen(false)}
          >
            <span className={styles.dropdownToggle}>
              Work <ChevronDownIcon className={styles.icon} />
            </span>
            {isWorkDropdownOpen && (
              <ul className={styles.dropdown}>
                <li><Link href="/work/case-studies">Case Studies</Link></li>
                <li><Link href="/work/short-projects">Short Projects</Link></li>
                <li><Link href="/work/ui-gallery">UI Gallery</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <a href="/assets/resume.pdf" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}