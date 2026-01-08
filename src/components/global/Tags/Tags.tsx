import styles from './Tags.module.css'

interface TagsProps {
 title?: string;
 tagHref?: string;
}

function Tags({ title, tagHref }: TagsProps) {
  return (
    <div className={styles.tags}>
      {title && <span className="btn-text-black">{title}</span>}
      {tagHref && <a href={tagHref}></a>}
    </div>
  )
}

export default Tags