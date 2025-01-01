import DynamicIcon from "@/Components/DynamicIcon";
import Faq from "@/Components/Faq";
import Gmap from "@/Components/Gmap";
import ProductPreview from "@/Components/ProductPreview";
import Testimoni from "@/Components/Testimoni";
import { getValues, ValueProps } from "@/Components/ValueItem";
import ValuesSection from "@/Components/ValueSection";
import Layout from "@/Layouts/Layout";
import React, { useLayoutEffect } from "react";

function Home() {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 950,
            left: 100,
            behavior: "smooth",
        });
    }, []);
    const [data, setData] = React.useState<ValueProps[]>([]);
    React.useEffect(() => {
        async function fetchData() {
            const res = await getValues();
            setData(res);
        }
        fetchData();
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
