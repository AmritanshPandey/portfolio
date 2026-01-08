import Link from "next/link";
import { IconDevices, IconChevronDown, IconDeviceImac, IconSparkles, IconDeviceMobileCode, IconCategory2, IconCode, IconTableHeart, IconBrandSupernova, IconIcons, IconCube } from '@tabler/icons-react';
import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import FeaturedWork from "./FeaturedWork";

export default function WorkDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);
  const CLOSE_DELAY = 160;

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimeout.current = window.setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY);
  };

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <span className={styles.dropdownToggle}>
     <span className="body-semibold">Work</span>
        <IconChevronDown
          className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ""
            }`}
        />
      </span>

      <div
        className={`${styles.megaMenu} ${isOpen ? styles.megaMenuActive : ""
          }`}
      >
        <div className={styles.megaGrid}>
          <div>
            <span className="eyebrow grey-color">Featured Work</span>
            <FeaturedWork />
          </div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow grey-color">Product Design</span>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconDevices stroke={1.5} />
              <span className="label">UX Case Studies</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconSparkles stroke={1.5} />
              <span className="label">AI Products</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconTableHeart stroke={1.5} />
              <span className="label">UI Concepts</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconCategory2 stroke={1.5} />
              <span className="label">Design Systems</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconDeviceImac stroke={1.5} />
              <span className="label">Landing Page Designs</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconDeviceMobileCode stroke={1.5} />
              <span className="label">Apps</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconCode stroke={1.5} />
              <span className="label">Tools</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow grey-color">Beyond Interfaces</span>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              < IconBrandSupernova stroke={1.5} />
              <span className="label">Illustrations</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconIcons stroke={1.5} />
              <span className="label">Branding</span>
            </div>

            <div className="flex flex-row gap-2 margin-top-sm items-center highlight-color cursor-pointer">
              <IconCube stroke={1.5} />
              <span className="label">3D Models</span>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
}