import React from "react";
import { Button } from "./ui/button";
function Footer() {
    return (
        <div className="p-[2rem] md:p-[4rem] bg-black rounded-t-[25px] md:rounded-t-[50px] text-white">
            <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
                <div className="flex w-full md:w-auto sm:gap-10 flex-col sm:flex-row">
                    <img
                        src="/kreasitex_logo.png"
                        alt=""
                        className="w-52 h-16 bg-white object-cover rounded-full"
                    />
                    <p className="sm:border-l sm:ps-10 sm:py-4 max-w-[250px] mt-4 md:mt-0">
                        Gudang Kain para Penjahit Terpercaya dan Terbaik
                    </p>
                </div>

                <div className="flex mt-4 md:mt-0">
                    <Button variant={"link"} className="">
                        <a
                            href="https://www.instagram.com/kreasitexindonesia/"
                            className="text-black font-bold border-black flex items-center gap-x-2 border rounded-full max-w-max py-3 px-4 xl:px-6 bg-[#F8DC37]"
                        >
                            <img src="/ig.png" alt="" className="w-8 h-8" />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden lg:block">
                                @kreasitexindonesia
                            </p>
                        </a>
                    </Button>
                    <Button variant={"link"}>
                        <a
                            href="https://wa.me/+6281990380293"
                            className="text-black font-bold border-black flex items-center gap-x-2 border rounded-full max-w-max py-3 px-4 xl:px-6 bg-[#F8DC37]"
                        >
                            <img src="/wa.png" alt="" className="w-8 h-8 " />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden lg:block">
                                +62 819-9038-0293
                            </p>
                        </a>
                    </Button>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-x-8 ">
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="bg-white rounded-full">
                        <div
                            style={{
                                backgroundImage: "url('kreasitex_logo.png')",
                            }}
                            className="h-16 w-52 md:w-64 bg-cover bg-center"
                        ></div>
                    </div>
                    <p className="max-w-[250px] tracking-[-1px] text-[18px] md:border-l md:ps-10 mb:py-4 border-white">
                        Gudang Kain para Penjahit Terpercaya dan Terbaik
                    </p>
                </div>
                <div className="flex justify-end w-full ">
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
            </div> */}
        </div>
    );
}

export default Footer;
