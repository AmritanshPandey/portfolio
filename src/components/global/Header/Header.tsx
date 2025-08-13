import Link from 'next/link';
import { Bars3Icon, XMarkIcon, HomeIcon, ComputerDesktopIcon, UserIcon } from '@heroicons/react/24/solid';
import styles from '../../../styles/Header.module.css';
import WorkDropdown from './WorkDropdown';
import { useState } from 'react';

export default function Header() {
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navDesktop}>
          <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>

            <li>
              <WorkDropdown mode="desktop" />
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

          <button className={styles.menuButton} onClick={() => { setIsOpen(true); setIsClosing(false); }} aria-label="Open menu">
            <Bars3Icon className="icon-medium" />
          </button>

          {isOpen && (
            <div className={`${styles.overlay} ${isClosing ? styles.slideOut : styles.slideIn}`}>
              <div className={styles.menu}>
                <button
                  className={styles.closeButton}
                  onClick={() => {
                    setIsClosing(true);
                    setTimeout(() => setIsOpen(false), 300);
                  }}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="icon-medium" />
                </button>
                <ul className={styles.mobileNav}>
                  <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>

                  <li>
                    <WorkDropdown mode="mobile" onLinkClick={() => setIsOpen(false)} />
                  </li>

                  <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                  <li><Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                  <li>
                    <a href="/assets/resume.pdf" download onClick={() => setIsOpen(false)}>
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