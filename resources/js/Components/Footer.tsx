import React from "react";
import { Button } from "./ui/button";
function Footer() {
    return (
        <div className="p-[2rem] md:p-[4rem] bg-black rounded-t-[25px] md:rounded-t-[50px] text-white">
            <div className="flex justify-between gap-8 flex-wrap">
                <div className="flex items-center gap-10">
                    <div className="bg-white rounded-full">
                        <div
                            style={{
                                backgroundImage: "url('kreasitex_logo.png')",
                            }}
                            className="h-16 w-52 md:w-64 bg-cover bg-center"
                        ></div>
                    </div>
                    <p className="w-[250px] tracking-[-1px] text-[18px] border-l ps-10 py-4 border-white">
                        Gudang Kain para Penjahit Terpercaya dan Terbaik
                    </p>
                </div>
                <div className="flex">
                    <Button variant={"link"}>
                        <a
                            href="https://www.instagram.com/kreasitexindonesia/"
                            className="text-black font-bold border-black flex items-center gap-x-2 border rounded-full max-w-max py-3 px-6 bg-[#F8DC37]"
                        >
                            <img src="/ig.png" alt="" className="w-8 h-8" />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                @kreasitexindonesia
                            </p>
                        </a>
                    </Button>
                    <Button variant={"link"}>
                        <a
                            href="https://wa.me/+6281990380293"
                            className="text-black font-bold border-black flex items-center gap-x-2 border rounded-full max-w-max py-3 px-6 bg-[#F8DC37]"
                        >
                            <img src="/wa.png" alt="" className="w-8 h-8" />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                +62 819-9038-0293
                            </p>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
