import React from "react";
import { Facebook, Instagram, Linkedin, SmartphoneIcon, Twitter } from "lucide-react";
function Footer() {
    return (
        <div className="p-[2rem] md:p-[4rem] bg-black rounded-t-[25px] md:rounded-t-[50px] text-white">
            <div className="flex justify-between border-b pb-[3rem] gap-8 flex-wrap">
                <div>
                    {/* <h1 className="text-3xl font-bold mb-3">Logo</h1> */}
                    <div className="bg-white rounded-full mb-10">
                        <div style={{backgroundImage: "url('kreasitex_logo.png')"}} className="h-16 w-52 md:w-64 bg-cover bg-center">
                        </div>
                    </div>
                    <p className="w-[250px] tracking-[-1px] text-[18px]">
                        Gudang Kain para Penjahit Terpercaya dan Terbaik
                    </p>
                </div>
                <div className="">
                    <p className="font-bold">
                        Address
                    </p>
                    <p>
                        JL. Kabupaten, Km. 3, 5 RT. 01 RW. 033, Bragasari,
                    </p>
                    <p>
                        Salakan, Trihanggo, Gamping, Sleman Regency, Special Region of Yogyakarta 55291
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between pt-[3rem]">
                <div>
                    <p className="tracking-[-1px] text-[18px] font-bold">
                        CV. Kreasi Textile Indonesia
                    </p>
                </div>
                <div className="flex lg:gap-8 flex-wrap gap-2 justify-center md:justify-end">
                    <div>
                        <a href="https://www.instagram.com/kreasitexindonesia/" className="text-black font-bold border-black flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4 bg-[#F8DC37]">
                            <Instagram size={32} />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                @kreasitexindonesia
                            </p>
                        </a>
                    </div>
                    <a href="https://wa.me/+6281990380293" className="text-black font-bold border-black flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4 bg-[#F8DC37]">
                        <SmartphoneIcon size={32} />
                        <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                            +62 819-9038-0293
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
