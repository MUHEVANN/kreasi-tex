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
type GambarColumn = {
    id: number;
    gambar: string;
};

function About() {
    const [data, setData] = useState<AboutColumn[]>([]);
    const [gambar, setGambar] = useState<GambarColumn[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getData("/about/data");
            const res2 = await getData("/gambar-about/data");
            setData(res);
            setGambar(res2);
        }
        fetchData();
    }, []);

    return (
        <Layout>
            <div className="main__container">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 py-[3rem]">
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
                    {gambar.map((item) => (
                        <img
                            src={`/storage/${item.gambar}`}
                            alt=""
                            key={item.id}
                            className="w-full h-[400px] object-cover"
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default About;
