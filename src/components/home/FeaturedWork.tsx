import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type WorkCardProps = {
    title: string;
    description: string;
    image: string;
    url: string;
};

export default function WorkCard({ title, description, image, url }: WorkCardProps) {
    return (
        <div className={styles.workCard}>
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
                <Link href={url} className={styles.workCardButton}>
                    <span className="text-button">View Details</span>
                    <ArrowRightIcon className="icon-base" />
                </Link>
            </div>
        </div>
    );
}