import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function Product() {
    const [dataProduk, setDataProduk] = useState([]);
    const [dataKategory, setDataKategory] = useState([]);
    const [isType, setIsType] = useState("");
    const [isTypeId, setIsTypeId] = useState(0);
    const [showSeeAll, setShowSeeAll] = useState(true);
    const [pageProduct, setPageProduct] = useState(2);

    const paginateDataProduct = async () => {
        const resProduct = await getData(`/product/category/${isTypeId}?page=` + pageProduct);
        setDataProduk(prevData => [...prevData, ...resProduct.data]);
        setPageProduct(prevPage => prevPage + 1);
        if(resProduct.data.length < 6) {
            setShowSeeAll(false);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const resDataBahan = await getData("/bahan/data");
            setDataKategory(resDataBahan);
            const resDataProduk = await getData(`/product/category/${resDataBahan[0].id}`);
            setIsType(resDataBahan[0].nama)
            setDataProduk(resDataProduk.data);
            if(resDataProduk.data.length < 6) {
                setShowSeeAll(false);
            }
        }
        fetchData();
    }, []);

    const changeData = async(type) => {
        const newDataProduk = await getData(`/product/category/${type.id}`)
        setIsType(type.nama);
        setIsTypeId(type.id);
        setDataProduk(newDataProduk.data)
        setShowSeeAll(false);
        if(newDataProduk.data.length == 6) {
            setShowSeeAll(true);
        }
    };

    const formatPrice = (price: string) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(parseInt(price));
    };

    return (
        <Layout>
            <div className="bg-white py-10 lg:py-40 rounded-3xl relative -top-5">
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
                            className={`${isType == data.nama && 'font-bold font-2xl'}`}
                            onClick={() => changeData(data)}
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="rounded-xl overflow-hidden bg-[#F5F5F5]">
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
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[625px]">
                                            <DialogHeader>
                                                <DialogTitle>Detail Produk</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid grid-cols-2">
                                                <div style={{backgroundImage: `url(/storage/${e.gambar})`}} className=" bg-center bg-cover border-solid border-2 rounded-md">
                                                </div>
                                                <div className="ml-4">
                                                    <p className="font-semibold text-xl">{e.nama}</p>
                                                    <ul>
                                                        <li>Bahan : {e.bahan_nama}</li>
                                                        <li>Deskripsi : {e.deskripsi}</li>
                                                        <li>Harga : {formatPrice(e.harga)}</li>
                                                        <li>
                                                            <div className="flex">
                                                                {Array.from({ length: parseInt(e.count_star) }).map((_, index) => (
                                                                    <Star key={index} color="#F3C158" fill="#F3C158"/>
                                                                ))}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                );
                            })}
                        </div>
                        {showSeeAll &&
                            <div className="my-10 flex justify-center">
                                <button className="px-4 py-2 rounded-2xl bg-black text-white" onClick={() => paginateDataProduct()}>See All</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
