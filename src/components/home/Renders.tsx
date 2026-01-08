import React from 'react'
import FullImageCard from '../global/Cards/FullImageCard'
import SectionTitle from "../global/SectionTitle/SectionTitle"

function Renders() {
  return (

    <section className='renders padding-page primary-background'>
      <SectionTitle
        title="3D Renders"
        actionLabel="View All"
        actionHref="/work/case-studies"
      />
      <div className="flex flex-row gap-6 margin-top-lg flex-33-33-33">
        <FullImageCard
          image="/assets/images/card2.png"
          type="3D Render"
          title="Minimal Interior Scene"
          href="/work/case-studies"
        />

        <FullImageCard
          image="/assets/images/card3.png"
          type="Product Visualization"
          title="Product Visualization"
           href="/work/case-studies"
        />
        <FullImageCard
          image="/assets/images/card4.png"
          type="3D Render"
          title="Abstract 3D Shapes"
           href="/work/case-studies"
        />
        <FullImageCard
          image="/assets/images/card2.png"
          type="3D Render"
          title="Minimal Interior Scene"
          href="/work/case-studies"
        />
      </div>
    </section>
  )
}

export default Renders