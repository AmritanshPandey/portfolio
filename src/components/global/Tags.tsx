
interface TagsProps {
 title?: string;
 tagHref?: string;
}

function Tags({ title, tagHref }: TagsProps) {
  return (
    <div className="tags">
      {title && <span className="tag-title">{title}</span>}
      {tagHref && <a href={tagHref} className="tag-link"></a>}
    </div>
  )
}

export default Tags