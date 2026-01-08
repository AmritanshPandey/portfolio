import React from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react';

const ArticleCard = () => {
    return (
        <section className='article-card flex flex-col'>
            <div className="img-frame aspect-16-9">
                <img
                    src="/assets/images/article.png"
                    alt="title"
                    className="img-fluid rounded-top overflow-hidden"
                />
            </div>

            <div className="image-card-content flex flex-col gap-2 primary-background padding-lg rounded-bottom">
                <span className="h3">Article title</span>

                <span className="body">A UX case study focused on solving user problems through design, testing and development</span>
                <div className='text-button flex items-center gap-1'>
                    <span>Read More</span>
                    <IconArrowNarrowRight stroke={2} />
                </div>
            </div>




        </section>
    )
}

export default ArticleCard