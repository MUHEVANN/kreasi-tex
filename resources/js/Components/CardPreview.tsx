import React from "react";
import { ArrowRight, Star } from "lucide-react";

function CardPreview() {
    return (
        <div className="border border-black/15 rounded-[15px] shadow">
            <div className="h-[350px] w-full relative overflow-hidden">
                <img
                    src="hero.jpg"
                    alt=""
                    className="w-full h-full rounded-[15px] "
                />
                <div className="absolute top-4 right-4 flex gap-2 items-center backdrop-blur-xl text-white rounded-full px-6 py-1">
                    <span className="text-xl">4</span>
                    <Star />
                </div>
            </div>
            <div className="pt-5 pb-3 px-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl text-coklat font-semibold">
                        Alone with nature
                    </h1>
                    <p>
                        <span className="text-2xl text-coklat font-bold">
                            $100
                        </span>
                        <span className="text-2xl">/</span>person
                    </p>
                </div>
                <div className="bg-black h-[35px] w-[35px] flex justify-center items-center rounded-full">
                    <ArrowRight className="text-white" />
                </div>
            </div>
        </div>
    );
}

export default CardPreview;
