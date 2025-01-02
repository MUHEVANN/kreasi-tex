import React from "react";
import ValueCard from "@/Components/ValueCard";
import { get } from "@/lib/api";
import { useCarouselStore } from "@/hooks/useCarouselStore";

export type ValueProps = {
    title: string;
    desc: string;
    icon: string;
    id: number;
    created_at: string;
};

export const getValues = async () => {
    const res = await get("/values/data");
    return res.data.data;
};

function ValueItem() {
    const { value } = useCarouselStore();

    return (
        <div className="flex items-center justify-center lg:gap-10 gap-[2rem]  flex-wrap">
            {value.map((item, index) => (
                <ValueCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    icon={item.icon}
                />
            ))}
        </div>
    );
}

export default ValueItem;
