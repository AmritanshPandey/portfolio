import React from 'react'
import SectionTitle from '../global/SectionTitle/SectionTitle'
import ImageCard from '../global/Cards/ImageCard'

function AI() {
    return (
        <section className="ai padding-page primary-background">
            <SectionTitle title="AI & Web Tools"
                actionLabel="Explore All"
                actionHref="/work/case-studies" />

            <div className="work-grid margin-top-lg">
                <ImageCard
                    title="AI Web Tools"
                    description="A UX case study focused on solving user problems through design & dev"
                    image="/assets/images/card1.png"
                    href="/work/case-studies"
                />

                <ImageCard
                    title="AI Web Tools"
                    description="A UX case study focused on solving user problems through design & dev"
                    image="/assets/images/card1.png"
                    href="/work/case-studies"
                />


                <ImageCard
                    title="AI Web Tools"
                    description="A UX case study focused on solving user problems through design & dev"
                    image="/assets/images/card1.png"
                    href="/work/case-studies"
                />


                <ImageCard
                    title="AI Web Tools"
                    description="A UX case study focused on solving user problems through design & dev"
                    image="/assets/images/card1.png"
                    href="/work/case-studies"
                />



            </div>
        </section>
    )
}

export default AI