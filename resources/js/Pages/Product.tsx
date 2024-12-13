import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import React, { useEffect, useState } from "react";

function Product() {
    const [dataProduk, setDataProduk] = useState([]);
    const [dataKategory, setDataKategory] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resDataBahan = await getData("/bahan/data");
            setDataKategory(resDataBahan);
            console.log(resDataBahan)
            const resDataProduk = await getData(`/product/category/${resDataBahan[0].id}`);
            setDataProduk(resDataProduk);
        }
        fetchData();
    }, []);

    const [isType, setIsType] = useState("katun jepang");

    const changeData = async(type) => {
        const newDataProduk = await getData(`/product/category/${type}`)
        setDataProduk(newDataProduk)
    };

    return (
        <Layout>
            <div className="bg-white py-10 lg:py-40 rounded-3xl relative -top-5">
                <div className="flex justify-center my-20">
                    <div
                        className="flex flex-col bg-center justify-center lg:px-28 h-96 md:w-1/2 mx-14 overflow-hidden p-10 rounded-2xl"
                        style={{ backgroundImage: "url(/fabric-image.jpg)" }}
                    >
                        <p className="font-light md:text-4xl text-2xl">SHINING</p>
                        <p className="font-light md:text-4xl text-2xl">
                            A LIGHT ON EXCELLENCE
                        </p>
                        <p className="font-light md:text-4xl text-2xl">IN LAMP DESIGN</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero quaerat optio, eum velit quibusdam quia
                            laudantium ipsam assumenda labore amet quasi, ex
                            sapiente, soluta pariatur fuga quae eligendi
                            inventore at!
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center text-center items-center w-screen">
                        <div className="md:w-1/2 mx-14">
                            <p className="font-light md:text-6xl text-2xl">OUR PRODUCT</p>
                            <p className="my-10 text-gray-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam temporibus veniam in
                                voluptatibus blanditiis quod rerum, perspiciatis
                                a aperiam esse ut eius nostrum recusandae
                                dolorem quidem optio id alias ipsam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 justify-center my-10 w-screen px-14 overflow-auto">
                    {dataKategory.map(data =>
                        <button
                            className=""
                            onClick={() => changeData(data.id)}
                        >
                            {data.nama}
                        </button>
                    )}
                </div>
                <div className="flex justify-center">
                    <div className="lg:w-1/2 w-screen mx-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-10 md:mx-10 mx-5">
                            {dataProduk.map((e, index) => {
                                return (
                                    <div className="rounded-xl overflow-hidden bg-[#F5F5F5]">
                                        <div
                                            className="m-2 lg:h-80 h-64 bg-cover bg-center rounded-xl"
                                            style={{
                                                backgroundImage:
                                                    `url(/storage/${e.gambar})`,
                                            }}
                                        ></div>
                                        <div className="h-10 text-xl font-medium">
                                            <p>{e.nama}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
