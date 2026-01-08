import styles from './Home.module.css';
import Tags from '../global/Tags/Tags';



export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroTitle}>
                <span className='display'>Amritansh Pandey</span>
                <div className={styles.heroContent}>
                    <div className={styles.heroSubtitle}>
                        <span className='eyebrow-heading'>I design with empathy and build with precision</span>
                    </div>
                    <div className={styles.heroDescription}>
                        <span className=''>UX/UI designer-developer crafting accessible, high-polish product experiences from rapid Lean UX and prototyping to scalable design systems and AI-powered features.
                        </span>
                        <div className='hide-on-phone'>
                            <span className="">I bridge strategy, design, and front-end engineering to ship thoughtful, user-first products that balance craft, performance, and business impact.
                            </span>
                        </div>

                        <div className='short-on-phone-80'>
                            <span className={styles.heroMeta}>Currently designing at Mastercard · 6+ years of experience</span>
                        </div>

                    </div>


                    <div className="flex flex-wrap gap-16">
                        <Tags title="UX Strategy" />
                        <Tags title="UI/Visual Design" />
                        <Tags title="Interaction Design" />
                        <Tags title="Design Systems" />
                        <Tags title="Front-end Dev" />
                        <Tags title="AI Integration" />

                    </div>

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