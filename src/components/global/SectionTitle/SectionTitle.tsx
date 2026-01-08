import React from "react";
import { IconChevronRight } from '@tabler/icons-react';
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  actionLabel = "View all",
  actionHref,
}: SectionTitleProps) {
  return (
    <div className={styles.sectionTitleContainer}>
      <div>
        <span>{title}</span>
        {subtitle && <p className="body">{subtitle}</p>}
      </div>

      {actionHref && (
        <div className={styles.sectionTitleButton}>
          <a href={actionHref} className="btn-text">
            {actionLabel}
          </a>
          <IconChevronRight stroke={2} />
        </div>
      )}
    </div>
  );
}