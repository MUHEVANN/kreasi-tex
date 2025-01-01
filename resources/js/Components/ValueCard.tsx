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
            <div className="p-4 bg-gray-400 rounded-full text-black ">
                <DynamicIcon iconId={icon} />
            </div>
            <div>
                <h1 className="text-center text-[25px] font-semibold mb-2 capitalize text-coklat">
                    {title}
                </h1>
                <p className="text-center opacity-60 text-[14px] md:text-[16px] ">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ValueCard;
