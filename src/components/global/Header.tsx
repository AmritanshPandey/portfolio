import Link from 'next/link';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import styles from '../../styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navDesktop}>
          <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>

            <li
              onMouseEnter={() => setIsWorkDropdownOpen(true)}
              onMouseLeave={() => setIsWorkDropdownOpen(false)}
            >
              <span className={styles.dropdownToggle}>
                Work <ChevronDownIcon className={`${styles.dropdownIcon} ${isWorkDropdownOpen ? styles.rotate : ''}`} />
              </span>
              {isWorkDropdownOpen && (
                <ul className={styles.dropdown}>
                  <li><Link href="./work/case-studies">Case Studies</Link></li>
                  <li><Link href="./work/short-projects">Short Projects</Link></li>
                  <li><Link href="./work/ui-gallery">UI Gallery</Link></li>

                </ul>
              )}
            </li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            <li>
              <a href="/assets/resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.hamburgerMenu}>

          <button className={styles.menuButton} onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Bars3Icon className={styles.icon} />
          </button>

          {isOpen && (
            <div className={styles.overlay}>
              <div className={styles.menu}>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <XMarkIcon className={styles.icon} />
                </button>
                <ul className={styles.mobileNav}>
                  <li><Link href="/">Home</Link></li>

                  <li
                    onMouseEnter={() => setIsWorkDropdownOpen(true)}
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <span className={styles.dropdownToggle}>
                      Work <ChevronDownIcon className={`${styles.dropdownIcon} ${isWorkDropdownOpen ? styles.rotate : ''}`} />
                    </span>
                    {isWorkDropdownOpen && (
                      <ul className={styles.dropdown}>
                        <li><Link href="./work/case-studies">Case Studies</Link></li>
                        <li><Link href="./work/short-projects">Short Projects</Link></li>
                        <li><Link href="./work/ui-gallery">UI Gallery</Link></li>

                      </ul>
                    )}
                  </li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/contact">Contact</Link></li>

                  <li>
                    <a href="/assets/resume.pdf" download>
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}