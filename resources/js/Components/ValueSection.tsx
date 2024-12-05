import React from "react";
import ValueItem from "@/Components/ValueItem";
import TitleSection from "@/Components/TitleSection";

function ValuesSection() {
    return (
        <section className="main__container">
            <div className="mb-12">
                <TitleSection className={"text-center"}>
                    Top Values
                </TitleSection>
                <p className="text-center text-coklat opacity-80 text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis, pariatur.
                </p>
            </div>
            <ValueItem />
        </section>
    );
}

export default ValuesSection;
