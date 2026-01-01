import styles from '../../styles/Home.module.css';
import Tags from '../global/Tags';



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
                    <span className='subheading text-bold'>Currently designing at Mastercard · 6+ years of experience</span>
                </div>



                <div className="flex flex-row flex-wrap gap-2">
                    <Tags title="UX Strategy" />
                    <Tags title="UI/Visual Design" />
                    <Tags title="Interaction Design" />
                    <Tags title="Design Systems" />
                    <Tags title="Front-end Dev" />
                    <Tags title="AI Integration" />

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