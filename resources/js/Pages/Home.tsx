import DynamicIcon from "@/Components/DynamicIcon";
import Faq from "@/Components/Faq";
import Gmap from "@/Components/Gmap";
import ProductPreview from "@/Components/ProductPreview";
import Testimoni from "@/Components/Testimoni";
import TitleSection from "@/Components/TitleSection";
import { getValues, ValueProps } from "@/Components/ValueItem";
import ValuesSection from "@/Components/ValueSection";
import Layout from "@/Layouts/Layout";
import React from "react";
function Home() {
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
            {/* <ValuesSection /> */}
            <div className="main__container pt-[3rem] sm:pt-[10rem] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <div className="sticky top-24">
                        <TitleSection>Top Value</TitleSection>
                        <p className="max-w-[450px] opacity-75">
                            Komitmen kami adalah memberikan layanan terbaik
                            dengan produk kain unggulan yang mengutamakan
                            keindahan, kenyamanan, dan daya tahan.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {data.map((item) => (
                        <div className="flex gap-8 items-start">
                            <div className="sm:p-4 p-3 bg-yellow-400 max-w-max rounded-full">
                                <DynamicIcon
                                    iconId={item.icon}
                                    className="xl:w-12 xl:h-12  w-8 h-8"
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold capitalize">
                                    {item.title}
                                </h1>
                                <p className="max-w-[400px] text-sm text-gray-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProductPreview />
            <Faq />
            <Testimoni />
            <Gmap />
        </Layout>
    );
}

export default Home;
