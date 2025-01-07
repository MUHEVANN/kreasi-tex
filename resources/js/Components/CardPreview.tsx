import React from "react";
import { ArrowRight } from "lucide-react";
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
    console.log(props)

    return (
        <div className="border border-black/15 rounded-[15px] shadow lg:w-[23%] w-[47%]">
            <div className="h-[150px] sm:h-[200px] md:h-[350px] w-full relative overflow-hidden">
                <img
                    src={"/storage/" + props.gambar}
                    alt=""
                    className="w-full h-full rounded-[15px] bg-cover bg-center object-cover"
                />
            </div>
            <div className="pt-2 md:pt-5 pb-3 px-4 flex justify-between md:items-center">
                <div>
                    <h1 className="text-[16px] md:text-xl text-coklat font-semibold">
                        {props.nama}
                    </h1>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="bg-black h-7 w-[31px] md:h-[35px] md:w-[35px] flex justify-center items-center rounded-full">
                            <ArrowRight className="text-white w-5 h-5" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] z-[999]">
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
