import React from "react";
import { IconChevronRight } from '@tabler/icons-react';
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
    <div className="section-header flex items-center justify-between margin-bottom-xl">
      <div>
        <span className="h1">{title}</span>
        {subtitle && <p className="body-muted">{subtitle}</p>}
      </div>

      {actionHref && (
        <div className="flex items-center btn-text">
        <a href={actionHref} className="btn-text">
          {actionLabel}
        </a>
        <IconChevronRight stroke={2} />
        </div>
      )}
    </div>
  );
}