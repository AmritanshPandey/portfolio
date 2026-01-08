import { ReactNode } from "react";

interface IconCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    actionIcon?: ReactNode;
    onClick?: () => void;
}

function IconCard({
    icon,
    title,
    description,
    actionIcon,
    onClick,
}: IconCardProps) {
    return (
        <section
            className="icon-card primary-background cursor-pointer rounded-md padding-xl"
            onClick={onClick}
        >
            <div className="flex flex-col gap-4">
                {icon}

                <div className="flex flex-col gap-2">
                    <span className="h3">{title}</span>
                    <span className="body">{description}</span>
                </div>

                {actionIcon && (
                    <div className="flex items-end justify-end">
                        <div className="circle-button">
                            {actionIcon}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default IconCard;