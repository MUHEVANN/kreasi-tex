import React from "react";
import { Send } from "lucide-react";
import ValueCard from "@/Components/ValueCard";

function ValueItem() {
    return (
        <div className="flex items-center justify-center gap-x-[2rem] lg:gap-0 flex-wrap">
            <ValueCard
                Icon={Send}
                title="Airport pickup"
                desc=" Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae, nobis veritatis ea perspiciatis beatae"
            />
            <ValueCard
                Icon={Send}
                title="Airport pickup"
                desc=" Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae, nobis veritatis ea perspiciatis beatae"
            />
            <ValueCard
                Icon={Send}
                title="Airport pickup"
                desc=" Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae, nobis veritatis ea perspiciatis beatae"
            />
            <ValueCard
                Icon={Send}
                title="Airport pickup"
                desc=" Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae, nobis veritatis ea perspiciatis beatae"
            />
            <ValueCard
                Icon={Send}
                title="Airport pickup"
                desc=" Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae, nobis veritatis ea perspiciatis beatae"
            />
        </div>
    );
}

export default ValueItem;
