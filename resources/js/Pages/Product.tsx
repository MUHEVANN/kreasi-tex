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
            const resDataProduk = await getData("/product/data");
            setDataProduk(resDataProduk);
            const resDataBahan = await getData("/bahan/data");
            setDataKategory(resDataBahan);
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
            <div className="bg-white py-40 rounded-3xl relative -top-5">
                <div className="flex justify-center my-20">
                    <div
                        className="flex flex-col bg-center justify-center lg:px-28 h-96 w-1/2 overflow-hidden rounded-2xl"
                        style={{ backgroundImage: "url(/fabric-image.jpg)" }}
                    >
                        <p className="font-light text-4xl">SHINING</p>
                        <p className="font-light text-4xl">
                            A LIGHT ON EXCELLENCE
                        </p>
                        <p className="font-light text-4xl">IN LAMP DESIGN</p>
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
                        <div className="w-1/2">
                            <p className="font-light text-6xl">OUR PRODUCT</p>
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
                <div className="flex gap-10 justify-center my-10">
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
                    <div className="w-1/2">
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 text-center gap-10">
                            {dataProduk.map((e, index) => {
                                return (
                                    <div className="rounded-xl overflow-hidden bg-[#F5F5F5]">
                                        <div
                                            className="m-2 lg:h-80 h-64 bg-cover rounded-xl"
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
