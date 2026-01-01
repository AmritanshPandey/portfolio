import React from "react";

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
    <div className="section-header flex items-center justify-between">
      <div>
        <span className="h1">{title}</span>
        {subtitle && <p className="body-muted">{subtitle}</p>}
      </div>

      {actionHref && (
        <a href={actionHref} className="btn-text">
          {actionLabel}
        </a>
      )}
    </div>
  );
}