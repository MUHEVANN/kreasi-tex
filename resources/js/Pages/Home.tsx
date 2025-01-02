import Faq from "@/Components/Faq";
import Gmap from "@/Components/Gmap";
import ProductPreview from "@/Components/ProductPreview";
import Testimoni from "@/Components/Testimoni";
import ValuesSection from "@/Components/ValueSection";
import { useCarouselStore } from "@/hooks/useCarouselStore";
import Layout from "@/Layouts/Layout";
import React, { useEffect, useLayoutEffect } from "react";
import { CarouselColumn } from "./Carousel/DataTable/ColumnsCarousel";
import { ValueProps } from "@/Components/ValueItem";
import { AboutColumn } from "./About";

function Home({
    carousels,
    values,
    abouts,
}: {
    carousels: CarouselColumn[];
    values: ValueProps[];
    abouts: AboutColumn[];
}) {
    const { setCarousel, setValue, setAbout } = useCarouselStore();
    useEffect(() => {
        setCarousel(carousels);
        setValue(values);
        setAbout(abouts);
    }, [carousels, setCarousel]);

    useLayoutEffect(() => {
        window.scrollTo({
            top: 950,
            left: 100,
            behavior: "smooth",
        });
    }, []);
    return (
        <Layout>
            <ValuesSection />
            <ProductPreview />
            <Testimoni />
            <Faq />
            <Gmap />
        </Layout>
    );
}

export default Home;
