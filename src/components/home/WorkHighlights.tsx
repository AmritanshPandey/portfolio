import { IconDevices, IconArrowUpRight, IconDeviceImac, IconSparkles, IconDeviceMobileCode, IconCategory2, IconCode, IconTableHeart, IconBrandSupernova, IconIcons, IconCube } from '@tabler/icons-react';
import SectionTitle from '../global/SectionTitle/SectionTitle'
import IconCard from '../global/Cards/IconCard';

function WorkHighlights() {
    return (
        <section className='work-highlight padding-page secondary-background'>
            <SectionTitle title="Work Highlights" />
            <div className="image-card-grid margin-top-xxl">
                <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />

                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
                   <IconCard
                    icon={<IconDevices width={40} height={40} stroke={1.5} />}
                    title="UX Case Studies"
                    description="End-to-end product design from research and problem framing to outcomes"
                    actionIcon={<IconArrowUpRight />}
                    onClick={() => console.log("clicked")}
                />
            </div>

        </section>
    )
}

export default WorkHighlights