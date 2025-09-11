import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import About from '../../../public/assets/images/workcard.png';

export default function Aboutme() {
    return (
        <div className={styles.aboutContainer}>
            <h2>About me</h2>
            <div className={styles.aboutContent}>
                <Image src={About} alt="Profile Image" className={styles.aboutImage} />
                <div className={styles.aboutText}>
                    <p>I am a seasoned professional with over 6 years of experience transitioning from UI/UX design to Product Management. With expertise in mobile apps, e-commerce platforms, fintech, and SaaS, I excel at aligning design with business goals. Holding a PGDM in Marketing, I combine strategic business insight with hands-on experience in product design and front-end development (React.js, Next.js, HTML, CSS, JavaScript).</p>
                    <p>Passionate about defining product vision and delivering impactful solutions, I thrive in dynamic environments and excel at leading cross-functional teams to achieve business objectives. I am eager to take on greater responsibility in driving product strategy, roadmaps, and innovation.</p>
                </div>

            </div>
        </div>
    );
}