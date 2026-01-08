import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import {
  IconPhone, IconMail, IconBrandLinkedin, IconBrandBehance, IconBrandDribbble, IconBrandGithub, IconMapPin,
  IconDevices, IconDeviceImac, IconSparkles, IconDeviceMobileCode, IconCategory2, IconCode, IconTableHeart,
  IconBrandSupernova, IconIcons, IconCube,
  IconFileDescription, IconBrandApple, IconBrandAndroid
} from '@tabler/icons-react';



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="flex flex-row flex-wrap gap-8 justify-between">
          <div className="flex flex-col gap-4">
            <span className='h2'>Get in touch</span>

            <span className='eyebrow very-light-grey-color'>Contact me at</span>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-button-white">
                <IconPhone stroke={1.5} />
                <a href="tel:+918130513047">+91 8130513047</a>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconMail stroke={1.5} />
                <a href="mailto:amritansh.pandey6@gmail.com">amritansh.pandey6@gmail.com</a>
              </div>

              <span className='eyebrow very-light-grey-color'>Socials</span>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandLinkedin stroke={1.5} />
                <a href="https://www.linkedin.com/in/amritansh-pandey-bb5b3087/">amritansh-pandey-bb5b3087</a>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandBehance stroke={1.5} />
                <a href="https://www.behance.net/amritanshpandey">amritanshpandey</a>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandDribbble stroke={1.5} />
                <a href="https://dribbble.com/amrit10">amrit10</a>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandGithub stroke={1.5} />
                <a href="https://github.com/AmritanshPandey">AmritanshPandey</a>
              </div>

              <span className='eyebrow very-light-grey-color'>Location</span>

              <div className="flex items-center gap-2 text-button-white">
                <IconMapPin stroke={1.5} />
                <span>Gurgaon</span>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className='h2'>Product Design</span>
            <div className="flex flex-col gap-4">

              <span className='eyebrow very-light-grey-color'>AI Focused and Development</span>

              <div className="flex items-center gap-2 text-button-white">
                <IconSparkles stroke={1.5} />
                <Link href="/work/case-studies">AI Products</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconCode stroke={1.5} />
                <Link href="/work/case-studies">Design & Dev Tools</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconDeviceMobileCode stroke={1.5} />
                <Link href="/work/case-studies">Web Apps</Link>
              </div>

              <span className='eyebrow very-light-grey-color'>UI/UX Design</span>

              <div className="flex items-center gap-2 text-button-white">
                <IconDevices stroke={1.5} />
                <Link href="/work/case-studies">UX Case Studies</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconTableHeart stroke={1.5} />
                <Link href="/work/case-studies">UI Concepts</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconCategory2 stroke={1.5} />
                <Link href="/work/case-studies">Design Systems</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconDeviceImac stroke={1.5} />
                <Link href="/work/case-studies">Landing Page UI</Link>
              </div>


            </div>
          </div>


          <div className="flex flex-col gap-4">
            <span className='h2'>Beyond Interfaces</span>
            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandSupernova stroke={1.5} />
                <Link href="/work/case-studies">Illustrations</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconIcons stroke={1.5} />
                <Link href="/work/case-studies">Branding</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconCube stroke={1.5} />
                <Link href="/work/case-studies">3D Models</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className='h2'>Downloads</span>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-button-white">
                <IconFileDescription stroke={1.5} />
                <Link href="/docs/amritansh-pandey-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandApple stroke={1.5} />
                <Link href="/apps/ios">iOS Apps</Link>
              </div>

              <div className="flex items-center gap-2 text-button-white">
                <IconBrandAndroid stroke={1.5} />
                <Link href="/apps/android">Android Apps</Link>
              </div>

            </div>
          </div>
        </div>


      </div>

      <div className={styles.footerText}>
        <p>&copy; {new Date().getFullYear()} Amritansh Pandey. All rights reserved.</p>
      </div>

    </footer>
  );
}