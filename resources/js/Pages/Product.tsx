import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function Product() {
    const [dataProduk, setDataProduk] = useState<any[]>([]);
    const [dataKategory, setDataKategory] = useState([]);
    const [isType, setIsType] = useState("");
    const [isTypeId, setIsTypeId] = useState(0);
    const [showSeeAll, setShowSeeAll] = useState(true);
    const [pageProduct, setPageProduct] = useState(2);

    const paginateDataProduct = async () => {
        const resProduct = await getData(
            `/product/category/${isTypeId}?page=` + pageProduct
        );
        setDataProduk((prevData) => [...prevData, ...resProduct.data]);
        setPageProduct((prevPage) => prevPage + 1);
        if (resProduct.data.length < 6) {
            setShowSeeAll(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const resDataBahan = await getData("/bahan/data");
            setDataKategory(resDataBahan);
            const resDataProduk = await getData(
                `/product/category/${resDataBahan[0].id}`
            );
            setIsType(resDataBahan[0].nama);
            setDataProduk(resDataProduk.data);
            if (resDataProduk.data.length < 6) {
                setShowSeeAll(false);
            }
        }
        fetchData();
    }, []);

    const changeData = async (type: any) => {
        const newDataProduk = await getData(`/product/category/${type.id}`);
        setIsType(type.nama);
        setIsTypeId(type.id);
        setDataProduk(newDataProduk.data);
        setShowSeeAll(false);
        if (newDataProduk.data.length == 6) {
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
            <div className="bg-white  py-10 lg:py-40 rounded-3xl relative -top-5 z-[99]">
                <div>
                    <div className="flex flex-col justify-center text-center items-center ">
                        <div className="md:w-1/2 mx-14">
                            <p className="font-light md:text-6xl text-2xl">
                                OUR PRODUCT
                            </p>
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
                <div className="flex gap-10 justify-center my-10  px-14 overflow-auto">
                    {dataKategory.map((data: any) => (
                        <Button
                            variant={isType == data.nama ? "default" : "ghost"}
                            key={data.nama}
                            className={`${
                                isType == data.nama && "font-bold font-2xl"
                            }`}
                            onClick={() => changeData(data)}
                        >
                            {data.nama}
                        </Button>
                    ))}
                </div>
                <div className="flex justify-center">
                    <div className="lg:w-1/2 w-screen mx-3">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-10 md:mx-10 mx-5">
                            {dataProduk.map((e: any, index) => {
                                return (
                                    <Dialog key={e.id}>
                                        <DialogTrigger asChild>
                                            <button className="rounded-xl overflow-hidden bg-[#F5F5F5]">
                                                <div
                                                    className="m-2 w-64 h-64 bg-cover bg-center rounded-xl"
                                                    style={{
                                                        backgroundImage: `url(/storage/${e.gambar})`,
                                                    }}
                                                ></div>
                                                <div className="h-10 text-xl font-medium">
                                                    <p>{e.nama}</p>
                                                </div>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[625px] p-6 z-[999]">
                                            <DialogHeader>
                                                <DialogTitle className="text-center font-bold text-2xl">
                                                    Detail Produk
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div
                                                    className="relative bg-center bg-cover rounded-md overflow-hidden shadow-lg"
                                                    style={{
                                                        backgroundImage: `url(/storage/${e.gambar})`,
                                                        height: "300px",
                                                    }}
                                                ></div>

                                                <div className="ml-4 flex flex-col justify-between">
                                                    <p className="font-semibold text-2xl text-gray-800">
                                                        {e.nama}
                                                    </p>
                                                    <ul className="text-gray-600 mt-4 space-y-2">
                                                        <li className="text-sm">
                                                            <strong>
                                                                Bahan:
                                                            </strong>{" "}
                                                            {e.bahan_nama}
                                                        </li>
                                                        <li className="text-sm">
                                                            <strong>
                                                                Deskripsi:
                                                            </strong>{" "}
                                                            {e.deskripsi}
                                                        </li>

                                                        <li className="flex items-center text-sm">
                                                            <div className="flex">
                                                                {Array.from({
                                                                    length: parseInt(
                                                                        e.count_star
                                                                    ),
                                                                }).map(
                                                                    (
                                                                        _,
                                                                        index
                                                                    ) => (
                                                                        <Star
                                                                            key={
                                                                                index
                                                                            }
                                                                            color="#F3C158"
                                                                            fill="#F3C158"
                                                                        />
                                                                    )
                                                                )}
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
                        {showSeeAll && (
                            <div className="my-10 flex justify-center">
                                <button
                                    className="px-4 py-2 rounded-2xl bg-black text-white"
                                    onClick={() => paginateDataProduct()}
                                >
                                    See All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
