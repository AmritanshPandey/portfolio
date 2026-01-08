
interface ImageCardProps {
    title: string;
    description?: string;
    image: string;
    href?: string;
}

function ImageCard({ title, description, image, href }: ImageCardProps) {
    const CardWrapper = href ? "a" : "div";

    return (
        <section className="image-card card border-radius-lg overflow-hidden">
            <CardWrapper href={href} className="block">
                <div className="img-frame aspect-1-1">
                    <img
                        src={image}
                        alt={title}
                        className="img-fluid rounded-lg overflow-hidden"
                    />
                </div>

                <div className="image-card-content flex flex-col gap-2 margin-top-sm margin-bottom-sm">
                    <span className="h3">{title}</span>
                    {description && (
                        <span className="body">{description}</span>
                    )}
                </div>
            </CardWrapper>
        </section>
    );
}

export default ImageCard;