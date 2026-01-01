import BentoCard from "../global/Cards/BentoCard"
import SectionTitle from "../global/SectionTitle"
import Tags from "../global/Tags"


function FeaturedWork() {
    return (
        <section className="featured-work padding-page">
            <SectionTitle
                title="Featured Work"
                actionLabel="Explore All"
                actionHref="/work/case-studies"
            />

            <section className="flex flex-col gap-6 margin-top-lg">
                <div className="flex flex-row gap-6 flex-40-60">
                    <BentoCard
                        items={[
                            {
                                title: "UX Case Studies",
                                image: "/assets/images/bento1.png",
                                size: "bento-lg",
                                tags: ["UX Strategy", "UI Design"]
                            }
                        ]}
                    />
                    <BentoCard
                        items={[
                            {
                                title: "UX Case Studies",
                                image: "/assets/images/bento3.png",
                                size: "bento-lg",
                                tags: ["UX Strategy", "UI Design", "Interaction Design"]
                            }
                        ]}
                    />

                </div>
                <div className="flex flex-row gap-6 flex-50-50">
                    <BentoCard
                        items={[
                            {
                                title: "UX Case Studies",
                                image: "/assets/images/bento4.png",
                                size: "bento-lg",
                                tags: ["UX Strategy", "UI Design"]
                            }
                        ]}
                    />
                    <BentoCard
                        items={[
                            {
                                title: "UX Case Studies",
                                image: "/assets/images/bento2.png",
                                size: "bento-lg",
                                tags: ["UX Strategy", "UI Design", "Interaction Design"]
                            }
                        ]}
                    />

                </div>

            </section>
        </section>
    )
}

export default FeaturedWork