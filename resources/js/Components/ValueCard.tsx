import React from "react";

type ValueCardProps = {
    Icon: any;
    title: string;
    desc: string;
}

function ValueCard({ Icon, title, desc } : ValueCardProps) {
    return (
        <div className="max-w-[180px] lg:max-w-[20%] flex justify-center flex-col items-center gap-4">
            <div className="p-4 bg-black/20 rounded-full ">
                <Icon size={32} className="text-coklat" />
            </div>
            <div>
                <h1 className="text-center text-2xl font-semibold mb-2">
                    {title}
                </h1>
                <p className="text-center opacity-75">{desc}</p>
            </div>
        </div>
    );
}

export default ValueCard;
