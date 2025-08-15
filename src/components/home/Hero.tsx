import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import MyPhoto from '../../../public/assets/images/my-photo.png';


export default function Hero() {
    return (


        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1>Amritansh Pandey</h1>
                <h3>UX/UI Designer and Developer</h3>
                <div className={styles.heroDescription}>
                    <p>With 6 years of experience in crafting user-centered digital products, I design with empathy and code with precision always putting people at the heart of every interface.</p>
                    <div className={styles.heroContact}>
                        <a href="https://www.behance.net/amritanshpandey" className={styles.contactLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-behance"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" /><path d="M3 12l4.5 0" /><path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" /><path d="M16 6l3 0" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/amritansh-pandey-bb5b3087/" className={styles.contactLink} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                        </a>
                        <a href="https://dribbble.com/amrit10" className={styles.contactLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-dribbble"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 3.6c5 6 7 10.5 7.5 16.2" /><path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" /><path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" /></svg>
                        </a>    <a href="" className={styles.contactLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                        </a>
                    </div>
                </div>



            </div>
            <div className={styles.heroImageContainer}>
                <Image src={MyPhoto} alt="Profile Image" className={styles.heroImage} />
            </div>
        </div>
    );
}