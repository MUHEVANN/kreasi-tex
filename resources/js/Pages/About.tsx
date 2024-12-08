import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import { useEffect, useState } from "react";

type AboutColumn = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    created_at: string;
};

function About() {
    const [data, setData] = useState<AboutColumn[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getData("/about/data");

            setData(res);
        }
        fetchData();
    }, []);
    return (
        <Layout>
            <div className="main__container">
                <div className="grid md:grid-cols-3 xl:grid-cols-4">
                    <h3 className="text-coklat text-[24px] font-bold">
                        About us
                    </h3>
                    {data.map((item, i) => (
                        <div className="col-span-2 xl:col-span-3" key={i}>
                            <h1 className="text-[35px] md:text-[50px]  leading-[50px] text-coklat font-bold font-secondary">
                                {item.title}
                            </h1>
                            <p className="text-2xl mt-6">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <img src="hero.jpg" alt="" />
                    <img src="hero.jpg" alt="" />
                    <img src="hero.jpg" alt="" />
                </div>
            </div>
        </Layout>
    );
}

export default About;
