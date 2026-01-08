import { useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./Header.module.css";
import MobileWorkDropdown from "./MobileWorkDropDown";


export default function MobileMenu({ onClose }: { onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    return (
        <div className={styles.mobileNav}>
            <button
                className={styles.mobileClose}
                onClick={onClose}
                aria-label="Close menu"
            >
                <IconX size={24} />
            </button>

            <div className={styles.mobileNavContent}>
                <Link href="/" onClick={onClose}>Home</Link>
                <MobileWorkDropdown />
                <Link href="/about" onClick={onClose}>About</Link>
                <Link href="/articles" onClick={onClose}>Articles</Link>
                <Link href="/contact" onClick={onClose}>Contact</Link>
                <a href="/assets/resume.pdf" download>Resume</a>
            </div>
        </div>
    );
}