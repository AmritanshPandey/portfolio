import styles from '../../styles/Home.module.css';
import WorkCard from './WorkCard';
import workData from '../../data/workData.json';

export default function WorkGrid() {
    return (
        <div className={styles.workContainer}>
            <div className={styles.workContent}>
                <h2>My Work</h2>
                <h4>Designing, developing, and innovating to craft impactful digital experiences</h4>
            </div>

            <div className={styles.workCardContainer}>
                {workData.map((work) => (
                    <WorkCard
                        key={work.id}
                        title={work.title}
                        description={work.description}
                        image={work.image}
                        url={work.url}
                    />
                ))}
            </div>
        </div>
    );
}