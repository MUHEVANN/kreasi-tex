import React from "react";
import TitleSection from "./TitleSection";
import CardPreview from "@/Components/CardPreview";
function ProductPreview() {
    return (
        <div className="main__container">
            <TitleSection className={"mb-16"}>Choose Your Product</TitleSection>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 ">
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
            </div>
        </div>
    );
}

export default ProductPreview;
