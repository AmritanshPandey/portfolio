import styles from '../../styles/Home.module.css';



export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <span className='display'>Amritansh Pandey</span>
                <div className={styles.heroSubtitle}>
                    <span className='h2'>I design with empathy and build with precision</span>
                </div>
                <div className={styles.heroDescription}>
                    <span className='subheading'>UX/UI designer-developer crafting accessible, high-polish product experiences—from rapid Lean UX to robust design systems and AI-powered features.</span>
                    <span className='body-semibold'>Currently designing at Mastercard · 6+ years of experience</span>
                </div>



                <div className={styles.heroSkillsContainer}>
                    <div className={styles.heroSkills}><span>UX Strategy</span></div>
                    <div className={styles.heroSkills}><span>UI/Visual Design</span></div>
                    <div className={styles.heroSkills}><span>Interaction Design</span></div>
                    <div className={styles.heroSkills}><span>Design Systems</span></div>
                    <div className={styles.heroSkills}><span>Front-end Dev</span></div>
                    <div className={styles.heroSkills}><span>AI Integration</span></div>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="3.78"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                </svg>

            </div>

        </div>



    );
}