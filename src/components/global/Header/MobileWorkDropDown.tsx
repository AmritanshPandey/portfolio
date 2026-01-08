import { useState } from "react";
import {
    IconChevronDown,
    IconDevices,
    IconSparkles,
    IconTableHeart,
    IconCategory2,
    IconDeviceImac,
    IconDeviceMobileCode,
    IconCode,
    IconBrandSupernova,
    IconIcons,
    IconCube,
} from "@tabler/icons-react";
import styles from "./Header.module.css";

export default function MobileWorkDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.mobileWork}>
            <button
                className={styles.mobileWorkToggle}
                onClick={() => setOpen(!open)}
            >
                <span className={styles.mobileMenuItem}>Work</span>
                <IconChevronDown
                    size={24}
                    className={`${styles.mobileChevron} ${open ? styles.rotate : ""}`}
                />
            </button>

            {open && (
                <div className={styles.mobileWorkContent}>
                    <div className={styles.mobileSection}>
                        <span className="eyebrow">Product Design</span>

                        <a><IconDevices size={24} stroke={2} /> UX Case Studies</a>
                        <a><IconSparkles size={24} stroke={2} /> AI Products</a>
                        <a><IconTableHeart size={24} stroke={2} /> UI Concepts</a>
                        <a><IconCategory2 size={24} stroke={2} /> Design Systems</a>
                        <a><IconDeviceImac size={24} stroke={2} /> Landing Pages</a>
                        <a><IconDeviceMobileCode size={24} stroke={2} /> Apps</a>
                        <a><IconCode size={24} stroke={2} /> Tools</a>
                    </div>
                    <div className={styles.mobileSection}>
                        <span className="eyebrow">Beyond Interfaces</span>

                        <a><IconBrandSupernova size={24} stroke={2} /> Illustrations</a>
                        <a><IconIcons size={24} stroke={2} /> Branding</a>
                        <a><IconCube size={24} stroke={2} /> 3D Models</a>
                    </div>

                </div>
            )}
        </div>
    );
}