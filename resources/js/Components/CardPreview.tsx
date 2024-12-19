import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { ProductColumn } from "./ProductPreview";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

function CardPreview({ props }: { props: ProductColumn }) {
    const formatPrice = (price: string) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(parseInt(price));
    };
    return (
        <div className="border border-black/15 rounded-[15px] shadow">
            <div className="h-[150px] sm:h-[200px] md:h-[350px] w-full relative overflow-hidden">
                <img
                    src={"/storage/" + props.gambar}
                    alt=""
                    className="w-full h-full rounded-[15px] "
                />
                <div className="absolute top-4 right-4 flex gap-2 items-center backdrop-blur-xl border-2 border-[#F3C158] rounded-full px-6 py-1">
                    <span className="text-xl text-[#F3C158]">
                        {props.count_star}
                    </span>
                    <Star color="#F3C158" fill="#F3C158" />
                </div>
            </div>
            <div className="pt-2 md:pt-5 pb-3 px-4 flex justify-between md:items-center">
                <div>
                    <h1 className="text-[16px] md:text-xl text-coklat font-semibold">
                        {props.nama}
                    </h1>
                    <p>
                        <span className="text-xl md:text-2xl text-coklat font-bold">
                            {formatPrice(props.harga)}
                        </span>
                        <span className="textxl md:text-2xl"></span>
                    </p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="bg-black h-7 w-[31px] md:h-[35px] md:w-[35px] flex justify-center items-center rounded-full">
                            <ArrowRight className="text-white w-5 h-5" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle>Detail Produk</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2">
                            <div
                                style={{
                                    backgroundImage: `url(/storage/${props.gambar})`,
                                }}
                                className="bg-center bg-cover border-solid border-2 rounded-md"
                            ></div>
                            <div className="ml-4">
                                <p className="font-semibold text-xl">
                                    {props.nama}
                                </p>
                                <ul>
                                    <li>Bahan : {props.bahan_nama}</li>
                                    <li>Deskripsi : {props.deskripsi}</li>
                                    <li>Harga : {formatPrice(props.harga)}</li>
                                    <li>
                                        <div className="flex">
                                            {Array.from({
                                                length: parseInt(
                                                    props.count_star
                                                ),
                                            }).map((_, index) => (
                                                <Star
                                                    key={index}
                                                    color="#F3C158"
                                                    fill="#F3C158"
                                                />
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default CardPreview;
