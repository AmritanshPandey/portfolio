import styles from "./Header.module.css";
import Image from "next/image";

function FeaturedWork() {
    return (
        <div className='flex flex-col gap-4'>
            <div className={styles.featuredWorkContainer}>
        
            <div className='flex flex-row gap-2'>
                <div className='thumb-sm'>
                    <Image
                        src="/assets/images/work/proj1.png"
                        alt="Project preview"
                        width={56}
                        height={56}
                        className="rounded-sm"
                    />
                </div>
                <div className="flex flex-col highlight-color cursor-pointer">
                    <h5 className='label'>Project Title One</h5>
                    <p className='caption'>A brief description of Project One.</p>
                </div>
            </div>

             <div className='flex flex-row gap-2'>
                <div className='thumb-sm'>
                    <Image
                        src="/assets/images/work/proj1.png"
                        alt="Project preview"
                        width={56}
                        height={56}
                        className="rounded-sm"
                    />
                </div>
                <div className="flex flex-col highlight-color cursor-pointer">
                    <h5 className='label'>Project Title One</h5>
                    <p className='caption'>A brief description of Project One.</p>
                </div>
            </div>

             <div className='flex flex-row gap-2'>
                <div className='thumb-sm'>
                    <Image
                        src="/assets/images/work/proj1.png"
                        alt="Project preview"
                        width={56}
                        height={56}
                        className="rounded-sm"
                    />
                </div>
                <div className="flex flex-col highlight-color cursor-pointer">
                    <h5 className='label'>Project Title One</h5>
                    <p className='caption'>A brief description of Project One.</p>
                </div>
            </div>

              <div className='flex flex-row gap-2'>
                <div className='thumb-sm'>
                    <Image
                        src="/assets/images/work/proj1.png"
                        alt="Project preview"
                        width={56}
                        height={56}
                        className="rounded-sm"
                    />
                </div>
                <div className="flex flex-col highlight-color cursor-pointer">
                    <h5 className='label'>Project Title One</h5>
                    <p className='caption'>A brief description of Project One.</p>
                </div>
            </div>
        </div>

    </div>

    )
}

export default FeaturedWork