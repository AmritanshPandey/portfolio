import Tags from "../Tags/Tags";


interface BentoItem {
    title: string;
    image: string;
    size?: "bento-sm" | "bento-md" | "bento-lg";
    tags?: string[];
}

interface BentoCardProps {
    items: BentoItem[];
}

function BentoCard({ items }: BentoCardProps) {
    return (
        <section className="bento-card">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`bg-image ${item.size ?? "bento-md"}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                >

                    <div className="img-overlay " />
                    <div className="flex flex-col gap-2 bento-card-content">
                        <span className="h3">{item.title}</span>

                        {item.tags && (
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <Tags key={i} title={tag} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default BentoCard;