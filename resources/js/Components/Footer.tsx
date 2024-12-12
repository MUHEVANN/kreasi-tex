import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
    return (
        <div className="p-[2rem] md:p-[4rem] bg-black rounded-t-[25px] md:rounded-t-[50px] text-white">
            <div className="flex justify-between border-b pb-[3rem] gap-8 flex-wrap">
                <div>
                    {/* <h1 className="text-3xl font-bold mb-3">Logo</h1> */}
                    <div style={{backgroundImage: "url('kreasitex_logo.png')"}} className="h-16 w-52 md:w-64 bg-cover bg-center">
                    </div>
                    <p className="w-[250px] tracking-[-1px] text-[18px]">
                        Elevating Experience & Seize Control Of Your Smart Home
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-16">
                    <div>
                        <h1 className="font-bold text-2xl mb-3">Donate</h1>
                        <ul className="flex max-w-[140px] flex-wrap gap-x-4 opacity-60">
                            <li>Education</li>
                            <li>Social</li>
                            <li>Medicine</li>
                            <li>Disaster</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl mb-3">Help</h1>
                        <ul className="flex max-w-[180px] flex-wrap gap-x-4 opacity-60">
                            <li>FAQ</li>
                            <li>PrivacyPolicy</li>
                            <li>Accesibilty</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl mb-3">Company</h1>
                        <ul className="flex max-w-[140px] flex-wrap gap-x-4 opacity-60">
                            <li>About Us</li>
                            <li>Carrers</li>
                            <li>Services</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between pt-[3rem]">
                <div>
                    <p className="w-[150px] tracking-[-1px] text-[18px]">
                        &copy;KreasiTex.{new Date().getFullYear()} <br />
                        All Rights Reserved
                    </p>
                </div>
                <div className="flex lg:gap-8 flex-wrap gap-2 justify-center md:justify-end">
                    <div>
                        <div className="flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4">
                            <Instagram size={32} />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                Instagram
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4">
                            <Facebook size={32} />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                Facebook
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4">
                            <Twitter size={32} />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                Twitter
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-4 border rounded-full max-w-max py-2 px-4">
                            <Linkedin size={32} />
                            <p className="text-xl tracking-[-1px] opacity-80 hidden sm:block">
                                Linkedin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
