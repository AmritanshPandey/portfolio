import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function WorkCard({ title, description, image }) {
    return (
        <div className={styles.workCardContainer}>
            <Image 
                src={image} 
                alt={title} 
                width={300} 
                height={300} 
                className={styles.workCardImage} 
            />
            <div className={styles.workCardContent}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}