import React from "react";

interface FullImageCardProps {
  image: string;
  type?: string;
  title: string;
  href?: string;
}

function FullImageCard({ image, type, title, href }: FullImageCardProps) {
  const Content = (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        {type && <span className="eyebrow">{type}</span>}
        <span className="h3">{title}</span>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="full-image-card rounded-md cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
    >
      {Content}
    </a>
  ) : (
    <section
      className="full-image-card rounded-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      {Content}
    </section>
  );
}

export default FullImageCard;