import TitleSection from "@/Components/TitleSection";
import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import React, { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const MaterialInfo = () => {
    const [titleDesc, setTitleDesc] = useState("");
    const [desc, setDesc] = useState();
    const [activeButton, setActiveButton] = useState(0);
    const [data, setData] = useState([]);
    const [dataFunfact, setDataFunfact] = useState<any[]>([]);
    const [showSeeAll, setShowSeeAll] = useState(true);
    const [pageFunfact, setPageFunfact] = useState(2);

    const changeDesc = (data: any, index: any) => {
        setTitleDesc(data.nama);
        setDesc(data.deskripsi);
        setActiveButton(index);
    };

    const paginateDataFunfact = async () => {
        const resFunfact = await getData("/funfact/data?page=" + pageFunfact);
        setDataFunfact((prevData) => [...prevData, ...resFunfact.data]);
        setPageFunfact((prevPage) => prevPage + 1);
        if (resFunfact.data.length < 3) {
            setShowSeeAll(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData("/bahan/data");
            setData(res);
            if (res.length > 0) {
                setTitleDesc(res[0].nama);
                setDesc(res[0].deskripsi);
            }

            const resFunfact = await getData("/funfact/data");
            setDataFunfact(resFunfact.data);
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <div className="bg-white py-10 lg:py-40 rounded-3xl relative -top-5 z-[99]">
                <div className="mb-10 flex justify-center">
                    <TitleSection>Material Info</TitleSection>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 items-center text-center gap-x-5 md:gap-x-10 gap-y-5">
                        {data.map((e: any, index) => (
                            <button
                                key={index}
                                onClick={() => changeDesc(e, index)}
                                className={`${
                                    activeButton == index
                                        ? "bg-[#FDDD38]"
                                        : "bg-[#D9D9D9]"
                                } rounded-full lg:px-10 px-3 lg:py-4 py-2`}
                            >
                                <p
                                    className={`${
                                        activeButton == index
                                            ? "font-bold"
                                            : "font-medium"
                                    } lg:text-xl`}
                                >
                                    {e.nama}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="xl:w-1/2 bg-[#D9D9D9] w-screen p-10 md:m-20 m-10 rounded-xl">
                        <p className="font-medium text-lg my-5">{titleDesc}</p>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="text-center my-10">
                    <TitleSection>Apakah Kamu Tahu?</TitleSection>
                </div>
                {dataFunfact.map((data: any, index) => {
                    return (
                        <div className="lg:mx-72 my-10 mx-auto px-4 md:px-0 md:mx-24 text-white">
                            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        zIndex: 99,
                                    }}
                                    className={
                                        index % 2 == 0
                                            ? "order-first"
                                            : "order-last"
                                    }
                                >
                                    <InstagramEmbed
                                        url={data.link_instagram}
                                        width={328}
                                    />
                                </div>
                                <div className="rounded-3xl bg-[#FDDC06] p-10 text-black">
                                    <p className="text-3xl font-thin mb-5">
                                        {data.title1}
                                    </p>
                                    <p>{data.text1}</p>
                                </div>
                                <div className="rounded-3xl bg-[#342c2b] p-10">
                                    <p className="text-3xl font-thin mb-5">
                                        {data.title2}
                                    </p>
                                    <p>{data.text2}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {showSeeAll && (
                    <div className="flex justify-center">
                        <button
                            className="px-4 py-2 rounded-2xl bg-black text-white"
                            onClick={() => paginateDataFunfact()}
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default MaterialInfo;
