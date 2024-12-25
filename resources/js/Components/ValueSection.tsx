import React from "react";
import ValueItem from "@/Components/ValueItem";
import TitleSection from "@/Components/TitleSection";

function ValuesSection() {
    return (
        <section className="main__container pt-[10rem] pb-[2rem] rounded-t-[25px] bg-white -translate-y-5">
            <div className="mb-12 ">
                <TitleSection className={"text-center"}>
                    Top Values
                </TitleSection>
                <p className="text-center text-coklat opacity-80 text-[14px] md:text-[18px] max-w-[800px] mx-auto">
                    Komitmen kami adalah memberikan layanan terbaik dengan
                    produk kain unggulan yang mengutamakan keindahan,
                    kenyamanan, dan daya tahan.
                </p>
            </div>
            <ValueItem />
        </section>
    );
}

export default ValuesSection;
