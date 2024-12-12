import React from "react";
import { ArrowRight, Star } from "lucide-react";

function CardPreview() {
    return (
        <div className="border border-black/15 rounded-[15px] shadow">
            <div className="h-[150px] sm:h-[200px] md:h-[350px] w-full relative overflow-hidden">
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
            <div className="pt-2 md:pt-5 pb-3 px-4 flex justify-between md:items-center">
                <div>
                    <h1 className="text-[16px] md:text-xl text-coklat font-semibold">
                        Alone with nature
                    </h1>
                    <p>
                        <span className="text-xl md:text-2xl text-coklat font-bold">
                            $100
                        </span>
                        <span className="textxl md:text-2xl">/</span>
                        <span className="text-sm">person</span>
                    </p>
                </div>
                <div className="bg-black h-7 w-[31px] md:h-[35px] md:w-[35px] flex justify-center items-center rounded-full">
                    <ArrowRight className="text-white w-5 h-5" />
                </div>
            </div>
        </div>
    );
}

export default CardPreview;
