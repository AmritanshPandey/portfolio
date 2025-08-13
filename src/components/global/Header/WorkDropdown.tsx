import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import styles from "../../../styles/Header.module.css";
import { useState } from "react";

interface WorkDropdownProps {
  mode: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export default function WorkDropdown({ mode, onLinkClick }: WorkDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <ul className={`${styles.dropdown} ${mode === "mobile" && isOpen ? styles.dropdownActive : ""}`}>
      <li><Link href="/work/case-studies" onClick={onLinkClick}>Case Studies</Link></li>
      <li><Link href="/work/short-projects" onClick={onLinkClick}>Short Projects</Link></li>
      <li><Link href="/work/ui-gallery" onClick={onLinkClick}>UI Gallery</Link></li>
    </ul>
  );

  if (mode === "desktop") {
    return (
        <ul>
      <li
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span className={styles.dropdownToggle}>
          Work <ChevronDownIcon className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ""}`} />
        </span>
        {isOpen && links}
      </li>
      </ul>
    );
  }

  // Mobile mode
  return (
    <li>
      <div
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Work
        <ChevronDownIcon
          className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ""}`}
        />
      </div>
      {isOpen && links}
    </li>
  );
}