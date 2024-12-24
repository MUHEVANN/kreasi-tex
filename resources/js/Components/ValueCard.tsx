import React from "react";
import DynamicIcon from "./DynamicIcon";

type ValueCardProps = {
    icon: any;
    title: string;
    desc: string;
};

function ValueCard({ icon, title, desc }: ValueCardProps) {
    return (
        <div className="max-w-[180px] lg:max-w-[25%] xl:max-w-[20%] flex justify-center flex-col items-center gap-4">
            <div className="p-4 bg-gray-200 rounded-full ">
                <DynamicIcon iconId={icon} />
            </div>
            <div>
                <h1 className="text-center text-xl font-semibold mb-2 capitalize">
                    {title}
                </h1>
                <p className="text-center opacity-75 text-[14px] md:text-[16px] ">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ValueCard;
